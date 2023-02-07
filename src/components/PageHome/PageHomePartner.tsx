import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const parnters = [
  {
    name: 'Future Garden',
    image: <StaticImage src="../../images/logos/logo-bezirksamt.png" alt="" height={192} />,
  },
  {
    name: 'Future Garden',
    image: <StaticImage src="../../images/logos/logo-wzb.png" alt="" height={192} />,
  },
]

export const PageHomePartner: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Projektpartner</h2>

      <ul className="mt-6 grid grid-cols-3 gap-3">
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
