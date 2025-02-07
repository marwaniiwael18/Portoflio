import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";
import Sportify from "../../Assets/Projects/Sportify.jpeg";
import Doctor from "../../Assets/Projects/doctorwheel.jpg";
import Lord from "../../Assets/Projects/LordSDL.jpeg";
import Chatbot from "../../Assets/Projects/bot.jpeg";
import Arduino from "../../Assets/Projects/arduino.jpeg";
import Troc from "../../Assets/Projects/troc.jpeg";
import TerminalPortfolio from "../../Assets/Projects/TerminalPortfolio.jpeg";
import FactoryMobileApp from "../../Assets/Projects/FactoryMobileApp.jpeg";
import Karhabti from "../../Assets/Projects/Karhabti.jpeg";

const projects = [
  {
    imgPath: Karhabti,
    title: "Karhabti - Car Rental Web Application",
    description:
      "A web application for car rental developed using React JSX for the front end and React TSX for the admin dashboard.",
    demoLink: "https://karhabti.vercel.app/",
  },
  {
    imgPath: FactoryMobileApp,
    title: "Factory Mobile App - Hackathon Project",
    description:
      "An innovative mobile app developed in a 24-hour hackathon, monitoring cement prices and integrating real-time GPS verification.",
    ghLink: "https://github.com/marwaniiwael18/Application-Mobile-HACKATHON-",
    ytLink: "https://www.youtube.com/watch?v=oYuL_l5qsUA",
  },
  {
    imgPath: TerminalPortfolio,
    title: "Terminal Portfolio",
    description:
      "An interactive portfolio terminal showcasing skills, projects, and background in an engaging terminal-style interface.",
    ghLink: "https://github.com/marwaniiwael18/Terminal-Portfolio",
    demoLink: "https://terminal-portfolio-lake.vercel.app/",
  },
  {
    imgPath: Arduino,
    title: "Arduino project",
    description:
      "A UI built using Squareline Studio, demonstrating graphical UI editing for various projects.",
    ghLink: "https://github.com/marwaniiwael18/Squareline-Studio-UI-Project",
  },
  {
    imgPath: Chatbot,
    title: "Chatbot",
    description:
      "A chatbot system encapsulating best practices and innovative methodologies.",
    ghLink: "https://github.com/marwaniiwael18/chetbot_masterclass-main",
  },
  {
    imgPath: Sportify,
    title: "Sportify",
    description:
      "Sportify is a web & desktop app built using Symfony 5.4 & JavaFX for sports ground reservations.",
    ghLink: "https://github.com/marwaniiwael18/Sportify",
  },
  {
    imgPath: Doctor,
    title: "Doctor Wheel",
    description:
      "A desktop application in C++ with QT Creator, managing vehicle technical visits.",
    ghLink: "https://github.com/marwaniiwael18/Doctor-Wheel",
  },
  {
    imgPath: Troc,
    title: "TUNI-TROC",
    description:
      "A web platform for selling, exchanging, or donating furniture, built using PHP, JavaScript, and an Oracle database.",
    ghLink: "https://github.com/marwaniiwael18/Tuni-Troc",
    ytLink: "https://www.youtube.com/watch?v=kSqzBMO20GU",
  },
  {
    imgPath: Lord,
    title: "Lord Of Amazigh",
    description:
      "A 2D game developed in C using the SDL library, showcasing video game development skills.",
    ghLink: "https://github.com/marwaniiwael18/SDL-Project-Jeu.2D?tab=readme-ov-file",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Top <strong className="purple">Projects</strong>
        </h1>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgPath={project.imgPath}
              title={project.title}
              description={project.description}
              ghLink={project.ghLink}
              demoLink={project.demoLink}
              ytLink={project.ytLink}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
