// pages/mes-tarifs.js
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

export default function MesTarifs() {

  useEffect(() => {
    // Animation du titre principal
    gsap.from(".tarifs-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".tarifs-title",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation du texte introductif
    gsap.from(".tarifs-intro", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".tarifs-intro",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation du CTA
    gsap.from(".tarifs-cta", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.6,
      scrollTrigger: {
        trigger: ".tarifs-cta",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation de la FAQ (stagger)
    gsap.utils.toArray(".tarifs-faq li").forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

  }, []);

  return (
    <>
      <Seo
        title="Mes Tarifs & Devis - Antoine Drive Services"
        description="Demandez votre devis personnalisé pour tous vos trajets VTC avec Antoine Drive Services. Prix au plus juste et service sur-mesure."
        url="https://www.antoine-drive-services.fr/mes-tarifs"
        image="https://www.antoine-drive-services.fr/images/mes-tarifs.webp"
      />

      <main>
        <Container className="my-4">
          {/* Titre principal */}
          <h1 className="text-center mb-4 tarifs-title">Demandez votre devis personnalisé</h1>

          {/* Texte introductif */}
          <p className="lead text-center mb-5 tarifs-intro">
            Chaque trajet est unique : distance, durée, nombre de passagers et type de service peuvent varier.  
            Le prix est étudié au plus juste pour correspondre à vos besoins.  
            Contactez-moi directement pour un service personnalisé et transparent.
          </p>

          {/* CTA principal */}
          <Row className="justify-content-center mb-5 text-center tarifs-cta">
            <Col md={6}>
              <Button
                href="/me-contacter"
                className="px-4 py-2 mb-3"
              >
                Demandez votre devis
              </Button>
              <p className="mb-1">
                📞 <a href="tel:+33743652785" className="price-link">07 43 65 27 85</a>
              </p>
              <p>
                ✉️ <a href="mailto:contact@antoinedriveservices.fr" className="price-link">contact@antoinedriveservices.fr</a>
              </p>
            </Col>
          </Row>

          {/* Mini FAQ */}
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4">Questions fréquentes</h2>
              <ul className="list-unstyled tarifs-faq">
                <li className="mb-3">
                  <strong>Comment puis-je réserver ?</strong> → Par téléphone ou via le formulaire de contact.
                </li>
                <li className="mb-3">
                  <strong>Quand recevrai-je mon devis ?</strong> → Sous 24 heures maximum.
                </li>
                <li className="mb-3">
                  <strong>Quels services sont inclus ?</strong> → Chauffeur, véhicule propre et confortable, assistance aux bagages.
                </li>
                <li className="mb-3">
                  <strong>Prix indicatif au km</strong> → Le tarif peut être estimé sur simple demande, mais reste indicatif.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
