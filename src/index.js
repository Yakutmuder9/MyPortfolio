import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LayoutGroup, AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LayoutGroup>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </LayoutGroup>
  </React.StrictMode>
);
