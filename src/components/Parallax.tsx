import { Box, Image, Text, Title } from "@mantine/core";
import SimpleParallax from "simple-parallax-js";
import parallaxImg1 from "../assets/imgs/history-pattern.jpg";
import parallaxImg from "../assets/imgs/history-pattern1.jfif";
import parallaxImg2 from "../assets/imgs/history-pattern2.jfif";
import parallaxImg4 from "../assets/imgs/history-pattern4.jfif";

const contentSections = [
  {
    title: "Thesis Statement",
    text: "This course has reshaped my understanding of American history by challenging the glorified narratives of westward expansion and revealing the overlooked experiences of marginalized groups, such as Native Americans and African Americans, leading me to a deeper recognition of how these historical injustices continue to shape contemporary social and political issues today.",
    image: parallaxImg1,
  },
  {
    title: "Evidence from Assigned Reading",
    text: "Explain how specific reading evidence supports my thesis.",
    image: parallaxImg4,
  },
  {
    title: "Reflection Evidence - Self",
    text: "Summary from your own reflections and its connection to my thesis.",
    image: parallaxImg2,
  },
  {
    title: "Reflection Evidence - Classmates",
    text: " Specific references from Reflection assignments of my classmates",
    image: parallaxImg,
  },
];

function Parallax() {
  return (
    <>
      {contentSections.map((section, index) => (
        <Box
          key={index}
          style={{
            position: "relative",
            width: "100%",
            height: "100vh", // Adjust as necessary for responsiveness
            overflow: "hidden",
          }}
        >
          <SimpleParallax
            orientation="down"
            overflow={true}
            delay={3}
            transition="cubic-bezier(0,0,0,1)"
          >
            <Image
              src={section.image}
              style={{
                width: "100%",
                height: "100vh",
                objectFit: "cover", // Ensures image covers both height and width
              }}
            />
          </SimpleParallax>
          <Box
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "5vw",
              borderRadius: "8px",
              textAlign: "center",
              width: "90%",
              maxWidth: "1000px",
            }}
          >
            <Title
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", // Responsive font size
                lineHeight: 1.2,
              }}
              order={2}
            >
              {section.title}
            </Title>
            <Text
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              }}
            >
              {section.text}
            </Text>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Parallax;
