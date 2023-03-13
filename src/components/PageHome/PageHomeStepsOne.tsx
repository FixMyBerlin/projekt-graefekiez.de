import React from 'react'
import { H1, H3 } from '../typography'

export const PageHomeStepsOne: React.FC = () => {
  return (
    <section>
      <H1>Das Projekt gliedert sich in zwei Schritte</H1>
      <H3>Schritt 1</H3>
      <ul className="list-disc pl-4">
        <li>
          Im ersten Schritt werden ab Sommer 2023 im Kerngebiet Böckhstraße/ Graefestraße Parkplätze
          umgenutzt, entsiegelt und neu gestaltet – die Anwohner*innen werden bei der Umnutzung
          eingebunden.
        </li>
        <li>
          In der Böckhstraße, Graefestraße, Dieffenbachstraße und in der Grimmstraße sind Lade- und
          Lieferflächen eingerichtet, um Angebote für Wirtschaftsverkehr zu schaffen.
        </li>
        <li>
          Für Anwohner*innen werden durch Jelbi-Stationen sowie eine Nutzung des Karstadt Parkhauses
          Mobilitätsalternativen angeboten.
        </li>
        <li>
          Eine Durchfahrtssperre an der Ecke Schönleinstraße/Lachmannstraße verhindert die
          Durchfahrt von Schwerlastverkehr durch das Gebiet.
        </li>
        <p>Diese Maßnahmen werden ein Jahr lang erprobt und ihre Wirkung evaluiert.</p>
      </ul>
    </section>
  )
}
