import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../../components/Seo";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function VtcFontenayLeComte() {

  useLayoutEffect(() => {
    // Nettoyage total avant relance
    ScrollTrigger.killAll();
    gsap.killTweensOf("*");

    const ctx = gsap.context(() => {
      // État initial visible
      gsap.set(
        [".vtc-title", ".vtc-intro", ".vtc-cta", ".vtc-services li", ".vtc-faq li"],
        { opacity: 1, y: 0 }
      );

      // TITRE
      gsap.from(".vtc-title", {
        opacity: 0,
        y: -30,
        duration: 1,
        scrollTrigger: {
          trigger: ".vtc-title",
          start: "top 90%",
        },
      });

      // INTRO
      gsap.from(".vtc-intro", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".vtc-intro",
          start: "top 90%",
        },
      });

      // CTA
      gsap.from(".vtc-cta", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".vtc-cta",
          start: "top 90%",
        },
      });

      // SERVICES
      gsap.utils.toArray(".vtc-services li").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          },
        });
      });

      // FAQ
      gsap.utils.toArray(".vtc-faq li").forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert(); // nettoyage propre
  }, []);

  return (
    <>
      <Seo
        title="VTC à La Mothe-Achard (85) – Chauffeur privé | Antoine Drive Services"
        description="Chauffeur privé VTC à La Mothe-Achard. Trajets locaux, gare, aéroport, déplacements professionnels et évènements."
        url="https://www.antoine-drive-services.fr/vtc/la-mothe-achard"
      />

      <main>
        <Container className="my-4">

          {/* Titre */}
          <h1 className="text-center mb-4 vtc-title">
            VTC à La Mothe-Achard (85) – Chauffeur privé
          </h1>

          {/* Intro */}
          <p className="lead text-center mb-5 vtc-intro">
            Vous recherchez un <strong>VTC à La Mothe-Achard</strong> pour vos
            déplacements personnels ou professionnels ?{" "}
            <strong>Antoine Drive Services</strong> vous accompagne avec un
            service fiable et ponctuel, au départ ou à destination de
            La Mothe-Achard.
          </p>

          {/* CTA */}
          <Row className="justify-content-center mb-5 text-center vtc-cta">
            <Col md={6}>
              <Button href="/me-contacter" className="px-4 py-2 mb-3">
                Réserver votre VTC
              </Button>
              <p className="mb-1">
                📞{" "}
                <a href="tel:+33743652785" className="price-link">
                  07 43 65 27 85
                </a>
              </p>
            </Col>
          </Row>

          {/* Services */}
          <Row className="justify-content-center mb-5 vtc-services">
            <Col md={8}>
              <h2 className="mb-3">Mes services de VTC à La Mothe-Achard</h2>
              <ul>
                <li>Trajets domicile – travail</li>
                <li>Transferts gare et aéroport</li>
                <li>Rendez-vous professionnels</li>
                <li>Transport privé sur réservation</li>
              </ul>

              <p className="mt-3">
                J’interviens également à{" "}
                <Link href="/vtc/vaires" className="link-vtc">
                  Vaires
                </Link>
                ,{" "}
                <Link href="/vtc/sables-d-olonne" className="link-vtc">
                  Les Sables d’Olonne
                </Link>{" "}
                et dans les communes environnantes.
              </p>
            </Col>
          </Row>

          {/* FAQ */}
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4">FAQ – VTC à La Mothe-Achard</h2>
              <ul className="list-unstyled vtc-faq">
                <li className="mb-3">
                  <strong>Assurez-vous les trajets vers les aéroports ?</strong>{" "}
                  → Oui, je réalise des transferts sur réservation.
                </li>
                <li className="mb-3">
                  <strong>Êtes-vous disponible le week-end ?</strong> → Mes
                  services VTC sont disponibles en semaine et le week-end selon
                  disponibilité.
                </li>
              </ul>
            </Col>
          </Row>

        </Container>
      </main>
    </>
  );
}
