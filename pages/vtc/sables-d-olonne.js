import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../../components/Seo";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function VtcBenet() {

  useLayoutEffect(() => {
    // Nettoyage complet
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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Seo
        title="VTC aux Sables d’Olonne (85) – Chauffeur privé | Antoine Drive Services"
        description="Chauffeur privé VTC aux Les Sables d’Olonne (85). Trajets locaux, gare, aéroport, déplacements professionnels et évènements."
        url="https://www.antoine-drive-services.fr/vtc/sables-d-olonne"
      />

      <main>
        <Container className="my-4">

          {/* Titre */}
          <h1 className="text-center mb-4 vtc-title">
            VTC aux Sables d’Olonne (85) – Chauffeur privé
          </h1>

          {/* Intro */}
          <p className="lead text-center mb-5 vtc-intro">
            <strong>Antoine Drive Services</strong> propose un service de chauffeur
            privé aux <strong>Sables d’Olonne (85)</strong>, adapté à vos déplacements
            quotidiens comme professionnels. Confort, sécurité et ponctualité
            garanties.
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
              <h2 className="mb-3">Mes prestations VTC aux Sables d’Olonne</h2>
              <ul>
                <li>Déplacements locaux et régionaux</li>
                <li>Transferts gare et aéroport</li>
                <li>Transport privé et professionnel</li>
                <li>Trajets pour évènements (mariages, anniversaires…)</li>
              </ul>

              <p className="mt-3">
                J’interviens également à{" "}
                <Link href="/vtc/vaires" className="link-vtc">
                  Vaires
                </Link>
                ,{" "}
                <Link href="/vtc/la-mothe-achards" className="link-vtc">
                  La Mothe-Achard
                </Link>{" "}
                et dans les communes environnantes.
              </p>
            </Col>
          </Row>

          {/* FAQ */}
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4">FAQ – VTC à Benet</h2>
              <ul className="list-unstyled vtc-faq">
                <li className="mb-3">
                  <strong>Peut-on réserver pour un trajet tôt le matin ?</strong>{" "}
                  → Oui, sur réservation.
                </li>
                <li className="mb-3">
                  <strong>Intervenez-vous dans les communes voisines ?</strong>{" "}
                  → Oui, dans un rayon d’environ 15 km.
                </li>
              </ul>
            </Col>
          </Row>

        </Container>
      </main>
    </>
  );
}
