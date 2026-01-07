/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.antoine-drive-services.fr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  transform: async (config, url) => {
    let priority = 0.7; 

    if (url === 'https://www.antoine-drive-services.fr/') {
      priority = 1.0;
    } else if (url.includes('/a-propos') || url.includes('/mes-services')) {
      priority = 0.9;
    } else if (url.includes('/mes-tarifs') || url.includes('/me-contacter')) {
      priority = 0.8;
    } else if (url.includes('/vtc/')) {
      priority = 0.7;
    } else if (url.includes('/mentions-legales') || url.includes('/politique-confidentialite')) {
      priority = 0.5;
    }

    return {
      loc: url,
      changefreq: 'weekly',
      priority: priority,
    };
  },
};
