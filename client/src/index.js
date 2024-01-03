import React from "react";

import App from "./App";
import "./styles.css";

import { createRoot } from "react-dom/client";
import { ContextProvider } from "./SocketContext";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
