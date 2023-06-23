import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import WorkCard from "./WorkCards";
import huawei from "../../Assets/Work/Huawei.png";
import ittiam from "../../Assets/Work/ittiam.png";
import tamu from "../../Assets/Work/tamu.png";

function About() {
  return (
    <Container fluid className="work-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={huawei}
                isBlog={false}
                title="Huawei Technologies India Pvt. Ltd."
                title2 = "Senior Software Engineer"
                title3 = "August 2020 - July 2022"
                description= "Department: SOC/Consumer Cloud Service Competence Center. Risk Control Tag Development: Development, analysis and deployment of various Payment Risk Control Tags in HiveQL by querying datasets stored in the HDFS. Offline machine learning models/ Scoring Systems: Design, analysis, development and deployment of around 10 risk detection models and scoring systems with greater than 92% accuracy. AI Devops: Troubleshooted issues related to data synchronisation from the HIVE datasets HDFS path to the DevOps HDFS path, MTP model training issues and MEP model deployment issues in the new AIdevops portal. Handled communication between several teams for troubleshooting of models deployment involving several tools such as CloudDragon, AIdevops etc.,"

              />
            </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px",paddingBottom: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={ittiam}
                isBlog={false}
                title="Ittiam Systems Pvt. Ltd."
                title2 = "Computer Vision Intern"
                title3 = "May 2019 - July 2019"
                description="Project: Enhancement of foreground detection and background modeling in videos using the OpenCV library
                Implementation: Analysed various solutions for the enhancement the foreground detection and background modelling,
                and implemented the final solution through the interpretation of histogram peaks and valleys of the motion.(Programmed
                in C++ (vectors) and Python (numpy) for handling computer vision data-sets)"
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink=""
              />
            </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px",paddingBottom: "10px" }}>
            <Col md={9} className="work-card">
              <WorkCard
                imgPath={tamu}
                isBlog={false}
                title="Texas A&M University"
                title2 = "Student Assistant - Computer Science Grader"
                title3 = "Jan 2023 - Present"
                description="I had the privilege of assisting with exams and assignments for CSCE 411, the Design and Analysis of Algorithms course, at Texas A&M University, Department of Computer Science, under the guidance of Prof. Timothy Davis. It was a rewarding experience, supporting students in their academic journey and ensuring fair evaluation of their work. Collaborating with Prof. Davis enriched my understanding of algorithmic principles. "
                // ghLink="https://github.com/soumyajit4419/Chatify"
                // demoLink=""
              />
            </Col>
        </Row>



        {/* <Techstack /> */}


        {/* <Github /> */}
      </Container>
      
    </Container>
  );
}

export default About;
