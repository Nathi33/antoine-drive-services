import { Container, Button } from 'react-bootstrap';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <main>
      <section>
        <h1>Antoine Drive Services</h1>
        <Container className="text-center my-5">
          <h2>Bienvenue sur le site officiel d’Antoine Drive Services</h2>
          <div className="hero-image-wrapper">
            <Image
              src="/Home.webp"
              alt="Photo de la voiture électrique d'Antoine Drive Services"
              className="img-logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <p className="lead">
            Votre expert en optimisation mobile et développement web.
          </p>
          <Button variant="primary" href="/me-contacter">
            Contactez-moi
          </Button>
        </Container>
      </section>
      

    </main>
    </>
  )
}
