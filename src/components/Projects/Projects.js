import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sportify from "../../Assets/Projects/Sportify.jpeg";
import Doctor from "../../Assets/Projects/doctorwheel.jpg";
import Lord from "../../Assets/Projects/LordSDL.jpeg";
import Chatbot from "../../Assets/Projects/bot.jpeg";
import Arduino from "../../Assets/Projects/arduino.jpeg";
import troc from "../../Assets/Projects/troc.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lord}
              isBlog={false}
              title="Lord Of Amazigh"
              description="This project is a 2D game developed in C language using the SDL (Simple DirectMedia Layer) library. This project demonstrates my skills in C programming and video game development, with a focus on creating interactive, high-performance games."
              ghLink="https://github.com/marwaniiwael18/SDL-Project-Jeu.2D?tab=readme-ov-file"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={troc}
              isBlog={false}
              title="TUNI-TROC"
              description="This project is a web platform to allow users to sell, exchange or donate furniture online. The site is developed with Visual Studio using CSS, JavaScript and PHP7 languages ​​for the front-end and back-end, and an Oracle database to store user information."
              ghLink="https://github.com/marwaniiwael18/Tuni-Troc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Doctor}
              isBlog={false}
              title="Doctor Wheel"
              description="This project is a desktop application developed in C++ language with QT Creator, which allows you to manage a technical visit center for vehicles."
              ghLink="https://github.com/marwaniiwael18/Doctor-Wheel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sportify}
              isBlog={false}
              title="Sportify"
              description="Sportify is a comprehensive desktop and web application built using Symfony 5.4 and JavaFX, both connected to the same SQL database for synchronized data management. Designed to streamline the process of reserving sports grounds, Sportify offers an array of features for both land owners and users. Owners can effortlessly add and manage their properties, making them available for reservations. Users enjoy a smooth, intuitive booking experience with advanced search, sorting, and rating capabilities to help them make informed decisions and find the best sports grounds that meet their needs."
              ghLink="https://github.com/marwaniiwael18/Sportify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chatbot}
              isBlog={false}
              title="Chatbot"
              description="Welcome to the chatbot_masterclass-main repository. This project encapsulates best practices, advanced techniques, and innovative methodologies for building state-of-the-art chatbot systems."
              ghLink="https://github.com/marwaniiwael18/chetbot_masterclass-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Arduino}
              isBlog={false}
              title="Arduino project"
              description="A simple UI built using Squareline Studio, a fairly new WYSIWYG graphical UI editor for various project types. This project demonstrates building the UI and setting up actions without any prior programming knowledge. It also covers some of the pitfalls and problems encountered while working with Squareline Studio."
              ghLink="https://github.com/marwaniiwael18/Squareline-Studio-UI-Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
