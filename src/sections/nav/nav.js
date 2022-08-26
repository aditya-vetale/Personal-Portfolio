// import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
export const Nav = () => {
  const [section, setSection] = useState(null);

  function keepHover(event) {
    console.log("event.target-", event.target);
    setSection(event.target.id);
    console.log("section-", section);
  }
  console.log("section outside-", section);
  return (
    <div id="nav">
      <a
        id="aboutNav"
        className={section === "aboutNav" ? "effect" : ""}
        href="#about"
        onClick={(event) => keepHover(event)}
      >
        About
      </a>
      <a
        id="contactNav"
        className={section === "contactNav" ? "effect" : ""}
        href="#contact"
        onClick={(event) => keepHover(event)}
      >
        Contact
      </a>
      <a
        id="experienceNav"
        className={section === "experienceNav" ? "effect" : ""}
        href="#experience"
        onClick={(event) => keepHover(event)}
      >
        Experience
      </a>
      <a
        className={section === "footerNav" ? "effect" : ""}
        id="footerNav"
        href="#footer"
        onClick={(event) => keepHover(event)}
      >
        Footer
      </a>
      <a
        id="projectsNav"
        className={section === "projectsNav" ? "effect" : ""}
        href="#projects"
        onClick={(event) => keepHover(event)}
      >
        Projects
      </a>
    </div>
  );
};
