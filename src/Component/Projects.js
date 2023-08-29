import React from "react";
import { Button, Card } from "react-bootstrap";

function Projects(props) {
  let { projectDetails } = props;

  const buttonStyle = {
    position: "absolute",
    bottom: "10px",
  };

  return (
    <Card
      style={{ width: "20rem", height: "27rem" }}
      className="container"
      border="warning"
    >
      <Card.Img
        variant="top"
        src={projectDetails.img}
        style={{ width: "18rem", height: "11rem" }}
      />
      <Card.Body>
        <Card.Title>{projectDetails.Title}</Card.Title>
        <Card.Text>{projectDetails.text}</Card.Text>
        <a href={projectDetails.link} target="_blank" rel="noopener noreferrer">
          <Button variant="dark" style={buttonStyle}>
            View project
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Projects;
