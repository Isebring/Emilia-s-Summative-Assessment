import { Slider, Text } from "@mantine/core";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import parchmentTexture from "../assets/imgs/parchment2.jpg";
import "../css/HeroVideo.css";
import Quote from "./BlockQuote";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
}

const HistoricalTimeline: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const backgroundImage = new Image();
  const [speed, setSpeed] = useState(1);

  const updateSpeed = debounce((value: number) => setSpeed(value), 100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth * (window.innerWidth < 768 ? 0.8 : 1);
    canvas.height = window.innerHeight * (window.innerWidth < 768 ? 0.8 : 1);

    let scrollPosition = 0;
    const particleCount = window.innerWidth < 768 ? 50 : 100;
    const particles: Particle[] = [];

    const historicalEvents = [
      { id: 1, year: "1492", description: "Columbus Discovers Americas" },
      { id: 2, year: "1519", description: "Spanish Invasion of the Americas" },
      { id: 3, year: "1607", description: "Founding of Jamestown" },
      { id: 4, year: "1608", description: "The Triangular Trade begins" },
      { id: 5, year: "1773", description: "Tea Act and Boston Tea Party" },
      { id: 6, year: "1786", description: "Shays' Rebellion" },
      { id: 7, year: "1789", description: "Bill of Rights" },
    ];

    backgroundImage.src = parchmentTexture;
    backgroundImage.onload = () => {
      animate();
    };

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function drawParticles() {
      particles.forEach((particle) => {
        ctx!.beginPath();
        ctx!.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx!.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx!.fill();

        particle.y += particle.speed * speed;

        if (particle.y > canvas!.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas!.width;
        }
      });
    }

    function drawTimeline() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      ctx!.globalAlpha = 0.5;
      ctx!.drawImage(backgroundImage, 0, 0, canvas!.width, canvas!.height);

      ctx!.globalAlpha = 1;
      drawParticles();

      ctx!.strokeStyle = "#E6BE8A";
      ctx!.lineWidth = 7;
      ctx!.beginPath();
      ctx!.moveTo(0, canvas!.height / 2);
      ctx!.lineTo(canvas!.width, canvas!.height / 2);
      ctx!.stroke();

      historicalEvents.forEach((event, index) => {
        const eventX = canvas!.width - scrollPosition + index * 400;
        const eventY = canvas!.height / 2;

        ctx!.fillStyle = "#7F6C46";
        ctx!.beginPath();
        ctx!.arc(eventX, eventY, 10, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.strokeStyle = "#E6BE8A";
        ctx!.lineWidth = 5;
        ctx!.stroke();

        ctx!.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx!.shadowBlur = 10;
        ctx!.shadowOffsetX = 3;
        ctx!.shadowOffsetY = 3;

        ctx!.fillStyle = "#fff";
        ctx!.font = "18px Cinzel";
        ctx!.fillText(event.year, eventX - 20, eventY - 20);

        ctx!.fillStyle = "#fff";
        ctx!.font = "14px Cinzel";
        ctx!.fillText(event.description, eventX - 50, eventY + 30);
      });

      scrollPosition += speed;
      if (scrollPosition > canvas!.width + historicalEvents.length * 400) {
        scrollPosition = 0;
      }
    }

    function animate() {
      drawTimeline();
      requestAnimationFrame(animate);
    }

    initParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [speed]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Quote
        style={{
          position: "absolute",
          top: "2rem",
          left: "5rem",
          fontWeight: "600",
          zIndex: 5,
          background: "#ffffff81",
        }}
      />
      <Text
        style={{
          fontSize: "2.5rem",
          fontFamily: "Cinzel, serif",
          color: "white",
          position: "absolute",
          top: "22rem",
          left: "5rem",
          fontWeight: "600",
          zIndex: 5,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Timeline of some historical events
      </Text>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#222",
        }}
      />
      <label
        htmlFor="speedRange"
        style={{
          fontFamily: "cinzel, sans-serif",
          position: "absolute",
          top: "10px",
          right: "101px",
          zIndex: 5,
          color: "#fff",
        }}
      >
        Speed:
      </label>
      <Slider
        min={0}
        max={5}
        step={0.1}
        value={speed}
        onChange={(value) => updateSpeed(value)} // Debounced onChange for Firefox optimization
        style={{
          position: "absolute",
          top: "38px",
          right: "20px",
          zIndex: 5,
          width: "150px",
        }}
      />
    </div>
  );
};

export default HistoricalTimeline;
