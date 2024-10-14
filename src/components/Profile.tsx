import {
  Avatar,
  Button,
  Card,
  Container,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import historyPattern from "../assets/imgs/history-pattern.jpg";

const stats = [
  { icon: <IoSchoolSharp />, label: "SBCC" },
  { icon: <FaLocationDot />, label: "Santa Barbara" },
  { icon: <GiEarthAfricaEurope />, label: "Sweden" },
];

function Profile() {
  const theme = useMantineTheme();
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.icon}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Container mt="md" mb="md" style={{ maxWidth: "22.5rem" }}>
      <Card withBorder padding="xl" radius="md">
        <Card.Section
          h={140}
          style={{
            backgroundImage: `url(${historyPattern})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
          }}
        />
        <Avatar
          style={{ zIndex: "10", border: "solid 2px #dbdbdb" }}
          size={80}
          variant="filled"
          radius={80}
          mx="auto"
          color={theme.colors.dark[4]}
          mt={-30}
        >
          EJ
        </Avatar>
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Emilia Johansson
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Student
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {items}
        </Group>
        <Link
          style={{ textDecoration: "none" }}
          to={"https://sbcc.edu/"}
          target="blank"
        >
          <Button
            fullWidth
            radius="xl"
            mt="xl"
            size="md"
            variant="outline"
            color="dark"
          >
            Check out SBCC
          </Button>
        </Link>
      </Card>
    </Container>
  );
}

export default Profile;
