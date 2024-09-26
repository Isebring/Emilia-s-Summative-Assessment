import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./main.css";
import ErrorPage from "./pages/ErrorsPage";
import LandingPage from "./pages/LandingPage";
import MuddiestPoints from "./pages/MuddiestPoints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/muddiestpoints", element: <MuddiestPoints /> },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
