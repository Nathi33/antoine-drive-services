import { Container, Row, Col, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-4 pb-2">
      <Container>
        {/* --- Partie supérieure avec colonnes --- */}
        <Row className="align-items-start text-center text-md-start gx-5 gx-md-2">
          {/* Colonne 1 : Logo */}
          <Col md={3} className="mb-3 mb-md-0">
            <div 
              onClick={() => (window.location.href = "/")} 
              style={{ display: 'inline-block', cursor: 'pointer' }}
            >
              <Image
                src="/Logo.webp"
                alt="Logo Antoine Drive Services"
                height={100}
                width={100}
                className="footer-logo"
              />
            </div>
          </Col>

          {/* Colonne 2 : Navigation */}
          <Col md={3} className="mb-3 mb-md-0">
            <h4 className="footer-column-title">Liens utiles : </h4>
            <Nav className="flex-column text-center text-md-start">
              <Nav.Link as={Link} href="/mentions-legales" className="footer-link">Mentions légales</Nav.Link>
              <Nav.Link as={Link} href="/politique-confidentialite" className="footer-link">Politique de confidentialité</Nav.Link>
            </Nav>
          </Col>

          {/* Colonne 3 : Zones VTC */}
          <Col md={3} className="mb-3 mb-md-0">
            <h4 className="footer-column-title">Zones desservies :</h4>
            <Nav className="flex-column text-center text-md-start">
              <Nav.Link as={Link} href="/vtc/vaire" className="footer-link">
                Vairé
              </Nav.Link>
              <Nav.Link as={Link} href="/vtc/sables-d-olonne" className="footer-link">
                Les Sables d’Olonne
              </Nav.Link>
              <Nav.Link as={Link} href="/vtc/la-mothe-achard" className="footer-link">
                La Mothe-Achard
              </Nav.Link>
            </Nav>
          </Col>

          {/* Colonne 4 : Contact + réseaux sociaux */}
          <Col md={3} className="mb-3 mb-md-0">
            <h4 className="footer-column-title">Contactez-moi :</h4>
            <div>
              <p className="container-link mb-2">
                <a href="mailto:antoinedriveservices@free.fr" className="contact-link ms-1">✉️ antoinedriveservices@free.fr</a>
              </p>
              <p className="container-link mb-2">
                <a href="tel:+33743652785" className="contact-link ms-1">📞 07 43 65 27 85</a>
              </p>
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
