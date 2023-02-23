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
        src="./assets/PageHomeLanduse/placeholder-city.jpg"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'Komposthaufen',
    description:
      'Durch Einführung der Superblocks stieg die Aufenthaltsqualität und Unfälle wurden um 25 % reduziert.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/placeholder-nature.jpg"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'Tischtennis platte',
    description:
      'Durch Einführung der Superblocks stieg die Aufenthaltsqualität und Unfälle wurden um 25 % reduziert.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/placeholder-table-tennis.jpg"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
]

export const PageHomeLanduse: React.FC = () => {
  return (
    <section id="ideen" className="scroll-mt-10">
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Sie haben eine Idee zur Flächennutzung?</h2>
      <div className="prose">
        <p>
          Die frei werdenden Flächen können für alles mögliche genutzt werden... Ab dem xy kannst du
          deine Ideen einreichen. Fülle dafür das Formular aus.
        </p>
        <p>
          <Link button href="#foo">
            Idee einreichen – zum Formular
          </Link>
        </p>
      </div>

      <p className="mt-10">
        <strong>Beispiele für Flächennutzung</strong>
      </p>
      <ol className="mt-6 grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:gap-12">
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
