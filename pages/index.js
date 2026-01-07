import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Seo from '../components/Seo';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

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

  }, [router.asPath]);

  return (
    <>
      <Seo
        title="Antoine Drive Services - Votre transport sur-mesure"
        description="Transferts aéroports, courses locales, événements et mariages, avec chauffeur professionnel. Service ponctuel et confortable."
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
              {/* Wrapper original */}
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
            </Container>

            {/* --- ZONES DESSERVIES --- */}
            <section className="section-zones mt-5">
              <Container className="text-center">
                <h2 className="mb-4">Zones desservies</h2>
                <p className="mb-4">
                  Antoine Drive Services intervient sur plusieurs communes pour vos trajets VTC :
                </p>

                <div className="row justify-content-center">
                  {[
                    { name: "Vaires", href: "/vtc/vaires" },
                    { name: "Benet", href: "/vtc/benet" },
                    { name: "Fontenay-le-Comte", href: "/vtc/fontenay-le-comte" },
                  ].map((zone, i) => (
                    <div key={i} className="col-6 col-md-3 mb-3">
                      <Link href={zone.href} className="zone-card p-3 border rounded shadow-sm d-block text-decoration-none">
                        {zone.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Container>
            </section>

            {/* CTA PRINCIPAL */}
            <Container className="text-center my-4">
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
                <h3>🚗 Courses locales</h3>
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
