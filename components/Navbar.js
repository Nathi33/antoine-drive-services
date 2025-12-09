import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded} 
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="brand-hover-bold">
          <Image
            src="/Logo.webp"
            alt="Logo Antoine Drive Services"
            height={60}
            width={100}
            className="mini-logo d-inline-block align-top"
            priority
          />
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link 
              href="/" 
              className={`${router.pathname === "/" && activeSection === "" ? "active-link" : ""}`} 
              onClick={() => {
                setActiveSection("");
                setExpanded(false);
              }}
            >
              Accueil
            </Nav.Link>

            <Nav.Link
              href="/a-propos"
              className={`${router.pathname === "/a-propos" ? "active-link" : ""}`}
              onClick={() => {
                setExpanded(false);
                router.push("/a-propos");
              }}
            >
              À propos
            </Nav.Link>

            <Nav.Link
              href="/mes-services"
              className={`${router.pathname === "/mes-services" ? "active-link" : ""}`}
              onClick={() => {
                setExpanded(false);
                router.push("/mes-services");
              }}
            >
              Mes services
            </Nav.Link>

            <Nav.Link
              href="/mes-tarifs"
              className={`${router.pathname === "/mes-tarifs" ? "active-link" : ""}`}
              onClick={() => {
                setExpanded(false);
                router.push("/mes-tarifs");
              }}
            >
              Mes tarifs
            </Nav.Link>

            <Nav.Link
              href="/me-contacter"
              className={`${router.pathname === "/me-contacter" ? "active-link" : ""}`}
              onClick={() => {
                setExpanded(false);
                router.push("/me-contacter");
              }}
            >
              Me contacter
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
