import { Container } from "@mantine/core";
import { GridAsymmetrical } from "../components/GridAsymmetrical";
import Parallax from "../components/Parallax";
import HistoricalTimeline from "../components/Timeline";
import { useScroll } from "../ScrollContext";

function LandingPage() {
  const { reflectionsRef } = useScroll();
  return (
    <>
      <Parallax />
      {/* <HeroVideo /> */}
      {/* <HeroSlide /> */}
      <HistoricalTimeline />
      <Container>
        <div ref={reflectionsRef}>
          <GridAsymmetrical />
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
