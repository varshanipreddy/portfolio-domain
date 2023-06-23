import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Howdy, I am <strong className="purple">Varshani Reddy </strong>
            <br/>
            <br />I am Currently pursuing Masters in Computer Science at <strong className="purple">Texas A&M University</strong> College Station.
            <br/>
            <br />I worked for a couple of years as a Senior Software Engineer at <strong className="purple">Huawei</strong> Technologies India. Pvt. Ltd.
            <br />
            <br/>
            Apart from coding, some of my other interests are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Formula 1
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#3da9fc" }}>
            "It's Not Over Until You Give Up"{" "}
          </p>
          <footer className="blockquote-footer">Varsha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
