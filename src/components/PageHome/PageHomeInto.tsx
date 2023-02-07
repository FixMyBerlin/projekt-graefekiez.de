import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '../links'
import { Quote } from '../Quote/Quote'
import { H1, Prose } from '../typography'

export const PageHomeInto: React.FC = () => {
  return (
    <section>
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

      <Quote
        quote="Gutes Leben ohne eigenes Auto, geht das? Ich glaube ja. In 6 Monaten wollen wir es gemeinsam mit Ihnen herausfinden."
        author="Annika Gerold"
        authorSubline="Bezirksstadträtin von Friedrichshain-Kreuzberg"
        image={
          <StaticImage
            src="./assets/PageHomeIntro/annika-gerold-bildnachweis-kilian-vitt.jpg"
            height={320}
            alt=""
            className="h-12 w-12 lg:h-44 lg:w-44 xl:h-52 xl:w-52"
          />
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-2 text-gray-600">
            <strong>Ich habe ein Auto, wohin?</strong>
          </p>
          <Link button to="#parken">
            Wo kann ich mein Auto parken?
          </Link>
        </div>
        <div>
          <p className="mb-2 text-gray-600">
            <strong>Ich habe Ideen zu den freien Flächen:</strong>
          </p>
          <Link button to="#ideen">
            Wie kann ich mich einbringen?
          </Link>
        </div>
      </div>
    </section>
  )
}
