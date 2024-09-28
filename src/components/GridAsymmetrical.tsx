import { Container, Grid, Image } from "@mantine/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import columbus from "../assets/imgs/columbus-2.jpg";
import spanish from "../assets/imgs/invasion-2.jpg";

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
    image:
      "https://github.com/user-attachments/assets/9f84d49d-34ce-4445-8c30-fda248f37380",
    title: "1969 - Moon Landing",
    description: "Apollo 11 successfully lands the first humans on the moon.",
  },
  {
    image:
      "https://github.com/user-attachments/assets/1e5b4d32-e27e-444f-9f0c-e81cddeb9297",
    title: "1989 - Fall of the Berlin Wall",
    description: "The Berlin Wall falls, symbolizing the end of the Cold War.",
  },
];

export function GridAsymmetrical() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container my="md">
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
          <ImageCard
            event={events[3]}
            index={3}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Grid.Col>

        {/* Third row */}
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <ImageCard
            event={events[4]}
            index={4}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          {/* Duplicate or add a new event */}
          <ImageCard
            event={events[0]}
            index={5}
            hovered={hovered}
            setHovered={setHovered}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>
          <ImageCard
            event={events[1]}
            index={6}
            hovered={hovered}
            setHovered={setHovered}
          />
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
