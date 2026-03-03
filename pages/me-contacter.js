import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Seo from "../components/Seo";
import dynamic from "next/dynamic";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";
import emailjs from "@emailjs/browser";

registerLocale("fr", fr);
gsap.registerPlugin(ScrollTrigger);

// Import dynamique du composant MapLeaflet pour éviter l'erreur window
const MapWithNoSSR = dynamic(() => import("../components/MapLeaflet"), { ssr: false });

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [feedback, setFeedback] = useState({ type: "", message: "", visible: false });
  const formRef = useRef();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback({ type: "", message: "", visible: false });

    // Préparer les variables pour EmailJS
    const templateParams = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      user_phone: e.target.user_phone.value,
      travel_date: selectedDate ? selectedDate.toLocaleDateString("fr-FR") : "",
      travel_time: selectedTime ? selectedTime.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) : "",
      departure: e.target.departure.value,
      arrival: e.target.arrival.value,
      message: e.target.message.value || "",
      to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL, // Redirection vers Free
      from_email: process.env.NEXT_PUBLIC_EMAILJS_FROM_EMAIL, // Adresse OVH
    };
    
    // Envoi de l'email via EmailJS
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setFeedback({ type: "success", message: "Votre message a bien été envoyé !", visible: true });
      e.target.reset();
      setSelectedDate(null);
      setSelectedTime(null);

      // Masquer le message après 5 secondes
      setTimeout(() => {
        setFeedback(prev => ({ ...prev, visible: false }));
      }, 5000);
    })
    .catch((err) => {
      console.error(err);
      setFeedback({ type: "danger", message: "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.", visible: true });

      // Masquer le message après 5 secondes
      setTimeout(() => {
        setFeedback(prev => ({ ...prev, visible: false }));
      }, 5000);
    });
  };

  return (
    <>
      <Seo
        title="Contact - Antoine Drive Services"
        description="Contactez Antoine Drive Services pour vos trajets VTC sur-mesure : transferts aéroport, courses locales et événements, mariages."
        url="https://www.antoine-drive-services.fr/contact"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 contact-title">Contactez-moi</h1>

          <Row className="justify-content-center">
            {/* Formulaire */}
            <Col md={6}>
              <Form ref={formRef} className="contact-element" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom <span className="required">*</span></Form.Label>
                  <Form.Control type="text" name="user_name" placeholder="Votre nom" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Téléphone <span className="required">*</span></Form.Label>
                  <Form.Control type="tel" name="user_phone" placeholder="Votre téléphone" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email <span className="required">*</span></Form.Label>
                  <Form.Control type="email" name="user_email" placeholder="Votre email" required />
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
                    name="travel_date"
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
                    name="travel_time"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lieu de départ <span className="required">*</span></Form.Label>
                  <Form.Control type="text" name="departure" placeholder="Adresse ou lieu" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Lieu d’arrivée <span className="required">*</span></Form.Label>
                  <Form.Control type="text" name="arrival" placeholder="Adresse ou lieu" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} name="message" placeholder="Informations complémentaires" />
                </Form.Group>
                <p className="form-legend"><span className="required">*</span> Champs obligatoires</p>
                <Button type="submit" className="px-4 py-2">Envoyer</Button>

                {feedback.visible && (
                  <Alert variant={feedback.type} className="mt-3 animate__animated animate__fadeIn">
                    {feedback.message}
                  </Alert>
                )}
              </Form>
            </Col>

            {/* Infos et carte */}
            <Col md={4} className="mt-4 mt-md-0 contact-element">
              <h2>Infos pratiques</h2>
              <p>📞 <a href="tel:+33743652785" className="contact-page-link">07 43 65 27 85</a></p>
              <p>✉️ <a href="mailto:antoinedriveservices@free.fr" className="contact-page-link">antoinedriveservices@free.fr</a></p>
              <p>📍 Basé à Vairé et disponible pour tous vos trajets locaux.</p>

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
