import {
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/emilia-logo.png";
import "../css/Footer.css";

const overviewLinks = [
  { link: "/about", label: "About Me" },
  { link: "/muddiestpoint", label: "Muddiest Point" },
  { link: "/contact", label: "Wrap ups" },
  { link: "/about", label: "Reflections" },
  //   { link: "/about", label: "Placeholder" },
];

const overviewItems = overviewLinks.map((link) => (
  <NavLink
    key={link.label}
    to={link.link}
    onClick={() => window.scrollTo(0, 0)}
  >
    {link.label}
  </NavLink>
));

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <NavLink to={"/"} onClick={() => window.scrollTo(0, 0)}>
        <Image src={logo} mt="xs" alt="Emilia logo" w={140} />
      </NavLink>

      <Container size={"xl"} className="footer-container">
        <div className="overview-section">
          <Title order={3} mb={"lg"} mt={"md"}>
            Overview
          </Title>
          <Group className="overview-items">{overviewItems}</Group>
        </div>

        <Divider
          orientation="horizontal"
          color="#e6be8a"
          className="divider-horizontal"
        />
        <Divider
          orientation="vertical"
          color="#e6be8a"
          className="divider-vertical"
        />

        <div className="follow-us-section">
          <Title order={3} mb={"lg"} mt={"md"}>
            Follow Me
          </Title>
          <Flex>
            <NavLink
              aria-label="Visit Emilia on Facebook (opens in a new tab)"
              to={"https://www.facebook.com/"}
              target="blank"
            >
              <FiFacebook />
            </NavLink>
            <NavLink
              aria-label="Visit Emilia on Instagram (opens in a new tab)"
              to={"https://www.instagram.com/"}
              target="blank"
            >
              <FaInstagram />
            </NavLink>
            <NavLink
              aria-label="Visit Emilia on X (opens in a new tab)"
              to={"https://twitter.com/"}
              target="blank"
            >
              <FaXTwitter />
            </NavLink>
          </Flex>
        </div>

        <Divider
          orientation="horizontal"
          color="#e6be8a"
          className="divider-horizontal"
        />
        <Divider
          orientation="vertical"
          color="#e6be8a"
          className="divider-vertical"
        />

        <div className="igdb-api-section">
          <Title order={3} mb={"lg"} mt={"md"}>
            SBCC
          </Title>
          <NavLink
            aria-label="Learn more about IGDB (opens in a new tab)"
            to={"https://sbcc.edu/"}
            target="blank"
          >
            Learn More{" "}
            <span>
              <FaExternalLinkAlt />
            </span>
          </NavLink>
        </div>

        <Divider
          orientation="horizontal"
          color="#e6be8a"
          className="divider-horizontal"
        />
      </Container>
      <Text size="xs" mb={"md"} mt={"md"}>
        © {currentYear} Emilia's Summative Assessment. ALL RIGHTS RESERVED.
      </Text>
    </footer>
  );
}

export default Footer;
