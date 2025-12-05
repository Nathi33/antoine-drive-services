import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Seo from '../components/Seo';

export default function Home() {
  
  useEffect(() => {
    // Animations GSAP simples
    gsap.from(".hero-title-svg", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero-image-wrapper", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
    gsap.from(".intro-text", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
    gsap.from(".services-col", { opacity: 0, y: 30, stagger:0.2, duration: 1, delay: 0.9 });
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
                  d="
                    M 10,150 
                    Q 325,-20 600,150
                  "
                />
              </defs>
              <text 
                width="100%"
                textAnchor="middle"
                className="hero-title-text"
              >
                <textPath href="#curve" startOffset="50%">
                  Antoine Drive Services
                </textPath>
              </text>
            </svg>
          </h1>
          
          <Container className="text-center my-5">
            <div className="hero-image-wrapper">
              <Image
                src="/Home.webp"
                alt="Voiture électrique VTC d'Antoine Drive Services"
                className="img-logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <h2 className="under-title">
              Votre transport VTC sûr et confortable, où que vous soyez.
            </h2>
            <p className="intro-text lead">
              Antoine Drive Services vous accompagne pour tous vos tajets VTC : transferts aéroports, gares, événements spéciaux et courses privées. Service ponctuel et confortable avec chauffeur professionnel.
            </p>
            <p className="text-muted">
              Disponible sur Vaire et sa région, pour vos trajets locaux et longue distance.
            </p>
            <Button href="/me-contacter" title="Contactez Antoine Drive Services pour votre trajet VTC sur-mesure">
              Contactez-moi
            </Button>
          </Container>
        </section>

        <section className="section-services row">
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

        <div className="cta-secondary d-flex flex-column align-items-center justify-content-center my-5 p-4 rounded shadow-lg">
          <h3 className="mb-5">Vous souhaitez organiser votre trajet sur-mesure ?</h3>
          <Button href="/me-contacter" className="px-4 py-2">Contactez-moi</Button>
        </div>
      </Container>
    </main>
    </>
  )
}
