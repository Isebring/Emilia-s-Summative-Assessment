import { Container, Grid, Image, Title } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import billofRights from "../assets/imgs/bill-of-rights.jfif";
import columbus from "../assets/imgs/columbus.jpg";
import historyPattern from "../assets/imgs/history-pattern.jpg";
import spanish from "../assets/imgs/invasion-2.jpg";
import plantation from "../assets/imgs/plantation-2.jpg";
import shaysRebellion from "../assets/imgs/shays-rebellion.jpg";
import teaAct from "../assets/imgs/tea_act.jpg";
import "../css/MuddiestPoints.css";

interface HistoricalEvent {
  image: string;
  title: string;
  description: string;
}

const events: HistoricalEvent[] = [
  {
    image: columbus,
    title: "1492 - Columbus Discovers America",
    description:
      "Christopher Columbus makes his first voyage to the New World.",
  },
  {
    image: spanish,
    title: "1519 - Spanish Invasion of the Americas",
    description:
      "The Spanish invasion of the Americas, led by Hernán Cortés, resulted in the fall of the Aztec Empire.",
  },
  {
    image:
      "https://github.com/user-attachments/assets/ad1f88d4-bbcb-4548-b422-453022bb9600",
    title: "1607 - Founding of Jamestown",
    description:
      "The founding of Jamestown in 1607 marked the establishment of the first permanent English settlement in North America.",
  },

  {
    image: plantation,
    title: "16th-19th Centuries - Triangular Trade",
    description:
      "The Triangular Trade was a system of trade that connected Europe, Africa, and the Americas.",
  },
  {
    image: teaAct,
    title: "1773 - Tea Act",
    description:
      "The Tea Act of 1773 was a British law that granted the East India Company a monopoly on the American tea trade.",
  },
  {
    image: shaysRebellion,
    title: "1786 - Shays' Rebellion",
    description:
      "Shays' Rebellion was an armed uprising in Western Massachusetts led by Revolutionary War veteran Daniel Shays.",
  },
  {
    image: billofRights,
    title: "1789 - Bill of Rights",
    description:
      "The Bill of Rights consists of the first ten amendments to the U.S. Constitution.",
  },
];

export function GridAsymmetrical() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container
      className="container-custom"
      style={{
        backgroundImage: `url(${historyPattern})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
      my="md"
    >
      <Title
        style={{
          color: "#FFF",
          fontSize: "2.5rem",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
        order={2}
      >
        My view on historical events
      </Title>
      <Grid style={{ fontFamily: "Cinzel, sans-serif" }}>
        {/* First row */}
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/1"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[0]}
              index={0}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/2"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[1]}
              index={1}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>

        {/* Second row */}
        <Grid.Col span={{ base: 12, xs: 8 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/3"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[2]}
              index={2}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/4"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[3]}
              index={3}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>

        {/* Third row */}
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/5"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[4]}
              index={4}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          {/* Duplicate or add a new event */}
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/6"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[5]}
              index={5}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <Link
            style={{ textDecoration: "none" }}
            to="/occasion/7"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ImageCard
              event={events[6]}
              index={6}
              hovered={hovered}
              setHovered={setHovered}
            />
          </Link>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

interface ImageCardProps {
  event: HistoricalEvent;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}

const ImageCard: React.FC<ImageCardProps> = ({
  event,
  index,
  hovered,
  setHovered,
}) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}
    >
      <Image
        src={event.image}
        alt={event.title}
        style={{
          width: "100%",
          height: "18rem",
          transition: "transform 0.3s ease-in-out",
          transform: hovered === index ? "scale(1.05)" : "scale(1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "#fff",
          opacity: hovered === index ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};
