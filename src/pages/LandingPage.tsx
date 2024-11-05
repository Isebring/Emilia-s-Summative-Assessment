import { Container } from "@mantine/core";
import { GridAsymmetrical } from "../components/GridAsymmetrical";
import Parallax from "../components/Parallax";
import HistoricalTimeline from "../components/Timeline";

function LandingPage() {
  return (
    <>
      <Parallax />
      {/* <HeroVideo /> */}
      {/* <HeroSlide /> */}
      <HistoricalTimeline />
      <Container>
        <GridAsymmetrical />
      </Container>
    </>
  );
}

export default LandingPage;
