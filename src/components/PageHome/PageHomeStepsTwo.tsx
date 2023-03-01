import React from 'react'
import { H3, Prose } from '../typography'

export const PageHomeStepsTwo: React.FC = () => {
  return (
    <section>
      <H3>Schritt 2</H3>
      <Prose className="!prose-ul:list-disc !prose-ul:pl-4">
        <ul>
          <li>
            Entwicklung eines Freiflächenkonzepts im gesamten Graefekiez, ausgehend von Ergebnissen
            der Beteiligung im Kerngebiet und den Ergebnissen der wissenschaftlichen
            Begleitforschung.
          </li>
          <li>
            Das Freiflächenkonzept wird als Ergebnis des Projekts den politischen Gremien der BVV
            zur Entscheidung vorgelegt.
          </li>
        </ul>
      </Prose>
    </section>
  )
}
