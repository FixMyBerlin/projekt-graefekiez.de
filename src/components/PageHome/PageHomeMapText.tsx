import React from 'react'
import { H1, Prose } from '../typography'

export const PageHomeMapText: React.FC = () => {
  return (
    <section className="mb-10">
      <H1>Was passiert wo?</H1>
      <Prose>
        <p>
          Hier sollte die Karte erläutert werden mit den verschiedenen Layern, detailierter können
          die Einzelnen Themen dann unten erklärt werden. Insgesamt werden XY km2 Parkflächen
          umgenutzt. Ein Teil dieser Flächen wird zu folgenden Zwecken genutzt: Lieferzonen:{' '}
        </p>
      </Prose>
    </section>
  )
}
