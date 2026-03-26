import Head from "next/head";

export default function Seo({
  title,
  description,
  url,
  image,
  type = "website",
}) {
  const defaultTitle = "Antoine Drive Services - Transferts et trajets privés";
  const defaultDescription =
    "Antoine Drive Services propose des trajets sur-mesure : VTC, transferts aéroports, gares, événements, mariages et courses locales avec chauffeur privé.";
  const defaultUrl = "https://www.antoine-drive-services.fr/";
  const defaultImage = "https://www.antoine-drive-services.fr/Logo.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService", // type reconnu par Google
    "name": "Antoine Drive Services",
    "description": defaultDescription,
    "url": defaultUrl,
    "image": defaultImage,
    "telephone": "+33 7 43 65 27 85",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3 route de la Combe",
      "addressLocality": "Vairé",
      "postalCode": "85150",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.601,
      "longitude": -1.75
    },
    "areaServed": [
      {"@type": "City", "name": "Vairé"},
      {"@type": "City", "name": "Les Sables d'Olonne"},
      {"@type": "City", "name": "La Mothe-Achard"},
    ],
      
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services VTC",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transferts aéroports" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Courses locales" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Événements, mariages & occasions" } }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
  };

  return (
    <Head>
      {/* Balises SEO */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={url || defaultUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* JSON-LD pour SEO local et services VTC */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
