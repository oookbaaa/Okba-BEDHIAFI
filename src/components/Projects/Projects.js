import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import evh from "../../Assets/Projects/EVH.png";
import YC from "../../Assets/Projects/YCDirectory.png";



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
              imgPath={YC}
              isBlog={false}
              title="YC-directory"
              description="YC-Directory is designed for entrepreneurs and startup enthusiasts. It serves as a platform where users can pitch their startup ideas, connect with other entrepreneurs, and gain visibility in the entrepreneurial ecosystem."
              ghLink="https://github.com/oookbaaa/FirstProject"
              demoLink="https://first-project-tau-six.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evh}
              isBlog={false}
              title="E.V.H"
              description="
Electric Charger Hub Manager is a desktop app designed to assist technicians with the setup, repair, and maintenance of electric vehicle charging hubs. It offers guided installation steps, real-time diagnostics, and quick troubleshooting tools to ensure efficient service and optimal hub performance."
              ghLink="https://github.com/oookbaaa/PI_java/tree/User"
            />
          </Col>
         

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
