// pages/mes-services.js
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";

gsap.registerPlugin(ScrollTrigger);

export default function MesServices() {

  useEffect(() => {
    // Animation du titre principal
    gsap.from(".page-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page-title",
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation de chaque service (titre + paragraphe)
    gsap.utils.toArray(".service-col").forEach((col, index) => {
      const content = col.querySelectorAll(".service-title, .service-text");

      gsap.from(content, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: col,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          // markers: true, // pour debug
        },
      });
    });
  }, []);

  return (
    <>
      <Seo
        title="Mes Services - Antoine Drive Services"
        description="Découvrez les services VTC d'Antoine Drive Services : transferts aéroport & gare, événements, transport professionnel et courses locales."
        url="https://www.antoine-drive-services.fr/mes-services"
        image="https://www.antoine-drive-services.fr/images/mes-services.webp"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 page-title">Mes Services</h1>

          <Row className="mt-3 g-4">
            {/* Transferts aéroport & gare */}
            <Col md={6} className="service-col d-flex flex-column">
              <h3 className="service-title">🚖 Transferts aéroport & gare</h3>
              <p className="service-text">
                Je vous accompagne pour vos départs et arrivées en toute sérénité. Ponctualité, confort et aide aux bagages inclus.
              </p>
            </Col>

            {/* Événements & soirées */}
            <Col md={6} className="service-col d-flex flex-column">
              <h3 className="service-title">🎉 Événements & soirées</h3>
              <p className="service-text">
                Besoin d’un trajet pour une soirée, un anniversaire, un mariage ou une sortie entre amis ? Je vous reconduis en toute sécurité et sans stress.
              </p>
            </Col>

            {/* Transport professionnel */}
            <Col md={6} className="service-col d-flex flex-column">
              <h3 className="service-title">💼 Transport professionnel</h3>
              <p className="service-text">
                Pour vos rendez-vous, séminaires ou déplacements réguliers, je vous offre un service fiable, discret et adapté à vos besoins professionnels.
              </p>
            </Col>

            {/* Courses locales & déplacements du quotidien */}
            <Col md={6} className="service-col d-flex flex-column">
              <h3 className="service-title">🏡 Courses locales & déplacements du quotidien</h3>
              <p className="service-text">
                Pour vos trajets proches, vos rendez-vous médicaux, vos courses ou vos visites, je suis là pour vous faciliter la vie.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
