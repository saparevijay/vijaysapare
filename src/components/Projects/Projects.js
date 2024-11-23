import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import portfolio from "../../Assets/Projects/portfolio.jpg";
import eye from "../../Assets/Projects/eye.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import calculator from "../../Assets/Projects/calculator.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eye}
              isBlog={false}
              title="Iris-Based Authentication and Key Agreement With Updatable Blind Credentials"
              description="Developed a novel privacy-preserving iris-based authentication framework with an Information-Invisibility Key Agreement protocol, enhancing security, efficiency, and scalability in biometric-based systems."
              ghLink="https://github.com/saparevijay/Iris-Based-Authentication-and-Key-Agreement-With-Updatable-Blind-Credentials"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Scientific Calculator"
              description="Designed and developed a fully functional scientific calculator, implementing advanced mathematical operations, user-friendly interface, and optimized algorithms for accurate and efficient computations."
              ghLink="https://github.com/saparevijay/Scientific-Calculator"
              demoLink="https://saparevijay.github.io/Scientific-Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio (Practice)"
              description="Developed a dynamic and interactive personal portfolio website, showcasing projects, skills, and achievements, with a focus on responsive design, smooth navigation, and modern web development practices."
              ghLink="https://github.com/saparevijay/sapare-vijay"
              demoLink="https://saparevijay.github.io/sapare-vijay/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Booking Website"
              description="**Currently Working On it**"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
