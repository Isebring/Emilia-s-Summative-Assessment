import { Container } from "@mantine/core";
import { GridAsymmetrical } from "../components/GridAsymmetrical";
import HeroVideo from "../components/HeroVideo";

function LandingPage() {
  return (
    <>
      <HeroVideo />
      <Container>
        <GridAsymmetrical />
      </Container>
    </>
  );
}

export default LandingPage;
