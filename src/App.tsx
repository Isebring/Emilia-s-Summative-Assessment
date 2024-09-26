import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Box } from "@mantine/core";

function App() {
  return (
    <>
      <Header />
      <Box>
        <main>
          <Outlet />
        </main>
      </Box>
      <Footer />
    </>
  );
}

export default App;
