import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";


function About() {
  return (
    <Container fluid className="skills-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "50px", paddingBottom: "30px" }}>
            Professional <strong className="purple">Skillset</strong>
        </h1>


        <Techstack />


        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
