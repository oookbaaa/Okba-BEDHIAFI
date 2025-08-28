import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { BsGithub, BsArrowLeft } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import Particle from '../Particle';
import { projectsData } from './Projects';

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find the project based on the ID
  const project = projectsData.find((p) => p.id === projectId);

  // If project not found, redirect to projects page
  if (!project) {
    navigate('/project');
    return null;
  }

  return (
    <Container fluid className="project-section">
         {/* Back button */}
      <div className="mb-4" style={{ marginLeft: '100px' }}>
          <Button
            variant="outline-light"
            onClick={() => navigate('/project')}
            className="d-flex align-items-center"
          >
            <BsArrowLeft className="me-2" />
            Back to Projects
          </Button>
        </div>
      <Particle />
     
      <Container>
        

        {/* Project header */}
        <Row className="mb-5">
          <Col>
            <h1 className="project-heading">
              <strong className="purple">{project.title}</strong>
            </h1>
            <p style={{ color: 'white', fontSize: '1.2em' }}>
              {project.description}
            </p>
          </Col>
        </Row>

        <Row>
          {/* Project Images */}
          <Col lg={6} className="mb-4">
            <Card className="project-detail-card">
              <Card.Header>
                <h4 style={{ color: 'white' }}>Project Gallery</h4>
              </Card.Header>
              <Card.Body>
                {project.images.map((image, index) => (
                  <div key={index} className="mb-3">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="img-fluid rounded shadow"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                ))}
                {project.images.length === 1 && (
                  <div className="text-center mt-3">
                    <p style={{ color: '#a0a0a0' }}>
                      More screenshots coming soon...
                    </p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Project Details */}
          <Col lg={6}>
            {/* Detailed Description */}
            <Card className="project-detail-card mb-4">
              <Card.Header>
                <h4 style={{ color: 'white' }}>About This Project</h4>
              </Card.Header>
              <Card.Body>
                <p style={{ color: 'white', textAlign: 'justify' }}>
                  {project.detailedDescription}
                </p>
              </Card.Body>
            </Card>

            {/* Technologies Used */}
            <Card className="project-detail-card mb-4">
              <Card.Header>
                <h4 style={{ color: 'white' }}>Technologies Used</h4>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      bg="primary"
                      className="me-2 mb-2"
                      style={{ fontSize: '0.9em' }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>

            {/* Key Features */}
            <Card className="project-detail-card mb-4">
              <Card.Header>
                <h4 style={{ color: 'white' }}>Key Features</h4>
              </Card.Header>
              <Card.Body>
                <ul style={{ color: 'white' }}>
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            {/* Action Buttons */}
            <Card className="project-detail-card">
              <Card.Header>
                <h4 style={{ color: 'white' }}>Links</h4>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    href={project.ghLink}
                    target="_blank"
                    className="d-flex align-items-center"
                  >
                    <BsGithub className="me-2" />
                    {project.isBlog ? 'Blog' : 'GitHub'}
                  </Button>

                  {!project.isBlog && project.demoLink && (
                    <Button
                      variant="success"
                      href={project.demoLink}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <CgWebsite className="me-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectDetail;
