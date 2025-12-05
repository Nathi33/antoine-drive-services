import { Container } from "react-bootstrap";
import Link from "next/link";
import { Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-4 mt-5 text-center text-dark footer-custom">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} NDWebApp — Nathalie Darnaudat</p>
        <p className="small mb-0">Email: <a href="mailto:tonemail@ndwebapp.example">tonemail@ndwebapp.example</a></p>
      </div>
    </footer>
  );
}
