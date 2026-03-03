import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function APropos() {
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation du titre
      gsap.from(".about-title", {
        opacity: 0,
        y: -30,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animation des paragraphes
      gsap.utils.toArray(".about-text-col p").forEach((p, i) => {
        gsap.from(p, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: p,
            start: "top 100%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      // ➤ MOBILE : animation immédiate + scroll
      if (window.innerWidth < 768) {
        // Animation au chargement
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        );

        // Animation AU SCROLL (identique desktop)
        const tlImgMobile = gsap.timeline({ paused: true }).fromTo(
          imageRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          }
        );

        ScrollTrigger.create({
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 20%",
          onEnter: () => tlImgMobile.play(0),
          onEnterBack: () => tlImgMobile.play(0),
          onLeave: () => tlImgMobile.reverse(),
          onLeaveBack: () => tlImgMobile.reverse(),
        });
      }
      // ➤ DESKTOP : animation au scroll
      else {
        const tlImg = gsap.timeline({ paused: true }).fromTo(
          imageRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
          }
        );

        ScrollTrigger.create({
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom 20%",
          onEnter: () => tlImg.play(0),
          onEnterBack: () => tlImg.play(0),
          onLeave: () => tlImg.reverse(),
          onLeaveBack: () => tlImg.reverse(),
        });
      }

      // Animation section "Pourquoi choisir"
      gsap.from(".about-why li", {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".about-why",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <Seo
        title="À propos - Antoine Drive Services"
        description="Antoine Drive Services, chauffeur VTC passionné à Vairé. Confort, ponctualité et éco-responsabilité pour tous vos trajets."
        url="https://www.antoine-drive-services.fr/a-propos"
      />

      <main>
        <Container className="my-4">
          <h1 className="about-title text-center">
            À propos d’Antoine Drive Services
          </h1>

          <Row className="about-text align-items-center">
            {/* --- IMAGE SUR MOBILE EN PREMIER — SUR DESKTOP EN SECOND --- */}
            <Col md={6} className="text-center order-1 order-md-2">
              <div
                ref={imageRef}
                className="about-image-wrapper"
                style={{
                  width: "350px",
                  height: "350px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "20px auto",
                  position: "relative",
                }}
              >
                <Image
                  src="/Antoine.webp"
                  alt="Antoine, chauffeur VTC à Vairé, souriant"
                  width={350}
                  height={350}
                  style={{ objectFit: "cover", display: "block" }}
                />
              </div>
            </Col>

            {/* --- TEXTE --- */}
            <Col md={6} className="about-text-col order-2 order-md-1">
              <p className="lead mb-3">
                Chauffeur VTC passionné et attentif basé à Vairé, j’assure vos déplacements en alliant confort, ponctualité et discrétion.
              </p>
              <p>
                Je vous accueille à bord d’un véhicule 100% électrique, silencieux et éco-responsable, pour un trajet agréable, sûr et respectueux de l’environnement.
              </p>
              <p>
                Mon objectif : vous offrir une expérience de transport sereine, fluide et adaptée à vos besoins, que ce soit pour vos rendez-vous, vos trajets personnels ou vos déplacements professionnels.
                Découvrez mes <Link href="/mes-services" className="link-about">services VTC</Link> et réservez votre course en toute simplicité.
              </p>
              <Button href="/me-contacter" className="mt-3 px-4 py-2">
                Contactez-moi
              </Button>
            </Col>
          </Row>

          <Row className="about-why mb-4">
            <Col>
              <h2>Pourquoi choisir Antoine Drive Services ?</h2>
              <ul>
                <li>Chauffeur unique, attentif et expérimenté</li>
                <li>Service VTC sur-mesure pour tous vos trajets</li>
                <li>Véhicule 100% électrique, confortable et silencieux</li>
                <li>Disponibilité et ponctualité garanties</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
