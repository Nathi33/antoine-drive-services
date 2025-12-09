// pages/politique-confidentialite.js
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

export default function PolitiqueConfidentialite() {
  useEffect(() => {
    // Animation du titre principal
    gsap.from(".privacy-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".privacy-title",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation des sections
    gsap.utils.toArray(".privacy-section").forEach((section, i) => {
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
        title="Politique de confidentialité - Antoine Drive Services"
        description="Politique de confidentialité du site Antoine Drive Services : protection des données personnelles et respect de la vie privée des utilisateurs."
        url="https://www.antoine-drive-services.fr/politique-confidentialite"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 privacy-title">Politique de confidentialité</h1>

          <Row className="privacy-section">
            <Col>
              <h2>Collecte des données</h2>
              <p>
                Les informations collectées via le formulaire de contact (nom, email, date, horaire, lieux et message) sont utilisées uniquement pour répondre aux demandes des utilisateurs.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Utilisation des données</h2>
              <p>
                Les données collectées ne sont utilisées que dans le cadre de la fourniture du service VTC et ne sont jamais transmises à des tiers sans votre consentement.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Durée de conservation</h2>
              <p>
                Les informations personnelles sont conservées uniquement pendant la durée nécessaire au traitement de votre demande ou conformément aux obligations légales.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Droits des utilisateurs</h2>
              <p>
                Conformément à la loi RGPD, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition de vos données personnelles. Pour exercer vos droits, contactez : <a href="mailto:contact@antoinedriveservices.fr" className="contact-page-link">contact@antoinedriveservices.fr</a>.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Cookies</h2>
              <p>
                Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou les supprimer à tout moment.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Sécurité</h2>
              <p>
                Des mesures techniques et organisationnelles sont mises en place pour protéger vos données contre tout accès non autorisé, altération ou divulgation.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Contact</h2>
              <p>
                Pour toute question relative à la protection des données personnelles, vous pouvez contacter Antoine Drive Services à : <a href="mailto:contact@antoinedriveservices.fr" className="contact-page-link">contact@antoinedriveservices.fr</a>.
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col className="text-center">
              <p style={{ fontSize: "0.8rem", color: "#666" }}>
                Site réalisé par Nathalie Darnaudat – NDWebApp
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
