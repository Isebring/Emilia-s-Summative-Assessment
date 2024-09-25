import React, { useEffect, useRef } from "react";
import parchmentTexture from "../assets/imgs/parchment2.jpg";
import Quote from "./BlockQuote"; // Import your Quote component

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let scrollPosition = 0;
    const speed = 1;
    const particleCount = 100;
    const particles: Particle[] = [];

    const historicalEvents = [
      { year: "1492", description: "Columbus Discovers America" },
      { year: "1776", description: "American Declaration of Independence" },
      { year: "1945", description: "End of World War II" },
      { year: "1969", description: "Moon Landing" },
      { year: "1989", description: "Fall of the Berlin Wall" },
    ];

    // Load the parchment texture
    backgroundImage.src = parchmentTexture;
    backgroundImage.onload = () => {
      animate();
    };

    function initParticles() {
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
      particles.forEach((particle: any) => {
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

        particle.y += particle.speed;
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
        ctx!.font = "26px Arial";
        ctx!.fillText(event.year, eventX - 20, eventY - 20);

        ctx!.fillStyle = "#fff";
        ctx!.font = "18px Arial";
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
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Quote
        style={{
          position: "absolute",
          top: "2rem",
          left: "5rem",
          fontWeight: "600",
          zIndex: 10,
          background: "#ffffff81",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#222",
        }}
      />
    </div>
  );
};

export default HistoricalTimeline;
