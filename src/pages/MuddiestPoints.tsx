import { Box, Container, Flex, Image, Paper, Text, Title } from "@mantine/core";
import thinker from "../assets/imgs/thinker.png";
import "../css/MuddiestPoints.css";

function MuddiestPoints() {
  return (
    <>
      <Container>
        <Title mt="md" className="title">
          My thoughts about "Muddiest Point"
        </Title>
        <Flex justify="center">
          <Box>
            <Image
              src={thinker}
              maw={300}
              alt="illustration of a thinking philosopher"
            />
          </Box>
        </Flex>
        <Paper mb="xl" mt="lg" className="parchment-paper">
          <Text>
            For me, the Muddiest Point has been really useful because it makes
            me stop and think about what I didn’t quite get during the lesson.
            Sometimes history can feel overwhelming, with so many events and
            causes to track, and it’s easy to miss key details. Writing down the
            part that confused me the most helps me realize what I need to focus
            on, whether it's understanding how a certain event led to a war or
            figuring out the significance of a treaty. It also makes me feel
            more comfortable asking questions, since I know I'm not alone in
            needing clarity. It's a simple way to make sure I’m not lost in the
            material and can really connect the dots.
          </Text>
        </Paper>
      </Container>
    </>
  );
}

export default MuddiestPoints;
