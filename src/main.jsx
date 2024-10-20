import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MoviesProvider } from "./context/MovieContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </BrowserRouter>
);
