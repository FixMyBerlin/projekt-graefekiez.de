import React from 'react'
import { Link, linkStyles } from '~/components/links'
import TwitterIcon from '../../../images/twitterIcon.inline.svg'
import { Container } from '../Container'

const aboutItems = [
  {
    title: 'Impressum',
    href: '/impressum',
  },
  {
    title: 'Datenschutz',
    href: '/datenschutz',
  },
]
const informationItems = [
  {
    title: 'Website Bezirksamt-Kreuzberg',
    href: 'https://www.berlin.de/ba-friedrichshain-kreuzberg/',
  },
]

export const Footer: React.FC = () => {
  return (
    <div className="mt-40 flex-col bg-gray-800 py-10 px-4 text-gray-300">
      <Container>
        <div className="flex gap-8 lg:gap-36">
          <div>
            <p className="index uppercase text-gray-400">About</p>
            <ul className="mt-4 flex flex-col gap-4">
              {aboutItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
              <a
                target="_blank"
                className={linkStyles}
                href="https://www.berlin.de/ba-friedrichshain-kreuzberg/aktuelles/pressemitteilungen/"
                rel="noreferrer"
              >
                Presse
              </a>
            </ul>
          </div>
          <div>
            <p className="index uppercase text-gray-400">Weitere Informationen</p>
            <ul className="mt-4 flex flex-col gap-4">
              {informationItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-8">
          <Link href="https://twitter.com/BA_Xhain">
            <TwitterIcon width={20} />
          </Link>
          <p className="mt-8 text-gray-400">© 2023 Bezirksamt Friedrichshain-Kreuzberg</p>
        </div>
      </Container>
    </div>
  )
}
