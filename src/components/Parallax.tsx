import { Box, Image, Text, Title } from "@mantine/core";
import SimpleParallax from "simple-parallax-js";
import parallaxImg1 from "../assets/imgs/history-pattern.jpg";
import parallaxImg from "../assets/imgs/history-pattern1.jfif";
import parallaxImg2 from "../assets/imgs/history-pattern2.jfif";
import parallaxImg3 from "../assets/imgs/history-pattern3.jfif";
import parallaxImg4 from "../assets/imgs/history-pattern4.jfif";
import "../css/Parallax.css";

const contentSections = [
  {
    title: "Thesis Statement",
    text: "This course has reshaped my understanding of American history by challenging the glorified narratives of westward expansion and revealing the overlooked experiences of marginalized groups, such as Native Americans and African Americans, leading me to a deeper recognition of how these historical injustices continue to shape contemporary social and political issues today.",
    image: parallaxImg1,
  },
  {
    title: "Evidence from Assigned Reading #1",
    quote:
      "“On the part of the slave, this attachment is manifested by an affection and faithfulness which only cease with life.” - Joseph Holt Ingraham ",
    text: "Ingraham’s claim that enslaved individuals displayed “affection and faithfulness which only cease with life” reflects a romanticized narrative designed to justify slavery. By portraying enslaved people as content and loyal, this narrative obscures the brutality of their oppression and invalidates their resistance, erasing their humanity. Such distortions supported the glorified view of southern prosperity while marginalizing African Americans' experiences. This reinforces my understanding of how historical injustices, like slavery, were justified and how these narratives continue to shape modern debates on systemic racism and inequality, perpetuating myths that minimize the lasting impact of these injustices.",
    image: parallaxImg4,
  },
  {
    title: "Evidence from Assigned Reading #2",
    quote:
      "“Families at dinner were startled by the sudden gleam of bayonets in the doorway and rose up to be driven with blows and oaths along the weary miles of trail that led to the stockade. Men were seized in their fields or going along the road, women were taken from their wheels and children from their play. In many cases, on turning for one last look as they crossed the ridge, they saw their homes in flames.” - James Mooney",
    text: "Mooney’s account of Cherokee families being forcibly removed from their homes, with some witnessing their houses burned as they were driven to stockades, reveals the brutal realities of westward expansion. This violent displacement undermines the glorified narratives of expansion as a noble endeavor, highlighting instead how progress for settlers came at the direct expense of Native Americans’ dignity and survival. The suffering described in this passage exemplifies the overlooked injustices against marginalized groups like the Cherokee, whose forced removal has a lasting legacy in contemporary struggles over Indigenous rights and recognition.",
    image: parallaxImg2,
  },
  {
    title: "Evidence from Assigned Reading #3",
    quote: "",
    text: " Specific references from the assigned reading.",
    image: parallaxImg,
  },
  {
    title: "Evidence from Assigned Reading #4",
    quote: "",
    text: "Specific references from the assigned reading.",
    image: parallaxImg3,
  },
];

function Parallax() {
  const handleArrowClick = () => {
    const images = document.querySelectorAll(".parallax-image");
    const visibleImage = Array.from(images).find(
      (img) => img.getBoundingClientRect().top >= 0
    );

    if (visibleImage) {
      const nextImage = visibleImage.nextElementSibling;
      if (nextImage) {
        nextImage.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="scrollable-content"></div>
      {contentSections.map((section, index) => (
        <Box
          key={index}
          className="parallax-image"
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <SimpleParallax
            orientation="down"
            overflow={true}
            delay={2}
            transition="cubic-bezier(0,0,0,1)"
          >
            <Image
              style={{
                backgroundImage: `url(${section.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
                width: "100%",
                height: "100vh",
                // objectFit: "contain",
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
              maxHeight: "80vh",
              overflowY: "auto",
            }}
          >
            <Title
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                lineHeight: 1.4,
              }}
              order={2}
            >
              {section.title}
            </Title>
            <Text
              mb="md"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                fontStyle: "italic",
              }}
            >
              {section.quote}
            </Text>
            <Text
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                overflowWrap: "break-word",
              }}
            >
              {section.text}
            </Text>
          </Box>
        </Box>
      ))}
      <div className="bouncing-arrow" onClick={handleArrowClick}>
        <div className="arrow-bg">
          <span>&#8595;</span>
        </div>
      </div>
    </>
  );
}

export default Parallax;
