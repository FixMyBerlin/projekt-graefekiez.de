import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card, CardProps } from '../Card/Card'
import { ContainerTwoThirdWidth } from '../layouts/ContainerTwoThirdWidth'
import { H1, H3, Prose } from '../typography'

const cards: CardProps[] = [
  {
    title: 'Zukunft Straße (Berlin 21 und NaturFreunde)',
    description:
      'Grün und sicher! Gemeinsam gestalten wir Parkraum für mehr Verkehrssicherheit und Aufenthaltsqualität.',
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/image-zukunft.jpg"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'paper planes e.V.',
    description:
      'Die Kreuzberger „Denkfabrik für ein besseres Leben zwischen den Häusern“ wird die Anwohner*innen dabei unterstützen, ihre Ideen auf die Straßen zu bringen.',
    link: { title: 'Mehr über paper planes e.V.', href: 'https://www.paper-planes.net/' },
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/image-paper.jpg"
        alt=""
        className="h-48 w-full object-cover"
        height={192}
      />
    ),
  },
  {
    title: 'CompAIR (inter 3)',
    description:
      'Anwohner*innen des Graefekiezes werden zu Bürgerwissenschaftler*innen: Im EU Projekt ComPAIR messen wir gemeinsam die Luftqualität und den Verkehr für eine bessere Berlin Luft!',
    link: {
      title: 'Mehr über CompAIR',
      href: 'https://www.inter3.de/forschungsfelder/projekte/details/compair-citizen-science-fuer-bessere-luft',
    },
    image: (
      <StaticImage
        src="./assets/PageHomeLanduse/image-compair.jpg"
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
      <H1 className="mt-10 mb-8 text-3xl sm:text-4xl">Gemeinsam ausprobieren, wie’s gut geht</H1>
      <ContainerTwoThirdWidth>
        <Prose>
          <p>
            Mit der temporären Umnutzung von Parkplätzen werden im öffentlichen Raum neue
            Nutzungsmöglichkeiten erprobt. Mit verschiedenen Aktionen und Angeboten wird der neu
            gewonnene Raum gestaltet und genutzt. Für die kommenden Monate sind vor Ort viele
            Termine vorgesehen, bei denen Interessierte sich informieren und beteiligen können. Wie
            eine autoreduzierte Straße zu einem sicheren und lebenswerten Raum wird, zeigen
            Anwohnende, Kitas, Schulen, lokale Gewerbetreibende und Nachbarschaftsinitiativen
            gemeinsam. Es gibt Möglichkeiten, die eigene Meinung einzubringen aber auch sich konkret
            an der Umgestaltung zu beteiligen, zum Beispiel durch Bauworkshops oder Pflanzaktionen.
          </p>
          <p>
            Aufbauend auf den Ergebnissen werden Ideen und Prinzipien entwickelt, die auf den
            gesamten Graefekiez übertragen werden können. Alle die wollen können so zum Beispiel das
            zukunftsfähige Straßenbild ihres Kiezes mitgestalten.
          </p>
          <p>
            Paper planes e.V., Zukunft Straße und das Projektteam von CompAIR werden vor Ort
            aktivieren, unterstützen und den Prozess begleiten. Unterschiedliche Formate und
            Workshops reichen den Akteur*innen Ideen, Know-How und Material zur gemeinsamen
            Umwandlung der Straße. Aktionswochen und Veranstaltungen werden das neue Straßenbild
            über den gesamten Projektzeitraum beleben.
          </p>
        </Prose>
      </ContainerTwoThirdWidth>

      <p className="mt-10">
        <H3>Unterstützung vor Ort</H3>
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
              link={card.link}
            />
          )
        })}
      </ol>
    </section>
  )
}
