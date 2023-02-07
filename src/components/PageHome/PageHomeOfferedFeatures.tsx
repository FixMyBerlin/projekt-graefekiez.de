import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FeatureItem, OfferedFeatures } from '../OfferedFeatures/OfferedFeatures'
import { H1, Prose } from '../typography'

const features: FeatureItem[] = [
  {
    subTitle: 'Lieferverkehr',
    title: 'Gewerbetreibende',
    description:
      'Für Gewerbetreibende und Ihre Lieferanten haben wir Lieferzonen eingerichtet, so wird es  viel unkomplizierter und schneller mit der Anlieferung',
    image: (
      <StaticImage
        src="./assets/PageHomeOfferedFeatures/feature-placeholder-delivery.jpg"
        className=""
        alt=""
      />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
  {
    subTitle: 'Schulzone, Sicherheit',
    title: 'Kinder und Eltern',
    description: 'Schulzone, Spielstraßen.',
    image: (
      <StaticImage
        src="./assets/PageHomeOfferedFeatures/feature-placeholder-school.jpg"
        className=""
        alt=""
      />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
  {
    subTitle: null,
    title: 'Jelbi, Bus und Fahrrad',
    description: 'Jelbi stationen, ÖPNV Stationen, Fahrradverleih.',
    image: (
      <StaticImage
        src="./assets/PageHomeOfferedFeatures/feature-placeholder-map.jpg"
        className=""
        alt=""
      />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
]

export const PageHomeOfferedFeatures: React.FC = () => {
  return (
    <section id="angebote" className="scroll-mt-10">
      <H1 className="mb-2">Angebote für alle Anwohnenden</H1>
      <Prose className="leading-tight">
        <p>
          <strong className="text-yellow-600">
            damit sie weiter gut Mobil sind und die Brötchen morgens pünktlich haben wir etwas
            vorbereitet
          </strong>
        </p>
      </Prose>
      <OfferedFeatures features={features} />
    </section>
  )
}
