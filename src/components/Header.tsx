import {
  Burger,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/emilia-logo.png";
import "../css/Header.css";
import { useScroll } from "../ScrollContext";

function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollToReflections } = useScroll();
  const isActive = (pathname: string) => location.pathname === pathname;
  const [isVisible, setIsVisible] = useState(true);
  const [pastThreshold, setPastThreshold] = useState(false);

  const links = [
    { link: "/about", label: "About me" },
    { link: "/muddiestpoint", label: "Muddiest Point" },
    {
      label: "Thoughts",
      onClick: () => {
        if (location.pathname !== "/") {
          navigate("/", { replace: false });
          setTimeout(() => scrollToReflections?.(), 100);
        } else {
          scrollToReflections?.();
        }
      },
    },
  ];

  useEffect(() => {
    const threshold = 50;
    let lastScrollTop = 0;

    const onScroll = () => {
      const currentScrollTop = window.scrollY;
      setPastThreshold(currentScrollTop > threshold);
      setIsVisible(
        currentScrollTop < lastScrollTop || currentScrollTop <= threshold
      );

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerClass = isVisible && pastThreshold ? "visible" : "";
  const headerTransform = isVisible ? "translateY(0)" : "translateY(-100%)";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        close();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [close]);

  const items = links.map((link) =>
    link.link ? (
      <NavLink
        key={link.label}
        to={link.link}
        className={`link ${isActive(link.link) ? "link-active" : ""}`}
        onClick={() => {
          if (opened) {
            close();
          }
          window.scrollTo(0, 0);
        }}
      >
        <span className="link-content">{link.label}</span>
      </NavLink>
    ) : (
      <a
        key={link.label}
        className={`link ${opened ? "link-active" : ""}`}
        onClick={() => {
          if (opened) {
            close();
          }
          link.onClick?.();
        }}
        style={{
          cursor: "pointer",
        }}
      >
        <span className="link-content">{link.label}</span>
      </a>
    )
  );

  return (
    <>
      <header className={headerClass} style={{ transform: headerTransform }}>
        <Container size="xl" className="header-inner">
          <Group>
            <NavLink
              style={{ scrollBehavior: "smooth" }}
              to={"/"}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Image className="logo" src={logo} alt="Logo" />
            </NavLink>
            <Group gap={5} className={`header-links ${opened ? "opened" : ""}`}>
              {" "}
              {items}
            </Group>
          </Group>
          <Group>
            <Burger
              aria-label="Toggle navigation"
              color="dark"
              opened={opened}
              onClick={toggle}
              className="burger"
              size="md"
            />
          </Group>
        </Container>
      </header>
      <Divider color="var(--nav-text-color)" size="xl" />
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className="dropdown" withBorder style={styles}>
            {items}
          </Paper>
        )}
      </Transition>
    </>
  );
}

export default Header;
