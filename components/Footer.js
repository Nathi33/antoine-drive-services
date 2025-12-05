// components/Footer.js
import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-4 pb-2">
      <Container>
        {/* --- Partie supérieure avec colonnes --- */}
        <Row className="align-items-start text-center text-md-start">
          {/* Colonne 1 : Logo */}
          <Col md={4} className="mb-3 mb-md-0">
            <Link href="/">
              <Image
                src="/Logo.webp"
                alt="Logo Antoine Drive Services"
                height={60}
                width={100}
              />
            </Link>
          </Col>

          {/* Colonne 2 : Navigation */}
          <Col md={4} className="mb-3 mb-md-0">
            <h4 className="footer-column-title">Liens utiles : </h4>
            <Nav className="flex-column text-center text-md-start">
              <Nav.Link as={Link} href="/mentions-legales" className="footer-link">Mentions légales</Nav.Link>
              <Nav.Link as={Link} href="/politique-confidentialite" className="footer-link">Politique de confidentialité</Nav.Link>
            </Nav>
          </Col>

          {/* Colonne 3 : Contact + réseaux sociaux */}
          <Col md={4} className="mb-3 mb-md-0">
            <h4 className="footer-column-title">Contactez-moi :</h4>
            <div>
              <p className="container-link mb-2">
                <a href="mailto:contact@antoinedriveservices.fr" className="contact-link ms-1">✉️ contact@antoinedriveservices.fr</a>
              </p>
              <p className="container-link mb-2">
                <a href="tel:+33743652785" className="contact-link ms-1">📞 07 43 65 27 85</a>
              </p>
            </div>
            <h4 className="footer-column-title mt-4">Mes réseaux sociaux :</h4>
            <div className="social-icons">
              <a href="#" aria-label="Profil LinkedIn" target="_blank" rel="noopener noreferrer" className="social-link me-3 fs-4">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" aria-label="Profil Facebook" target="_blank" rel="noopener noreferrer" className="social-link me-3 fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" aria-label="Profil Instagram" target="_blank" rel="noopener noreferrer" className="social-link fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
            </div>
          </Col>
        </Row>

        {/* --- Ligne séparatrice --- */}
        <hr className="my-3 border-light" />

        {/* --- Partie inférieure : droits et légaux --- */}
        <Row className="text-center">
          <Col>
           <p className="mb-0">
              &copy; {new Date().getFullYear()} Antoine Drive Services. Tous droits réservés.{" "} 
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
