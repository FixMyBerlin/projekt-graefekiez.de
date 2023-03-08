import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card, CardProps } from '../Card/Card'
import { ContainerTwoThirdWidth } from '../layouts/ContainerTwoThirdWidth'
import { H1, H3, Prose } from '../typography'

const cards: CardProps[] = [
  {
    title: 'paper planes e.V.',
    description:
      'Die Kreuzberger „Denkfabrik für ein besseres Leben zwischen den Häusern“ setzt die Beteiligung um und wird die Anwohner*innen dabei unterstützen, ihre Ideen auf die Straße zu bringen.',
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
    title: 'Projekt Zukunft Straße (Berlin 21 e.V.  und NaturFreunde Berlin e.V.)',
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
            Wie wird eine Straße mit weniger Parkplätzen zu einem lebenswerten Stadtraum? Welchen
            Beitrag können und wollen Anwohnende, Kitas, Schulen, lokale Gewerbetreibende und
            Nachbarschaftsinitiativen leisten? Um diese Fragen zu beantworten und darauf aufbauend
            Prinzipien für das zukünftige Freiraumkonzept des gesamten Graefekiez zu erarbeiten,
            werden über den Sommer und Herbst 2023 neue Nutzungsmöglichkeiten im Kerngebiet (Teile
            der Böckh- und Graefestraße) partizipativ erprobt. Alle Bewohnerinnen und alltäglichen
            Nutzer des Graefekiezes sind dazu eingeladen, ihre Ideen für den öffentlichen Raum und
            die Umnutzung der Kfz-Parkplätze einzubringen und bestenfalls auch die Verantwortung für
            die Betreuung einzelner Flächen zu übernehmen. Information, Inspiration und
            Hilfestellung erhalten alle Aktiven dabei von der gemeinnützigen Denkfabrik paper planes
            e.V. – der Verein schafft eine Vor-Ort-Präsenz mit regelmäßigen Sprechstunden, verknüpft
            gleichgesinnte Engagierte und ist erster Ansprechpartner für Nachfragen.
          </p>
          <p>
            Weitere Beiträge zur temporären Umgestaltung der Straßen im Kerngebiet mit
            Beteiligungselementen leistet das Projekt Zukunft Straße und das Projektteam von
            CompAIR. Zudem wird die Beteiligung von vielfältigen Forschungsaktivitäten durch das
            Wissenschaftszentrum Berlin für Sozialforschung (WZB) begleitet.
          </p>
        </Prose>
        <H3>Schon mal vormerken:</H3>

        <div className="flex justify-start gap-4">
          <p>
            Am Wochenende um den 22. April 2023 wird die Auftaktveranstaltung zur Beteiligung
            stattfinden. Weitere Infos folgen. Alle Interessierte können auf der paper planes e.V.
            Website einen Newsletter zu den Beteiligungsformaten im Projekt Graefekiez abonnieren.
          </p>
        </div>
      </ContainerTwoThirdWidth>

      <p className="mt-10">
        <H3>Beteiligung vor Ort</H3>
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
