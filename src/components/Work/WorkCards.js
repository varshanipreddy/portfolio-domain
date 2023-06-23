import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function WorkCards(props) {

    
  return (
    <Card className="work-card-view">
      <div className="row">
        <div className="col-md-3">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" className="card-image" />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ paddingBottom: "0.5rem" }}>{props.title}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: "1rem" }}>{props.title2}</Card.Subtitle>
            <Card.Subtitle style={{ paddingBottom: "1rem" }}>{props.title3}</Card.Subtitle>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>



          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default WorkCards;


