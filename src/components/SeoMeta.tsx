import { Helmet } from 'react-helmet-async'

type SeoMetaProps = {
  title: string
  description: string
  path: string
  keywords?: string
  jsonLd?: Record<string, unknown>
}

const SITE_URL = 'https://www.regulus.com.tr'
const OG_IMAGE = `${SITE_URL}/favicon.svg`

function SeoMeta({ title, description, path, keywords, jsonLd }: SeoMetaProps) {
  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Regulus Temizlik - Insaat" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="tr_TR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

export default SeoMeta
