import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card, CardProps } from '../Card/Card'
import { Link } from '../links'

const cards: CardProps[] = [
  {
    title: 'Future Garden',
    description:
      'Durch Einführung der Superblocks stieg die Aufenthaltsqualität und Unfälle wurden um 25 % reduziert.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/placeholder.png"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'Future Garden',
    description:
      'Durch Einführung der Superblocks stieg die Aufenthaltsqualität und Unfälle wurden um 25 % reduziert.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/placeholder.png"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'Future Garden',
    description:
      'Durch Einführung der Superblocks stieg die Aufenthaltsqualität und Unfälle wurden um 25 % reduziert.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/placeholder.png"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
]

export const PageHomeLanduse: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Sie haben eine Idee zur Flächennutzung?</h2>
      <div className="prose">
        <p>
          Die frei werdenden Flächen können für alles mögliche genutzt werden... Ab dem xy kannst du
          deine Ideen einreichen. Fülle dafür das Formular aus.
        </p>
        <p>
          <Link external newWindow to="#foo">
            Idee einreichen – zum Formular
          </Link>
        </p>
        <p>
          <strong>Beispiele für Flächennutzung</strong>
        </p>
      </div>

      <ol className="mt-6 grid grid-cols-3 gap-3">
        {cards.map((card, index) => {
          return (
            <Card
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          )
        })}
      </ol>
    </section>
  )
}
