import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '../links'
import { Quote } from '../Quote/Quote'

export const PageHomeInto: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">
        Autofrei im Kiez Mobil - Ein Verkehrsversuch
      </h2>
      <div className="prose">
        <p>
          Einleitung: ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus
        </p>
      </div>

      <Quote
        quote="Gutes Leben ohne eigenes Auto, geht das? Ich glaube ja. In 6 Monaten wollen wir es gemeinsam mit Ihnen herausfinden."
        author="Annika Gerold"
        authorSubline="Bezirksstadträtin von Friedrichshain-Kreuzberg"
        image={
          <StaticImage
            src="./assets/PageHomeIntro/annika-gerold-bildnachweis-kilian-vitt.jpg"
            height={320}
            alt=""
            className="h-12 w-12 lg:h-64 lg:w-64 xl:h-80 xl:w-80"
          />
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>
            <em>Ich habe ein Auto, wohin?</em>
          </p>
          <Link button to="#foo">
            Wo kann ich mein Auto parken?
          </Link>
        </div>
        <div>
          <p>
            <em>Ich habe Ideen zu den freien Flächen:</em>
          </p>
          <Link button to="#bar">
            Wie kann ich mich einbringen?
          </Link>
        </div>
      </div>
    </section>
  )
}
