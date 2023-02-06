import React from 'react'
import { Link } from '../links'

export const PageHomeMapText: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Was passiert wo?</h2>
      <div className="prose">
        <p>
          Hier sollte die Karte erläutert werden mit den verschiedenen Layern, detailierter können
          die Einzelnen Themen dann unten erklärt werden.
        </p>
        <p>
          Insgesamt werden XY km2 Parkflächen umgenutzt. Ein Teil dieser Flächen wird zu folgenden
          Zwecken genutzt: Lieferzonen:{' '}
        </p>
        <p>
          Für die Belieferung der Geschäfte... Jelbi Stationen : Für Mobilität ohne eignes Auto ...
          Parkmöglichkeiten für Menschen mit besonderen Bedarfen... Schulzone und
          Fußgänger*innenzone... Ein Teil der Flächen ist noch nicht genutzt, Sie können uns dafür
          Vorschläge machen...
        </p>
        <Link button to="#foo">
          Details zu den Nutzungen
        </Link>
        <Link button to="#foo2">
          Beteiligung zu freien Flächen
        </Link>
      </div>
    </section>
  )
}
