import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {props.ytLink && (
          <Button variant="danger" href={props.ytLink} target="_blank" style={{ marginLeft: "10px" }}>
            <FaYoutube /> &nbsp;
            {"YouTube"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
