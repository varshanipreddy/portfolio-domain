import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import crm from "../../Assets/Projects/crm.png";
import vote from "../../Assets/Projects/vote.png";
import chat from "../../Assets/Projects/chat.png";
import fridge from "../../Assets/Projects/fridge.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Academic/Other <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Presenting a selection of projects I have undertaken, excluding my work experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fridge}
              isBlog={false}
              title="Fridge2Table"
              description="A system that suggests personalized recipes based on user preferences, dietary restrictions, and available ingredients. Based on personalized and non personalized recommendation based on cosine,jaccard similarities, item-item collaborative filtering"
              ghLink="https://github.com/varshanipreddy/fridge2table"
              // demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="HealthBot"
              description="An integrated Android application featuring a chatbot for early-stage disability identification in children, providing accessible and convenient support for early intervention and assessment."
              ghLink="https://github.com/varshanipreddy/HealthBot"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vote}
              isBlog={false}
              title="Blockchain-Enabled Electronic Voting System"
              description="An innovative project leveraging Node.js, Vue.js, Hyperledger Fabric, and IBM Blockchain Platform on IBM Cloud Kubernetes to develop an enhanced security mechanism for e-polling and counting processes, ensuring transparency, immutability, and trust in digital voting systems."
              ghLink="https://github.com/varshanipreddy/blockchain_enhanced_e_voting"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crm}
              isBlog={false}
              title="FashioNXT-CRM-Service"
              description="A customer relationship management (CRM) service implemented in Ruby on Rails that allows efficient management of customer interactions and data analysis for enhanced business productivity."
              ghLink="https://github.com/varshanipreddy/FashioNXT-CRM-Service"
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
