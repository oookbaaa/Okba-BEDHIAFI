import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import evh from '../../Assets/Projects/EVH.png';
import YC from '../../Assets/Projects/YCDirectory.png';
import Skilly from '../../Assets/Projects/skilly.jpg';
import Efoire from '../../Assets/Projects/efoire.jpg';

// Project data structure with detailed information
const projectsData = [
  {
    id: 'yc-directory',
    title: 'YC-directory',
    description:
      'YC-Directory is designed for entrepreneurs and startup enthusiasts. It serves as a platform where users can pitch their startup ideas, connect with other entrepreneurs, and gain visibility in the entrepreneurial ecosystem.',
    detailedDescription:
      'YC-Directory is a comprehensive platform built for the entrepreneurial community. It provides a space where budding entrepreneurs can showcase their startup ideas, get feedback from peers, and connect with potential co-founders or investors. The platform features user authentication, idea submission and voting systems, networking capabilities, and a clean, intuitive interface that encourages community engagement.',
    imgPath: YC,
    images: [YC], // Add more images here when available
    ghLink: 'https://github.com/oookbaaa/FirstProject',
    demoLink: 'https://first-project-tau-six.vercel.app/',
    technologies: ['Next.js', 'JavaScript', 'shadcn', 'Tailwind CSS'],
    features: [
      'User Authentication',
      'Startup Idea Submission',
      'Community Voting System',
      'Entrepreneur Networking',
      'Responsive Design',
    ],
    isBlog: false,
  },
  {
    id: 'evh',
    title: 'E.V.H',
    description:
      'Electric Charger Hub Manager is a desktop app designed to assist technicians with the setup, repair, and maintenance of electric vehicle charging hubs. It offers guided installation steps, real-time diagnostics, and quick troubleshooting tools to ensure efficient service and optimal hub performance.',
    detailedDescription:
      'E.V.H (Electric Vehicle Hub) is a comprehensive desktop application designed specifically for technicians working with electric vehicle charging infrastructure. The application provides step-by-step installation guides, real-time diagnostic capabilities, maintenance schedules, and troubleshooting tools to ensure optimal performance of charging hubs.',
    imgPath: evh,
    images: [evh], // Add more images here when available
    ghLink: 'https://github.com/oookbaaa/PI_java/tree/User',
    demoLink: null,
    technologies: ['Java', 'JavaFX', 'SQL', 'Apache Maven'],
    features: [
      'Installation Guides',
      'Real-time Diagnostics',
      'Maintenance Scheduling',
      'Troubleshooting Tools',
      'Performance Monitoring',
    ],
    isBlog: false,
  },
  {
    id: 'skilly',
    title: 'Skilly',
    description:
      'Skilly is a web-based platform that enables individuals to exchange skills and learn from each other, guided by an AI mentor. The system includes features such as: Skill Marketplace, Real-time Collaboration Tools, Payment Integration, User Notifications, Feedback Mechanism, Gamification & Progress Tracking. This project empowered me to apply technologies like Node.js, nest.js, next.js, shadcn, and AI-based recommendation systems to create a real-world learning ecosystem.',
    detailedDescription:
      'Skilly represents the future of peer-to-peer learning, combining traditional skill exchange with cutting-edge AI mentorship. The platform creates a comprehensive ecosystem where users can both teach and learn, supported by intelligent recommendations and progress tracking. Built with modern web technologies, it offers real-time collaboration, secure payment processing, and gamified learning experiences.',
    imgPath: Skilly,
    images: [Skilly], // Add more images here when available
    ghLink: 'https://github.com/oookbaaa/SKILLY-Front',
    demoLink: null,
    technologies: ['Node.js', 'Nest.js', 'React', 'ShadCN', 'AI/ML', 'Tailwind CSS','MongoDB Atlas','Socket.io', 'Docker'],
    features: [
      'Skill Marketplace',
      'AI Mentorship',
      'Real-time Collaboration',
      'Payment Integration',
      'Gamification System',
      'Progress Tracking',
    ],
    isBlog: false,
  },
  {
    id: 'efoire',
    title: 'E-Foire',
    description:
      'E-Foire is a sophisticated multi-tenant e-commerce platform frontend built with React and TypeScript. designed to connect buyers, sellers, and service providers in a comprehensive online trading ecosystem. This is a modular multi-space application with four distinct user interfaces: Client Space, Admin Space, Provider Space, and Delivery Space.',
    detailedDescription:
      'E-Foire is an advanced multi-tenant e-commerce solution that revolutionizes online trading by providing specialized interfaces for different user types. The platform supports four distinct user spaces: Client Space for buyers, Admin Space for platform management, Provider Space for sellers and service providers, and Delivery Space for logistics management. Built with React and TypeScript, it ensures type safety and scalability.',
    imgPath: Efoire,
    images: [Efoire], // Add more images here when available
    ghLink: 'https://github.com/oookbaaa/e-foire-front',
    demoLink: null,
    technologies: [
      'React',
      'TypeScript',
      'Express',
      'Node.js',
      'Multi-tenant Architecture',
      'ShadCN',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    features: [
      'Multi-tenant Architecture',
      'Client Management System',
      'Provider Dashboard',
      'Admin Control Panel',
      'Delivery Management',
      'Responsive Design',
    ],
    isBlog: false,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {projectsData.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                projectId={project.id}
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
export { projectsData };
