import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { H3 } from '../typography'
import XhainLogo from '../../images/logos/Logo-BA-Xhain.inline.svg'

const parnters = [
  {
    name: 'XHain',
    image: (
      <div className="flex h-full w-full items-center justify-center">
        <XhainLogo width={80} height={80} />
      </div>
    ),
  },

  {
    name: 'Senat',
    image: <StaticImage src="../../images/logos/grafik-senat.jpg" alt="" height={192} />,
  },
  {
    name: 'Berlin21',
    image: <StaticImage src="../../images/logos/grafik-b21.jpg" alt="" height={192} />,
  },
  {
    name: 'Naturfreunde',
    image: <StaticImage src="../../images/logos/grafik-nfr.jpg" alt="" height={192} />,
  },
  {
    name: 'Paperplanes',
    image: <StaticImage src="../../images/logos/grafik-pp.jpg" alt="" height={192} />,
  },
]
const financePartners = [
  {
    name: 'Mercator',
    image: <StaticImage src="../../images/logos/mercator.jpg" alt="" height={192} />,
  },
  {
    name: 'DBU',
    image: <StaticImage src="../../images/logos/grafik-dbu.jpg" alt="" height={192} />,
  },
  {
    name: 'CCC',
    image: <StaticImage src="../../images/logos/grafik-CCC.jpg" alt="" height={192} />,
  },
]

export const PageHomePartner: React.FC = () => {
  return (
    <section>
      <H3>Projektpartner</H3>

      <ul className="mt-12 grid grid-cols-3 gap-12 md:grid-cols-6 lg:gap-14">
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
      <div className="mt-10">
        <H3>Finanzierungspartner für Forschung und Beteiligung</H3>

        <ul className="mt-12 grid grid-cols-3 gap-12 md:grid-cols-6 lg:gap-14">
          {financePartners.map((partner, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                {partner.image}
                <span className="sr-only">{partner.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
