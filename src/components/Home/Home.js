import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import homeLogo from "../../Assets/p3.jpeg";
import Particle from "../Particle";
import Type from "./Type";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Howdy!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                  {/* 🙏 */}
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> VARSHANI REDDY PATLOLLA</strong>
              </h1>

              <div style={{ padding: "50px", textAlign: "left" }}>
                <Type />
              </div>
            </Col>
{/* 
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}

            <Col md={5} style={{ paddingBottom: 20, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                  overflow: "hidden",
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                  hover: {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "350px" }}
                />
              </div>
            </Col>





          </Row>
          
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;



