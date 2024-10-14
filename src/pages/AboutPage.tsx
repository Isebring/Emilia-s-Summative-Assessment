import { Container, Paper, Text, Title } from "@mantine/core";
import parchment from "../assets/imgs/parchment-bg.jpg";
import Profile from "../components/Profile";

function AboutPage() {
  return (
    <Container>
      <Profile />
      <Paper
        p="md"
        style={{
          backgroundImage: `url(${parchment})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        mb="lg"
      >
        <Title mt="md" className="title">
          About me
        </Title>
        <Text fw="600" size="lg" style={{ fontFamily: "Cinzel, serif" }}>
          Hi! My name is Emilia, and I am currently studying at Santa Barbara
          City College. This is my summative assessment for my history class. I
          decided to create a webpage because I felt like it allowed me to be
          creative and make it a more engaging experience for the audience. I am
          originally from Sweden, but moved to Santa Barbara to study and
          experience a new country outside of Europe.
        </Text>
      </Paper>
    </Container>
  );
}

export default AboutPage;
