import React from 'react'
import { ContainerTwoThirdWidth } from '../layouts/ContainerTwoThirdWidth'
import { H1, Prose } from '../typography'

export const PageHomeMapText: React.FC = () => {
  return (
    <section className="mb-10">
      <H1>So könnte es aussehen</H1>
      <ContainerTwoThirdWidth>
        <Prose>
          <p>
            Auf der interaktiven Karte sehen Sie die Ideen für die Umgestaltung der Kfz-Stellplätze.
            Die Aufteilung der Flächen im Kernbereich wird derzeit durch das Straßen- und
            Grünflächenamt finalisiert und kann sich noch geringfügig ändern. Die genaue Platzierung
            der Lade- und Lieferzonen außerhalb der Kernbereichs ist Teil der Beteiligung.
          </p>
        </Prose>
      </ContainerTwoThirdWidth>
    </section>
  )
}
