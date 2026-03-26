import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/Seo";


export default function MentionsLegales() {
  
  return (
    <>
      <Seo
        title="Mentions légales - Antoine Drive Services"
        description="Mentions légales du site Antoine Drive Services : informations légales, propriété, hébergement et données personnelles."
        url="https://www.antoine-drive-services.fr/mentions-legales"
      />

      <main>
        <Container className="my-4">
          <h1 className="text-center mb-5 legal-title">Mentions légales</h1>

          <Row className="legal-section">
            <Col>
              <h2>Éditeur du site</h2>
              <p>
                Le site Antoine Drive Services est édité par :
              </p>
              <ul>
                <li>Nom : Antoine Drive Services</li>
                <li>Statut juridique : Micro-entreprise</li>
                <li>Adresse : Vairé, 85150</li>
                <li>Email : <a href="mailto:antoinedriveservices@free.fr" className="legal-link">antoinedriveservices@free.fr</a></li>
                <li>Numéro de téléphone : <a href="tel:+33743652785" className="legal-link">07 43 65 27 85</a></li>
                <li>SIRET : 39960125100057</li>
                <li>TVA : Non applicable, article 293 B du Code général des impôts</li>
              </ul>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Hébergement</h2>
              <p>
                Le site est hébergé par :
              </p>
              <ul>
                <li>Nom de l’hébergeur : OVH</li>
                <li>Adresse : 2 rue Kellermann, 59100 Roubaix, France</li>
                <li>Numéro de téléphone : 1007</li>
              </ul>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Propriété intellectuelle</h2>
              <p>
                Tous les contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) sont protégés par le droit d’auteur et restent la propriété exclusive de Antoine Drive Services ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation ou utilisation, totale ou partielle, est strictement interdite sans autorisation préalable.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Données personnelles</h2>
              <p>
                Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes des utilisateurs.
                Conformément à la loi RGPD, vous disposez d’un droit d’accès, de modification et de suppression de vos données personnelles.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Cookies</h2>
              <p>
                Le site peut utiliser des cookies pour améliorer l’expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies ou les supprimer à tout moment.
              </p>
            </Col>
          </Row>

          <Row className="legal-section mt-4">
            <Col>
              <h2>Responsabilité</h2>
              <p>
                Antoine Drive Services ne peut être tenu responsable des dommages directs ou indirects liés à l’utilisation du site, à l’inexactitude des informations ou à l’interruption du service.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}