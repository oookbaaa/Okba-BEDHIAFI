import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub, BsEye } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function ProjectCards(props) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project/${props.projectId}`);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>

        {/* View Details Button */}
        <Button
          variant="info"
          onClick={handleViewDetails}
          className="mb-2 w-100"
        >
          <BsEye /> &nbsp; View Details
        </Button>

        <div className="d-flex gap-2 flex-wrap">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? 'Blog' : 'GitHub'}
          </Button>

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
          {!props.isBlog && props.demoLink && (
            <Button variant="success" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
