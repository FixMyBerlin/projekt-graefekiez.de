import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '~/components/links'

const aboutItems = [
  {
    title: 'Impressum',
    href: '/impressum',
  },
  {
    title: 'Datenschutz',
    href: '/datenschutz',
  },
  // {
  //   title: 'Presse',
  //   href: '',
  // },
]
const informationItems = [
  {
    title: 'Website Bezirksamt-Kreuzberg',
    href: 'https://www.berlin.de/ba-friedrichshain-kreuzberg/',
  },
]

export const Footer: React.FC = () => {
  return (
    <div className="flex-col bg-gray-800 py-10 px-4 text-gray-300">
      <div className="grid grid-cols-2">
        <div>
          <p className="index uppercase text-gray-400">About</p>
          <ul className="mt-4 flex flex-col gap-4">
            {aboutItems.map((item) => (
              <li key={item.title}>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="index uppercase text-gray-400">Weitere Informationen</p>
          <ul className="mt-4 flex flex-col gap-4">
            {informationItems.map((item) => (
              <li key={item.title}>
                <Link newWindow to={item.href}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="index mt-20 uppercase">
        Abonnieren Sie{' '}
        <Link to="#todo" external newWindow>
          unseren Telegramkanal Projekt-Graefekiez
        </Link>{' '}
        um aktuelle Informationen zu Veranstaltungen und Ergebnissen zu erhalten.
      </div>
      <div className="mt-8 border-t border-gray-600">
        <Link to="https://twitter.com/BA_Xhain" newWindow>
          <StaticImage
            className="mt-8 h-5 w-5 opacity-50"
            src="../../images/twitterIcon.svg"
            alt="twitter"
          />
        </Link>
        <p className="mt-8 text-gray-400">© 2023 Bezirksamt Friedrichshain-Kreuzberg</p>
      </div>
    </div>
  )
}
