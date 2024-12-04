/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: ['*/_meta']  // 见 https://nextra.site/docs/guide/organize-files#usage-with-next-sitemap
}
