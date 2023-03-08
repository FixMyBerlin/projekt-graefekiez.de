import React from 'react'
import SocialSharingImage from './assets/social-sharing.jpg'

const seoDefaultValues = {
  defaultTitle: 'Projekt Graefekiez - Schrittweise mehr Platz',
  defaultDescription:
    'Mit dem Projekt Graefekiez erprobt der Bezirk Friedrichshain-Kreuzberg, wie Straßen der Zukunft aussehen können. Mit der Umnutzung von Parkplätzen wird Verkehrssicherheit erhöht, die Situation für Gewerbeverkehr verbessert und Zugang zu geteilten Mobilitätsangeboten geschaffen.',
  baseUrl: 'https://projekt-graefekiez.berlin',
}

type Props = {
  noindex?: boolean
  title?: string | null
  description?: string | null
  image?: string | null
  article?: boolean | null
}

export const MetaTags: React.FC<Props> = ({
  noindex = false,
  title,
  description,
  image,
  article,
}) => {
  const { defaultTitle, defaultDescription, baseUrl } = seoDefaultValues

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${baseUrl}${image || SocialSharingImage}`,
  }

  if (noindex === true) {
    return (
      <>
        <title>{seo.title}</title>
        <meta name="robots" content="noindex" />
      </>
    )
  }

  // FYI, we do not inlcude the url meta tags since is work to handle edge cases but let the browser handle this.
  // We do not have propper SocialSharing anyways, since we don't generate static content.
  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />

      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="theme-color" content="#34d399" />
    </>
  )
}
