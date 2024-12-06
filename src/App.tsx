import { Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ScrollProvider } from "./ScrollContext";

function App() {
  return (
    <>
      <ScrollProvider>
        <Header />
        <Box>
          <main>
            <Outlet />
          </main>
        </Box>
        <Footer />
      </ScrollProvider>
    </>
  );
}

export default App;
