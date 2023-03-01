import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { H3 } from '../typography'

const parnters = [
  {
    name: 'XHain',
    image: <StaticImage src="../../images/logos/logo-bezirksamt.png" alt="" height={192} />,
  },
  {
    name: 'WZB',
    image: (
      <StaticImage
        src="../../images/logos/WZB_logo_quareise_quer_transparent.png"
        alt=""
        height={192}
      />
    ),
  },
  {
    name: 'Senat',
    image: <StaticImage src="../../images/logos/Logo-Senat.jpg" alt="" height={192} />,
  },
  {
    name: 'Berlin21',
    image: <StaticImage src="../../images/logos/Logo-Berlin21.jpg" alt="" height={192} />,
  },
  {
    name: 'Naturfreunde',
    image: <StaticImage src="../../images/logos/Logo-Naturfreunde.jpg" alt="" height={192} />,
  },
  {
    name: 'Paperplanes',
    image: <StaticImage src="../../images/logos/Logo-paperplanes.jpg" alt="" height={192} />,
  },
  {
    name: 'Mercator',
    image: <StaticImage src="../../images/logos/Logo-Stiftung-Mercator.jpg" alt="" height={192} />,
  },
  {
    name: 'DBU',
    image: <StaticImage src="../../images/logos/Logo-DBU.jpg" alt="" height={192} />,
  },
  {
    name: 'CCC',
    image: <StaticImage src="../../images/logos/Logo-CCC-Foerderung.jpg" alt="" height={192} />,
  },
]

export const PageHomePartner: React.FC = () => {
  return (
    <section>
      <H3 className="mb-8 text-3xl sm:text-4xl">Projektpartner</H3>

      <ul className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-6 lg:gap-6">
        {parnters.map((partner, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              {partner.image}
              <span className="sr-only">{partner.name}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
