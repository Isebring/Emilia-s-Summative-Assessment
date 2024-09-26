import { Container } from "@mantine/core";
import { GridAsymmetrical } from "../components/GridAsymmetrical";
import HeroSlide from "../components/HeroSlide";
import HistoricalTimeline from "../components/Timeline";

function LandingPage() {
  return (
    <>
      {/* <HeroVideo /> */}
      <HeroSlide />
      <HistoricalTimeline />
      <Container>
        <GridAsymmetrical />
      </Container>
    </>
  );
}

export default LandingPage;
