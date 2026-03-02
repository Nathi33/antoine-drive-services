import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/Seo";

export default function PolitiqueConfidentialite() {

  return (
    <>
      <Seo
        title="Politique de confidentialité - Antoine Drive Services"
        description="Politique de confidentialité du site Antoine Drive Services : protection des données personnelles et respect de la vie privée des utilisateurs."
        url="https://www.antoine-drive-services.fr/politique-confidentialite"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 privacy-title">Politique de confidentialité</h1>

          <Row className="privacy-section">
            <Col>
              <h2>Collecte des données</h2>
              <p>
                Les informations collectées via le formulaire de contact (nom, email, date, horaire, lieux et message) sont utilisées uniquement pour répondre aux demandes des utilisateurs.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Utilisation des données</h2>
              <p>
                Les données collectées ne sont utilisées que dans le cadre de la fourniture du service VTC et ne sont jamais transmises à des tiers sans votre consentement.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Durée de conservation</h2>
              <p>
                Les informations personnelles sont conservées uniquement pendant la durée nécessaire au traitement de votre demande ou conformément aux obligations légales.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Droits des utilisateurs</h2>
              <p>
                Conformément à la loi RGPD, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition de vos données personnelles. Pour exercer vos droits, contactez : <a href="mailto:antoinedriveservices@free.fr" className="contact-page-link">antoinedriveservices@free.fr</a>.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Cookies</h2>
              <p>
                Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou les supprimer à tout moment.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Sécurité</h2>
              <p>
                Des mesures techniques et organisationnelles sont mises en place pour protéger vos données contre tout accès non autorisé, altération ou divulgation.
              </p>
            </Col>
          </Row>

          <Row className="privacy-section mt-4">
            <Col>
              <h2>Contact</h2>
              <p>
                Pour toute question relative à la protection des données personnelles, vous pouvez contacter Antoine Drive Services à : <a href="mailto:antoinedriveservices@free.fr" className="contact-page-link">antoinedriveservices@free.fr</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
