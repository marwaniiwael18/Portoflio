import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Certification.css";

// Importing images directly
import apolloGraphQL from "../../Assets/Certifications/apollographql.jpeg";
import agile from "../../Assets/Certifications/agil.jpeg";
import dataScience from "../../Assets/Certifications/datascience.jpg";
import introAI from "../../Assets/Certifications/introia.jpg";
import ccna from "../../Assets/Certifications/ccna.jpg";
import matlab from "../../Assets/Certifications/matlab.jpeg";
import symfony from "../../Assets/Certifications/symfony4.jpeg";
import projectManagement from "../../Assets/Certifications/projec.jpg";
import businessIntelligence from "../../Assets/Certifications/bi.jpeg";
import sql from "../../Assets/Certifications/sql.jpeg";
import graphicDesign from "../../Assets/Certifications/grphic.jpeg";
import linux from "../../Assets/Certifications/linux.jpeg";
import reactDev from "../../Assets/Certifications/react.jpeg";

const certifications = [
    {
        imgPath: reactDev,
        title: "Frontend Developer Career Path",
        description: "Frontend React Developer Certification",
        link: "#", // No path provided, will be added later
      },
  {
    imgPath: apolloGraphQL,
    title: "Apollo GraphQL",
    description: "Apollo GraphQL Certification",
    link: "https://www.apollographql.com/tutorials/certifications/25b1f3e3-9ea4-49bf-b234-a79016ae05c8",
  },
  {
    imgPath: agile,
    title: "Agile Project Management",
    description: "PM Coaching Agile Certification",
    link: "https://www.pm-coaching.org/login",
  },
  {
    imgPath: dataScience,
    title: "Data Science",
    description: "365 Data Science Certification",
    link: "https://learn.365datascience.com/certificates/CC-D3FE989FB8/",
  },
  {
    imgPath: introAI,
    title: "Introduction to AI",
    description: "365 Data Science AI Course",
    link: "https://learn.365datascience.com/certificates/CC-61E4E18537/",
  },
  {
    imgPath: ccna,
    title: "CCNA",
    description: "Cisco Certified Network Associate",
    link: "https://www.credly.com/badges/8ce71c9a-ac11-458f-9cfa-637020bc7aeb/linked_in_profile",
  },
  {
    imgPath: matlab,
    title: "MATLAB",
    description: "LinkedIn Learning MATLAB Certification",
    link: "https://www.linkedin.com/learning/certificates/a28c9d416d5ba710a5d0e65d200e608417d26c27417a5dabbc448b5a1853f14a",
  },
  {
    imgPath: symfony,
    title: "Symfony 4",
    description: "LinkedIn Learning Symfony 4",
    link: "https://www.linkedin.com/learning/certificates/59b56ce84f1284641f5c246fa039722c55af053ee04eb7d07eec2c709cf19208",
  },
  {
    imgPath: projectManagement,
    title: "Project Management",
    description: "PM Coaching Project Management Course",
    link: "https://www.pm-coaching.org/login",
  },
  {
    imgPath: businessIntelligence,
    title: "Business Intelligence",
    description: "Coursera Business Intelligence Course",
    link: "https://www.coursera.org/account/accomplishments/verify/PM9G4XR9Z4J4",
  },
  {
    imgPath: sql,
    title: "SQL for Data Analysis",
    description: "Coursera SQL Certification",
    link: "https://www.coursera.org/account/accomplishments/verify/MJVTZQVU7RG2",
  },
  {
    imgPath: graphicDesign,
    title: "Graphic Design",
    description: "Coursera Graphic Design Course",
    link: "https://www.coursera.org/account/accomplishments/verify/BGD23VLZMTU8",
  },
  {
    imgPath: linux,
    title: "Linux Fundamentals",
    description: "Coursera Linux Certification",
    link: "https://www.coursera.org/account/accomplishments/verify/Z4MUHDEANH73",
  },

];

function Certifications() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Earned <strong className="purple">Certifications</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certifications.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-box"
              >
                <img src={cert.imgPath} alt={cert.title} className="project-image" onError={(e) => e.target.src = "../../Assets/Certifications/default.png"} />
                <div className="portfolio-layer">
                  <h4>{cert.title}</h4>
                  <p>{cert.description}</p>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;