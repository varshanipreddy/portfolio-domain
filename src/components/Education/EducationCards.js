
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {
  return (
    <Card className="education-card-view">
      <div className="row">
        <div className="col-md-3">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-image" />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Title>{props.title2}</Card.Title>
            <Card.Title>{props.title3}</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle> */}
            <Card.Text style={{ textAlign: "center" }}>
              {props.description}
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default EducationCards;


