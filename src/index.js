import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { UserProvider } from "./context/userContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <StyledEngineProvider injectFirst>
      <UserProvider>
        <App />
      </UserProvider>
    </StyledEngineProvider>
  </>
);
