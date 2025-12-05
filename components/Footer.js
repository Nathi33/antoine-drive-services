import { Container } from "react-bootstrap";
import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer mt-5 p-4 bg-dark text-light text-center">
        <div className="mb-3">
          <p>📞 06 XX XX XX XX | ✉️ contact@antoinedriveservices.fr</p>
        </div>
        <div className="mb-3">
          <Nav.Link as={Link} href="/" className="text-light mx-2">Accueil</Nav.Link>
          <Nav.Link as={Link} href="/a-propos" className="text-light mx-2">À propos</Nav.Link>
          <Nav.Link as={Link} href="/services" className="text-light mx-2">Services</Nav.Link>
          <Nav.Link as={Link} href="/tarifs" className="text-light mx-2">Tarifs</Nav.Link>
          <Nav.Link as={Link} href="/me-contacter" className="text-light mx-2">Contact</Nav.Link>
        </div>
        <div>
          <a href="#" className="text-light mx-2">Facebook</a>
          <a href="#" className="text-light mx-2">Instagram</a>
        </div>
      </footer>
  );
}
