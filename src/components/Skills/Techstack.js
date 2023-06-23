
import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const techStack = {
    languages: [
      "Python",
      "HiveQL",
      "C++",
      "C",
      "SQL",
      "Bash",
      "JAVA",
      "Ruby",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
    ],
    frameworksLibraries: [
      "Hadoop",
      "Ruby-on-Rails",
      "Django",
      "Laravel",
      "Scikit",
      "React",
      "Angular",
      "OpenCV",
      "NLTK",
      "SpaCy",
      "TensorFlow",
      "Keras",
      "Flask",
      "Pandas",
      "NumPy",
    ],
    databases: [
      "Apache Hive",
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Firebase",
    ],
    platforms: [
      "Linux",
      "MacOS",
      "Windows",
      "AI-Devops",
      "CloudDragon",
      "WiseOper",
    ],
    technologies: [
      "Machine Learning",
      "App Development",
      "BlockChain",
      "Web Development",
      "Computer Vision",
      "NLP",
      "Cyber Security",
      "Version Control(git, svn)",
    ],
  };

  return (
    <div>


      <div className="heading-line"></div>

      <h4>Languages</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.languages.map((language, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {language}
          </Col>
        ))}
      </Row>

      <h4>Frameworks/Libraries</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.frameworksLibraries.map((item, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {item}
          </Col>
        ))}
      </Row>

      <h4>Databases</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.databases.map((item, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {item}
          </Col>
        ))}
      </Row>

      <h4>Platforms</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.platforms.map((item, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {item}
          </Col>
        ))}
      </Row>

      <h4>Technologies</h4>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techStack.technologies.map((item, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            {item}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
