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
    "Antoine Drive Services propose des trajets sur-mesure : VTC, transferts aéroports, gares, événements et courses locales avec chauffeur privé.";
  const defaultUrl = "https://www.antoinedrive.fr/";
  const defaultImage = "https://www.antoinedrive.fr/images/preview.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService", // type reconnu par Google
    "name": "Antoine Drive Services",
    "description": defaultDescription,
    "url": defaultUrl,
    "image": defaultImage,
    "telephone": "+33 6 12 34 56 78",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Rue Exemple",
      "addressLocality": "Saint Christoly de Blaye",
      "postalCode": "33920",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Gironde"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services VTC",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transferts aéroports" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Courses locales & longues distances" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Événements & occasions" } }
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
    "sameAs": [
      "https://www.facebook.com/AntoineDriveServices",
      "https://www.instagram.com/AntoineDriveServices",
      "https://www.linkedin.com/company/AntoineDriveServices"
    ]
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
