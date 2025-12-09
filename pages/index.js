import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Seo from '../components/Seo';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  useEffect(() => {

    // Animation du titre principal
    gsap.from(".hero-title-svg", {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-title-svg",
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Image principale
    gsap.from(".hero-image-wrapper", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-image-wrapper",
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Texte d’intro
    gsap.from(".intro-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".intro-text",
        start: "top 95%",
        toggleActions: "play reverse play reverse"
      }
    });

    // Cols services
    gsap.from(".services-col", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-services",
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      }
    });

    // CTA final
    gsap.from(".cta-secondary h3", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cta-secondary",
        start: "top 90%",
        toggleActions: "play reverse play reverse"
      }
    });

  }, []);

  return (
    <>
      <Seo
        title="Antoine Drive Services - Votre transport sur-mesure"
        description="Transferts aéroports, courses locales et événements avec chauffeur professionnel. Service ponctuel et confortable."
        url="https://www.antoine-drive-services.fr/"
        image="https://www.antoine-drive-services.fr/images/Home.webp"
      />

      <main>
        <Container>
          <section className='section-home'>
            <h1>
              <svg
                width="100%"
                height="150"
                viewBox="0 0 650 150"
                className="hero-title-svg"
                role="img"
                aria-label="Antoine Drive Services"
              >
                <defs>
                  <path
                    id="curve"
                    d="M 10,150 Q 325,-20 600,150"
                  />
                </defs>
                <text width="100%" textAnchor="middle" className="hero-title-text">
                  <textPath href="#curve" startOffset="50%">
                    Antoine Drive Services
                  </textPath>
                </text>
              </svg>
            </h1>
            
            <Container className="text-center my-5">

              {/* ICI → ton wrapper original, dimensions intactes */}
              <div className="hero-image-wrapper">
                <Image
                  src="/Home.webp"
                  alt="Voiture électrique VTC d'Antoine Drive Services"
                  className="img-logo"
                  fill
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <h2 className="under-title">
                Votre transport VTC sûr et confortable, où que vous soyez.
              </h2>

              <p className="intro-text lead">
                Antoine Drive Services vous accompagne pour tous vos trajets VTC :
                transferts aéroports, gares, événements spéciaux et courses privées.
                Service ponctuel et confortable avec chauffeur professionnel.
              </p>

              <p className="text-muted">
                Disponible sur Vaire et sa région, pour vos trajets locaux et longue distance.
              </p>

              <Button href="/me-contacter">
                Contactez-moi
              </Button>
            </Container>
          </section>

          {/* SERVICES */}
          <section className="section-services row mt-5">
            <div className="col-md-4 services-col mb-4">
              <div className="service-card p-3 h-100">
                <h3>✈️ Transferts Aéroport</h3>
                <p>Trajets vers et depuis tous les aéroports de la région. Ponctuel et confortable.</p>
                <Button variant="outline-primary" href="/mes-services">En savoir plus</Button>
              </div>
            </div>

            <div className="col-md-4 services-col mb-4">
              <div className="service-card p-3 h-100">
                <h3>🚗 Courses locales & longues distances</h3>
                <p>Déplacements professionnels ou personnels. Flexibilité et disponibilité assurées.</p>
                <Button variant="outline-primary" href="/mes-services">En savoir plus</Button>
              </div>
            </div>

            <div className="col-md-4 services-col mb-4">
              <div className="service-card p-3 h-100">
                <h3>🎉 Événements & occasions</h3>
                <p>Mariages, soirées, rendez-vous importants. Chauffeur dédié pour un service premium.</p>
                <Button variant="outline-primary" href="/mes-services">En savoir plus</Button>
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <div className="cta-secondary d-flex flex-column align-items-center justify-content-center my-5 p-4 rounded shadow-lg">
            <h3 className="mb-5">Vous souhaitez organiser votre trajet sur-mesure ?</h3>
            <Button href="/me-contacter" className="px-4 py-2">Contactez-moi</Button>
          </div>

        </Container>
      </main>
    </>
  );
}
