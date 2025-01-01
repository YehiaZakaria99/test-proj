import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_App.scss"
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
