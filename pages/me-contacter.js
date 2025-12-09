// pages/me-contacter.js
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

registerLocale("fr", fr);
gsap.registerPlugin(ScrollTrigger);

// Import dynamique du composant MapLeaflet pour éviter l'erreur window
const MapWithNoSSR = dynamic(() => import("../components/MapLeaflet"), { ssr: false });

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    // Animation titre principal
    gsap.from(".contact-title", {
      opacity: 0,
      y: -30,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation formulaire et infos
    gsap.utils.toArray(".contact-element").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <>
      <Seo
        title="Contact - Antoine Drive Services"
        description="Contactez Antoine Drive Services pour vos trajets VTC sur-mesure : transferts aéroport, courses locales et événements."
        url="https://www.antoine-drive-services.fr/contact"
        image="https://www.antoine-drive-services.fr/images/contact.webp"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 contact-title">Contactez-moi</h1>

          <Row className="justify-content-center">
            {/* Formulaire */}
            <Col md={6}>
              <Form className="contact-element">
                <Form.Group className="mb-3">
                  <Form.Label>Nom <span className="required">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Téléphone <span className="required">*</span></Form.Label>
                  <Form.Control type="tel" placeholder="Votre téléphone" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email <span className="required">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Votre email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date du trajet <span className="required">*</span></Form.Label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    placeholderText="Sélectionnez une date"
                    locale="fr"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Horaire <span className="required">*</span></Form.Label>
                  <DatePicker
                    selected={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Heure"
                    dateFormat="HH:mm"
                    className="form-control"
                    placeholderText="Sélectionnez une heure"
                    locale="fr"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lieu de départ <span className="required">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Adresse ou lieu" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lieu d’arrivée <span className="required">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Adresse ou lieu" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Informations complémentaires" />
                </Form.Group>
                <p className="form-legend"><span className="required">*</span> Champs obligatoires</p>
                <Button type="submit" className="px-4 py-2">Envoyer</Button>
              </Form>
            </Col>

            {/* Infos et carte */}
            <Col md={4} className="mt-4 mt-md-0 contact-element">
              <h4>Infos pratiques</h4>
              <p>📞 <a href="tel:+33743652785" className="contact-page-link">07 43 65 27 85</a></p>
              <p>✉️ <a href="mailto:contact@antoinedriveservices.fr" className="contact-page-link">contact@antoinedriveservices.fr</a></p>
              <p>📍 Basé à Vaire et disponible pour vos trajets locaux et longue distance.</p>

              {/* Carte */}
              <div className="mt-3">
                <MapWithNoSSR />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
