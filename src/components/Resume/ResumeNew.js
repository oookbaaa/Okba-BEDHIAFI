import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Particle from '../Particle';
import pdfEN from '../../Assets/CV EN.pdf';
import pdfFR from '../../Assets/CV FR.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const getCurrentPdf = () => {
    return selectedLanguage === 'EN' ? pdfEN : pdfFR;
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Page
          key={i}
          pageNumber={i}
          scale={width > 786 ? 1.7 : 0.6}
          style={{ marginBottom: '20px' }}
        />
      );
    }
    return pages;
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Language Selection */}
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <Col xs="auto">
            <ButtonGroup>
              <Button
                variant={
                  selectedLanguage === 'EN' ? 'primary' : 'outline-primary'
                }
                onClick={() => setSelectedLanguage('EN')}
              >
                English CV
              </Button>
              <Button
                variant={
                  selectedLanguage === 'FR' ? 'primary' : 'outline-primary'
                }
                onClick={() => setSelectedLanguage('FR')}
              >
                CV Français
              </Button>
            </ButtonGroup>
          </Col>
        </Row>

        {/* Download Button */}
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <Button
            variant="primary"
            href={getCurrentPdf()}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download {selectedLanguage === 'EN' ? 'English' : 'French'} CV
          </Button>
        </Row>

        {/* PDF Display */}
        <Row className="resume">
          <Document
            file={getCurrentPdf()}
            className="d-flex justify-content-center flex-column align-items-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {numPages && renderPages()}
          </Document>
        </Row>

        {/* Bottom Download Button */}
        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            marginTop: '20px',
          }}
        >
          <Button
            variant="primary"
            href={getCurrentPdf()}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download {selectedLanguage === 'EN' ? 'English' : 'French'} CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
