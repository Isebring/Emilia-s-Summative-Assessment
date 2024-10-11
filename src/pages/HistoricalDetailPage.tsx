import { Container, Paper, Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import columbusImg from "../assets/imgs/columbus-2.jpg";
import invasionImg from "../assets/imgs/invasion-2.jpg";
import jamestownImg from "../assets/imgs/jamestown-2.jpg";
import plantationImg from "../assets/imgs/plantation-2.jpg";
import teaActImg from "../assets/imgs/tea-act-2.jpg";
import { EmojiRating } from "../components/Rating";
import Trivia from "../components/Trivia";
import "../css/HistoricalDetailPage.css";
import historicalData from "../data/historicalData.json";

const images: { [key: string]: string } = {
  "columbus-2.jpg": columbusImg,
  "invasion-2.jpg": invasionImg,
  "jamestown-2.jpg": jamestownImg,
  "plantation-2.jpg": plantationImg,
  "tea-act-2.jpg": teaActImg,
};

// Detail page component
const HistoricalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the id from the URL parameters
  const occasion = historicalData.occasions.find(
    (item) => item.id === parseInt(id!)
  ); // Find the occasion by id

  if (!occasion) {
    return <h2>Historical occasion not found</h2>;
  }

  const backgroundImageUrl = images[occasion.image];

  return (
    <div className="detail-page">
      <div
        className="detail-header"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <h1>{occasion.title}</h1>
        <p>
          {occasion.date} - {occasion.location}
        </p>
        <Container>
          <Text
            style={{
              marginTop: "3rem",
              fontFamily: "Cinzel, sans-serif",
            }}
          >
            {occasion.description}
          </Text>
        </Container>
      </div>

      <section className="detail-content">
        <div className="rating-section">
          <p style={{ fontWeight: "500" }}>My mood about this occasion:</p>
          <EmojiRating value={occasion.rating} />
        </div>
        <Paper className="parchment-texture">
          <h2>Reflection</h2>
          <p>{occasion.reflection}</p>

          <h2>Challenges Faced</h2>
          <p>{occasion.challenges_faced}</p>

          <h2>Skills Gained</h2>
          <p>
            <ul>
              {occasion.skills_gained.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </p>

          <h2>Key Events</h2>
          <ul>
            {occasion.key_events.map((event, index) => (
              <li key={index}>
                <p>
                  <strong>{event.year}:</strong> {event.event}
                </p>
              </li>
            ))}
          </ul>
        </Paper>
        {occasion.trivia && occasion.trivia.length > 0 && (
          <Trivia trivia={occasion.trivia} />
        )}
      </section>
    </div>
  );
};

export default HistoricalDetailPage;
