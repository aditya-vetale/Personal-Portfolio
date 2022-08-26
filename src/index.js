import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { About } from "./sections/about/about";
import { Contact } from "./sections/contact/contact";
import { Experience } from "./sections/experience/experinece";
import { Footer } from "./sections/footer/footer";
import { Nav } from "./sections/nav/nav";
import { Projects } from "./sections/projects/projects";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
