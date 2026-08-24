import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with data engineering and modern technologies, and
              I have learned something valuable every day, I think… 🤷‍♂️
              
              <br />
              <br />

              I am fluent in classics like
              <i>
                <b className="purple">
                  {" "}
                  ETL, Oracle SQL, Informatica Intelligent Cloud Services (IICS),
                  and Python.
                </b>
              </i>

              <br />
              <br />

              My fields of interest are building efficient{" "}
              <i>
                <b className="purple">
                  Data Integration Solutions and Enterprise Data Pipelines
                </b>
              </i>{" "}
              and also in areas related to{" "}
              <i>
                <b className="purple">
                  Generative AI and Data Analytics.
                </b>
              </i>

              <br />
              <br />

              Whenever possible, I also apply my passion for developing
              data-driven solutions with{" "}
              <b className="purple">ETL Tools</b> and{" "}
              <i>
                <b className="purple">
                  Cloud-Based Integration Platforms
                </b>
              </i>{" "}
              like{" "}
              <i>
                <b className="purple">
                  IICS, Oracle SQL, and Gen AI Technologies.
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              {myImg}
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                /saparevijay"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                .com/in/saparevijay/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                .instagram.com/sapare_vijay/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
