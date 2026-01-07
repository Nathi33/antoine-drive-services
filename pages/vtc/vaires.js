import { Container, Row, Col, Button } from "react-bootstrap";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../../components/Seo";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function VtcVaires() {
  
  useLayoutEffect(() => {
  // Nettoyage TOTAL avant relance
  ScrollTrigger.killAll();
  gsap.killTweensOf("*");

  const ctx = gsap.context(() => {
    // État initial VISIBLE
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
        title="VTC à Vaires (85) – Chauffeur privé | Antoine Drive Services"
        description="Chauffeur privé VTC à Vaires (85). Trajets locaux, gare, aéroport, déplacements professionnels et évènements."
        url="https://www.antoine-drive-services.fr/vtc/vaires"
      />

      <main>
        <Container className="my-4">

          {/* Titre */}
          <h1 className="text-center mb-4 vtc-title">
            VTC à Vaires (85) – Chauffeur privé
          </h1>

          {/* Intro */}
          <p className="lead text-center mb-5 vtc-intro">
            Basé à <strong>Vaires (85)</strong>, Antoine Drive Services vous
            accompagne pour tous vos déplacements personnels et professionnels
            dans le sud de la Vendée. Ponctualité, confort et service sur mesure.
          </p>

          {/* CTA */}
          <Row className="justify-content-center mb-5 text-center vtc-cta">
            <Col md={6}>
              <Button href="/me-contacter" className="px-4 py-2 mb-3">
                Réserver votre VTC
              </Button>
              <p className="mb-1">
                📞 <a href="tel:+33743652785" className="price-link">07 43 65 27 85</a>
              </p>
            </Col>
          </Row>

          {/* Services */}
          <Row className="justify-content-center mb-5 vtc-services">
            <Col md={8}>
              <h2 className="mb-3">Mes services de VTC à Vaires</h2>
              <ul>
                <li>Déplacements locaux et régionaux</li>
                <li>Transferts gares et aéroports</li>
                <li>Trajets professionnels</li>
                <li>Évènements privés (mariage, soirée, baptême)</li>
              </ul>

              <p className="mt-3">
                J’interviens également à{" "}
                <Link href="/vtc/fontenay-le-comte" className="link-vtc">Fontenay-le-Comte</Link>,{" "}
                <Link href="/vtc/benet" className="link-vtc">Benet</Link> et dans les communes
                environnantes.
              </p>
            </Col>
          </Row>

          {/* FAQ */}
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="mb-4">Questions fréquentes – VTC à Vaires</h2>
              <ul className="list-unstyled vtc-faq">
                <li className="mb-3">
                  <strong>Faut-il réserver à l’avance ?</strong> → Oui, afin de
                  garantir la disponibilité.
                </li>
                <li className="mb-3">
                  <strong>Intervenez-vous hors de Vaires ?</strong> → Oui, dans
                  un rayon d’environ 15 km et vers les gares/aéroports.
                </li>
                <li className="mb-3">
                  <strong>Quels types de trajets réalisez-vous ?</strong> →
                  Trajets privés, professionnels et évènementiels.
                </li>
              </ul>
            </Col>
          </Row>

        </Container>
      </main>
    </>
  );
}
