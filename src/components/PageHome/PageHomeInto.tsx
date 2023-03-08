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
        authorSubline="Bezirksstadträtin für Verkehr, Grünflächen, Ordnung und Umwelt"
        image={
          <StaticImage
            src="./assets/PageHomeIntro/Annika-Gerold_klein_bildnachweis-kilian-vitt.jpg"
            height={320}
            alt=""
            className="h-20 w-20 lg:h-52 lg:w-52"
          />
        }
      />

      <H1>Mit der Verkehrswende weiter gehen</H1>
      <Prose>
        <p>
          Seit den 1980er Jahren ist der Graefekiez ein verkehrsberuhigter Bereich in dem alle
          Verkehrsteilnehmer*innen gleichgestellt sind, Schrittgeschwindigkeit gefahren werden muss
          und Autos überall halten dürfen. Die gute Idee für mehr Verkehrsberuhigung von damals
          funktioniert heute nicht mehr, da die Anzahl der Autos und Lieferfahrzeuge stark
          zugenommen hat. Auch sieht die Straße nicht verkehrsberuhigt aus: Es gibt Fahrbahn,
          Gehwege und Kfz-Stellplätze. Die Verkehrsberuhigung wird von viele Nutzer*innen daher
          nicht erkannt. Das hat Folgen für die Verkehrssicherheit: Es wird zu schnell gefahren, es
          gibt Konflikte mit Lieferverkehren, die Straßen sind schlecht einsehbar. Insbesondere für
          die Schüler*innen der vier Schulen im Kiez ist das gefährlich – aber auch für alle
          anderen, die zu Fuß oder mit dem Rad unterwegs sind. Mit dem Projekt Graefekiez soll
          dieses Problem behoben werden. Ziel ist es, einen verkehrsberuhigten Bereich zu schaffen,
          der diesen Namen auch verdient. Mit den Maßnahmen setzt das Straßen- und Grünflächenamt
          einen{' '}
          <Link
            blank
            href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/bezirksverordnetenversammlung/online/vo020.asp?VOLFDNR=10383"
          >
            Beschlusses der Bezirksverordnetenversammlung (BVV)
          </Link>{' '}
          vom 29.6.2022 um. Die Maßnahmen werden begleitet von Beteiligung und Forschung durch das
          Wissenschaftszentrum Berlin, paper planes e.V. sowie deren Partner*innen.
        </p>
      </Prose>
      <H1>Platz für den Alltag der Vielen</H1>
      <Prose>
        <p>
          Nur 182 Pkw gibt es im Graefekiz je 1.000 Bewohner*innen, im Berliner Durchschnitt sind es
          335. Das heißt, ein Großteil der Anwohnenden ist heute schon mit dem öffentlichen
          Nahverkehr, dem Fahrrad oder Sharing-Angeboten in der Stadt unterwegs. Gleichzeitig steht
          der öffentliche Raum mit seinen vielen Parkplätzen nur einigen wenigen zur Verfügung, die
          teilweise tage- oder wochenlang ihre Autos hier abstellen. Täglich suchen derweil andere
          in ihrem Alltag verzweifelt nach Stellplätzen, zum Beispiel Lieferfahrzeuge oder
          Pflegedienste. Deshalb soll der Raum neu verteilt werden und zweckgebunden vergeben, z.B.
          durch Lade- und Lieferflächen oder Sharing-Stationen (sog. Jelbi-Stationen und
          Jelbi-Punkte). Ziel ist mehr Verlässlichkeit für alle: Von Anwohnerin zu Kurierdienst bis
          zur Müllabfuhr. Sie alle sollen von der veränderten Raumaufteilung profitieren. So soll
          der Alltag für alle entspannter werden.
        </p>
      </Prose>
    </section>
  )
}
