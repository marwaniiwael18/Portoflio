import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marwani Wael </span>
            from <span className="purple"> Tunisia .</span>
            <br />
            Focuser and quick-learning IT Engineering Student with experience in computer science and programming with a pro-active approach and experience in full lifecycle in development, programming, quality assurance, support and implementation and i enjoy working collaboratively with a high- performance development team in achieving technical and project objectives.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> scout
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Wael</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
