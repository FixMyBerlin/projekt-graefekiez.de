import React from 'react'
import { H1, Prose } from '../typography'

const steps = [
  { title: 'Einfahren von der Hasenheide oder der Urbanstraße', description: 's. Karte' },
  { title: 'Fahrzeug abstellen und Monatsticket kaufen.', description: 'Kosten: 60 €' },
  {
    title: 'Von Ihrer Wohnung zum Parkhaus kommen sie am schnellsten mit dem Fahrrad',
    description: 'Fahrradparkplätze im Erdgeschoss des Parkhauses',
  },
]

export const PageHomeParking: React.FC = () => {
  return (
    <section id="parken" className="scroll-mt-10">
      <H1>Wo kann ich mein Auto parken?</H1>
      <Prose>
        <p>
          <strong className="text-yellow-600">
            Wir wissen, dass diese Veränderung für Menschen die ihr Auto regelmäßig nutzen eine
            große Veränderung in ihrem Alltag bedeutet, deswegen wollen wir es Ihnen so einfach wie
            möglich machen.
          </strong>
        </p>
        <p>
          Ihr Auto können Sie am einfachsten im Karstadt-Parkhaus abstellen, das geht sehr einfach.
          Für die Mobiltät ohne Auto probieren Sie die neuen Jelbi-Stationen oder den ÖPNV aus, mehr
          dazu finden Sie weiter unten. Für Menschen mit körperlichen Einschränkungen gibt es
          speziell ausgewiesene Parkplätze.
        </p>
      </Prose>

      <p className="mt-10">
        <strong>Karstadt Parkhaus nutzen, so gehts</strong>
      </p>
      <ol className="mt-3 grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => {
          return (
            <li key={step.title} className="prose flex gap-3 border bg-white">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-blue-600 text-3xl font-bold text-white">
                {index}
              </div>
              <div className="my-2 pr-3 leading-tight">
                <div>
                  <strong>{step.title}</strong>
                </div>
                <div className="my-2">{step.description}</div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
