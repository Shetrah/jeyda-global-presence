import { Helmet } from "react-helmet";

const SITE_NAME = "Jeyda";
const BASE_URL = "https://www.jeyda.co.ke";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

interface SEOProps {
  /** Page title — will be appended with site name */
  title: string;
  /** Page meta description (max ~160 chars) */
  description: string;
  /** Canonical path e.g. "/products" — base URL is prepended automatically */
  path?: string;
  /** Optional OG image override (full URL) */
  image?: string;
  /** Structured data JSON-LD object(s) */
  structuredData?: object | object[];
  /** Set to true for noindex pages (e.g. 404) */
  noIndex?: boolean;
}

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  structuredData,
  noIndex = false,
}: SEOProps) => {
  const fullTitle = `${SITE_NAME} | ${title}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
