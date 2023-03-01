import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '../links'
import { Quote } from '../Quote/Quote'
import { H1, Prose } from '../typography'

export const PageHomeInto: React.FC = () => {
  return (
    <section>
      <Quote
        quote="Öffentlicher Raum ist knapp – und sehr viel davon ist mit parkenden Autos belegt. Mit dem Projekt Graefekiez erproben wir gemeinsam mit der Nachbarschaft, wie Straßen der Zukunft aussehen können. Wir erhöhen die Verkehrssicherheit, verbessern die Situation für Gewerbe und Lieferdienste und schaffen Zugang zu geteilten Mobilitätsangeboten. So geht öffentlicher Raum für alle und mit allen."
        author="Annika Gerold"
        authorSubline="Bezirksstadträtin von Friedrichshain-Kreuzberg"
        image={
          <StaticImage
            src="./assets/PageHomeIntro/annika-gerold-bildnachweis-kilian-vitt.jpg"
            height={320}
            alt=""
            className="h-12 w-12 lg:h-52 lg:w-52"
          />
        }
      />

      <H1>Autofrei im Kiez Mobil - Ein Verkehrsversuch</H1>
      <Prose>
        <p>
          Einleitung: ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus
        </p>
      </Prose>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-2 text-gray-600">
            <strong>Ich habe ein Auto, wohin?</strong>
          </p>
          <Link button href="#parken">
            Wo kann ich mein Auto parken?
          </Link>
        </div>
        <div>
          <p className="mb-2 text-gray-600">
            <strong>Ich habe Ideen zu den freien Flächen:</strong>
          </p>
          <Link button href="#ideen">
            Wie kann ich mich einbringen?
          </Link>
        </div>
      </div>
    </section>
  )
}
