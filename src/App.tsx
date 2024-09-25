import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroVideo />
      <Container>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
