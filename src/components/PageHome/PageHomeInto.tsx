import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Quote } from '../Quote/Quote'
import { H1, Prose } from '../typography'

export const PageHomeInto: React.FC = () => {
  return (
    <section>
      <Quote
        quote="Öffentlicher Raum ist knapp – und sehr viel davon ist mit parkenden Autos belegt. Mit dem Projekt Graefekiez erproben wir gemeinsam mit der Nachbarschaft, wie Straßen der Zukunft aussehen können. Wir erhöhen die Verkehrssicherheit, verbessern die Situation für Gewerbe und Lieferdienste und schaffen Zugang zu geteilten Mobilitätsangeboten. So geht öffentlicher Raum für alle und mit allen."
        author="Annika Gerold"
        authorSubline="Annika Gerold
Bezirksstadträtin für Verkehr, Grünflächen, Ordnung und Umwelt"
        image={
          <StaticImage
            src="./assets/PageHomeIntro/annika-gerold-bildnachweis-kilian-vitt.jpg"
            height={320}
            alt=""
            className="h-12 w-12 lg:h-52 lg:w-52"
          />
        }
      />

      <H1>Mit der Verkehrswende weiter gehen</H1>
      <Prose>
        <p>
          Seit den 1980er Jahren ist der Graefekiez ein verkehrsberuhigter Bereich. Was damals eine
          gute Idee für mehr Verkehrsberuhigung war, funktioniert heute nicht mehr. Denn die Anzahl
          der Autos in der Stadt hat in den letzten vierzig Jahren stark zugenommen. Dadurch kommt
          es zu immer mehr Problemen. Im verkehrsberuhigten Bereich sind rechtlich alle
          Verkehrsteilnehmer*innen gleichgestellt. Es muss Schrittgeschwindigkeit gefahren werden
          und Autos dürfen überall halten. Doch die Straße sieht ganz anders aus: Es gibt weiterhin
          Fahrbahn, Gehwege und Kfz-Stellplätze wie in einer normalen Nebenstraße. Das ist ein
          echtes „gebautes Missverständnis“ – mit Folgen für die Verkehrssicherheit: Es wird zu
          schnell gefahren, es gibt Konflikte mit Lieferverkehren, die Straße ist schlecht
          einsehbar. Insbesondere für die Schüler*innen der vier Schulen im Kiez ist das gefährlich
          – aber auch für alle anderen, die zu Fuß oder mit dem Rad unterwegs sind. Mit dem Projekt
          Graefekiez soll dieses Problem testweise behoben werden. Ziel ist es, einen
          verkehrsberuhigten Bereich zu schaffen, der diesen Namen auch verdient. Das Projekt setzt
          einen Beschluss der Bezirksverordnetenversammlung (BVV) vom 29.6.2022 um.
        </p>
      </Prose>
      <H1>Platz für den Alltag der Vielen</H1>
      <Prose>
        <p>
          Mit sinnvollen Einzelschritten wird der Alltag aller Menschen, die im Graefekiez leben,
          arbeiten oder ihre Freizeit verbringen, entspannter. Derzeit stehen die Parkplätze nur
          einigen wenigen zur Verfügung, die teilweise tagelang ihre Autos darauf abstellen. Täglich
          suchen derweil andere in ihrem Alltag verzweifelt nach Stellplätzen: Lieferfahrzeuge,
          Pflegedienste, Mobilitätseingeschränkte. Die Umnutzung der Plätze soll dazu führen, dass
          der Alltag für viele Menschen entspannter und sicherer wird. Der Raum wird neu verteilt
          und zweckgebunden, z.B. durch Lade- und Lieferflächen oder Sharing-Stationen. Diese können
          durch viele Menschen täglich benutzt werden statt nur durch ein abgestelltes Fahrzeug.
          Dies schafft Verlässlichkeit für alle: Von Anwohnerin zu Kurierdienst bis zur Müllabfuhr.
          Die meisten Menschen haben im Vergleich zum Berliner Durchschnitt kein Auto. Nur 182 von
          1.000 Bewohner*innen im Graefekiez haben einen Pkw, im Berliner Durchschnitt sind es 335
          Pkw. Sie alle profitieren von der veränderten Raumaufteilung. Das Projekt Graefekiez macht
          Angebote für eine moderne Mobilität, wie sie bereits heute gelebt wird. Immer mehr
          Menschen steigen auf Sharing-Fahrzeuge um. Im Graefekiez werden erstmals engmaschig
          Stationen für den Zugang geschaffen (sog. Jelbi-Stationen und Jelbi-Punkte). Zudem kann
          das Parkhaus am Hermannplatz zu einem verlässlichen Tarif genutzt werden, um das eigene
          Auto sicher abzustellen. Für die vorhandenen Gewerbetreibenden sowie die seit Jahren
          zunehmenden Lieferverkehre werden in großer Anzahl Lade- und Lieferflächen geschaffen. So
          wird der stressige Alltag für alle ein wenig entspannter.
        </p>
        <p>
          Die größte Umgestaltung geschieht 2023 im sogenannten „Kerngebiet“. Dieses befindet sich
          in der Böckhstraße und in der Graefestraße und damit im direkten Umfeld der
          Lemgo-Grundschule. Hier werden alle Kfz-Parkplätze umgenutzt. Zusätzlich werden
          Gehwegvorstreckungen gebaut, Baumscheiben erweitert und Flächen entsiegelt. In
          Beteiligungsveranstaltungen werden Parklets gebaut und diskutiert, wie die freien
          Parkplätze durch die Anlieger*innen genutzt werden können.
        </p>
      </Prose>
    </section>
  )
}
