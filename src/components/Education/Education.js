import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import nitrr from "../../Assets/Education/nitrr.png";
import tamu from "../../Assets/Education/tamu.png";

function Education() {
  return (  
    <Container fluid className="education-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="education-heading" style={{ justifyContent: "center" , padding: "10px", paddingBottom: "40px" }}>
           <strong className="purple">Education </strong>
        </h1>
          <Row style={{ justifyContent: "center", padding: "20px" }}>
            <Col md={9} className="education-card">
              <EducationCard
                imgPath={tamu}
                isBlog={false}
                title="Texas A & M University, College Station"
                title2 = "Master of Computer Science"
                description = "August 2022 - May 2024"

              />
            </Col>


          </Row>

          <Row style={{ justifyContent: "center", padding: "20px",paddingBottom: "40px"  }}>
          <Col md={9} className="education-card">
              <EducationCard
                imgPath={nitrr}
                isBlog={false}
                title="National Institute of Technology, Raipur"
                title2 = "Bachelor of Technology in Computer Science and Engineeing"
                description = "August 2016 - June 2020"

              />
            </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default Education;
