import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./main.css";
import ErrorPage from "./pages/ErrorsPage";
import HistoricalDetailPage from "./pages/HistoricalDetailPage";
import LandingPage from "./pages/LandingPage";
import MuddiestPoints from "./pages/MuddiestPoints";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/muddiestpoint", element: <MuddiestPoints /> },
      { path: "/occasion/:id", element: <HistoricalDetailPage /> },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        headings: {
          fontFamily: "Cinzel, serif",
        },
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
