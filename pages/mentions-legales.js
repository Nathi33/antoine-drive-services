// pages/mentions-legales.js
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

export default function MentionsLegales() {
  useEffect(() => {
    // Animation du titre principal
    gsap.from(".legal-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".legal-title",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation des sections
    gsap.utils.toArray(".legal-section").forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <>
      <Seo
        title="Mentions légales - Antoine Drive Services"
        description="Mentions légales du site Antoine Drive Services : informations légales, propriété, hébergement et données personnelles."
        url="https://www.antoine-drive-services.fr/mentions-legales"
        image="https://www.antoine-drive-services.fr/images/mentions-legales.webp"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 legal-title">Mentions légales</h1>

          <Row className="legal-section">
            <Col>
              <h2>Éditeur du site</h2>
              <p>
                Le site Antoine Drive Services est édité par :
              </p>
              <ul>
                <li>Nom : Antoine Drive Services</li>
                <li>Adresse : [Adresse du siège ou du domicile]</li>
                <li>Email : contact@antoinedriveservices.fr</li>
                <li>Numéro de téléphone : 07 43 65 27 85</li>
              </ul>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par :
              </p>
              <ul>
                <li>Nom de l’hébergeur : [Nom de l’hébergeur, ex. OVH, IONOS…]</li>
                <li>Adresse : [Adresse de l’hébergeur]</li>
                <li>Numéro de téléphone : [Numéro de l’hébergeur]</li>
              </ul>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) sont protégés par le droit d’auteur et restent la propriété exclusive de Antoine Drive Services ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation ou utilisation, totale ou partielle, est strictement interdite sans autorisation préalable.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Données personnelles</h2>
              <p>
                Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs.
                Conformément à la loi RGPD, vous disposez d’un droit d’accès, de modification et de suppression de vos données personnelles.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Cookies</h2>
              <p>
                Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou les supprimer à tout moment.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Responsabilité</h2>
              <p>
                Antoine Drive Services ne peut être tenu responsable des dommages directs ou indirects liés à l’utilisation du site, à l’inexactitude des informations ou à l’interruption du service.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
