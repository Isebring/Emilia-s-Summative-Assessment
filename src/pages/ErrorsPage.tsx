import { Box, Button, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import Illustration from "../components/404";
import "../css/ErrorsPage.css";

function ErrorPage() {
  return (
    <Container size="xl" className="root">
      <Box className="inner">
        <Illustration className="image" />
        <Box className="content">
          <Title className="error-title">Nothing to see here</Title>
          <Text
            color="dark"
            size="xl"
            fw={500}
            ta="center"
            className="description"
          >
            This page does not exist. You may have mistyped the address, or the
            page has been moved to another URL. Return to homepage with the
            button below.
          </Text>
          <Group justify="center">
            <Link to="/">
              <Button variant="outline" color="dark" size="xl" radius="xl">
                Take me back to home page
              </Button>
            </Link>
          </Group>
        </Box>
      </Box>
    </Container>
  );
}

export default ErrorPage;
