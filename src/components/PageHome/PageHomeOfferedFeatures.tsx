import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FeatureItem, OfferedFeatures } from '../OfferedFeatures/OfferedFeatures'
import { H1, Prose } from '../typography'

const features: FeatureItem[] = [
  {
    name: 'Reporting',
    summary: 'Stay on top of things with always up-to-date reporting features.',
    description:
      'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
    image: (
      <StaticImage src="./assets/PageHomeOfferedFeatures/placeholder.png" className="" alt="" />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
  {
    name: 'Inventory',
    summary: 'Never lose track of what’s in stock with accurate inventory tracking.',
    description:
      'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
    image: (
      <StaticImage src="./assets/PageHomeOfferedFeatures/placeholder.png" className="" alt="" />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
  {
    name: 'Contacts',
    summary: 'Organize all of your contacts, service providers, and invoices in one place.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
    image: (
      <StaticImage src="./assets/PageHomeOfferedFeatures/placeholder.png" className="" alt="" />
    ),
    icon: <ShoppingCartIcon className="" />,
  },
]

export const PageHomeOfferedFeatures: React.FC = () => {
  return (
    <section>
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
