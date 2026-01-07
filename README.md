# Antoine Drive Services - Site VTC

![Next.js](https://img.shields.io/badge/Next.js-13.5.5-black?style=for-the-badge&logo=next.js)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)
![OVH](https://img.shields.io/badge/OVH-Hébergement-orange?style=for-the-badge&logo=ovh)

---

## Description
Site vitrine pour **Antoine Drive Services**, service de transport VTC sur-mesure.

**Fonctionnalités principales :**  
- Pages : Accueil, À propos, Mes services, Mes tarifs, Me contacter  
- Pages VTC : `/vtc/vaire`, `/vtc/fontenay-le-comte`, `/vtc/benet`  
- Pages légales : Mentions légales, Politique de confidentialité  
- Formulaire de contact avec envoi d’e-mail via **EmailJS**  
- Responsive (desktop, tablette, mobile)  
- SEO optimisé avec `next-seo`, sitemap et `robots.txt`  
- Animations légères avec **GSAP**

---

## Installation

1. Cloner le projet :  
```bash
git clone https://github.com/Nathi33/antoine-drive-services.git
cd antoine-drive-services
```

2. Installer les dépendances :  
```bash
npm install
```

3. Créer un fichier .env.local à la racine du projet avec les variables d'environnement :  
NEXT_PUBLIC_EMAILJS_SERVICE_ID=ton_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=ton_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ton_public_key
NEXT_PUBLIC_EMAILJS_FROM_EMAIL=votre-mail@votre-domaine-ovh.fr
NEXT_PUBLIC_EMAILJS_TO_EMAIL=antoinedriveservices@free.fr
⚠️ Le fichier .env.local ne doit jamais être commité (inclus dans .gitignore).

---

## Scripts utiles

1. Lancer le projet en développement :  
```bash
npm run dev
```

2. Construire le site pour la production :  
```bash
npm run build
npm run export
```

3. Générer le sitemap et robots.txt :  
```bash
npm next-sitemap
```

---

## Sitemap et robots.txt
- Sitemap : https://www.antoine-drive-services.fr/sitemap.xml
- Robots.txt : https://www.antoine-drive-services.fr/robots.txt

--- 

## Déploiement sur OVH

Le site peut être hébergé sur un **hébergement mutualisé OVH** ou **VPS OVH** :
1. Construire le site statique :  
```bash
npm run build
npm run export
```
Le contenu sera généré dans le dossier /out.

2. Déployer les fichiers du dossier /out sur le serveur OVH via FTP ou Git.

3. Configurer le domaine pour pointer vers le dossier contenant le site exporté.
⚠️ Avec un OVH mutualisé classique, il n’y a pas Node.js côté serveur, donc les API Next.js ne fonctionneront pas. L’envoi d’e-mails doit passer par EmailJS ou un autre service externe.

---

## Configuration EmailJS

1. Créer un compte sur EmailJS
2. Créer un service email (OVH ou autre) dans EmailJS
3. Créer un template pour le formulaire de contact
4. Remplir .env.local avec les identifiants fournis par EmailJS

Exemple d'utilisation dans le formulaire :
```bash
import emailjs from '@emailjs/browser';

export default function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID,
    e.target,
    process.env.EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
      alert('Message envoyé avec succès !');
  }, (error) => {
      alert('Erreur lors de l’envoi du message : ' + error.text);
  });

  e.target.reset();
}
```

---

## Structure du projet

/pages
 index.js
 a-propos.js
 mes-services.js
 mes-tarifs.js
 me-contacter.js
/vtc
 vaire.js
 fontenay-le-comte.js
 benet.js
mentions-legales.js
politique-confidentialite.js
/components
  Layout.js
  Footer.js
  MyNavbar.js
  Seo.js
/public
  /images
    Logo.webp
/styles
  globals.css
  variables.css
next.config.js
next-sitemap.config.js
.env.local.example

---

## Notes importantes

- Site entièrement responsive et optimisé SEO.
- Nodemailer à configurer avec les informations OVH du client pour le formulaire de contact.
- Animations légères avec GSAP pour une meilleure expérience utilisateur.

--- 

© 2026 Antoine Drive Services
