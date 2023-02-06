import React from 'react'

const steps = [
  { title: 'Einfahren von der Hasenheide oder der Urbanstraße', description: 's. Karte' },
  { title: 'Fahrzeug abstellen und Monatsticket kaufen.', description: 's. Karte' },
  {
    title: 'Von Ihrer Wohnung zum Parkhaus kommen sie am schnellsten mit dem Fahrrad',
    description: 's. Karte',
  },
]

export const PageHomeCar: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Wo kann ich mein Auto parken?</h2>
      <div className="prose">
        <p>
          Wir wissen, dass diese Veränderung für Menschen die ihr Auto regelmäßig nutzen eine große
          Veränderung in ihrem Alltag bedeutet, deswegen wollen wir es Ihnen so einfach wie möglich
          machen.
        </p>
        <p>
          Ihr Auto können Sie am einfachsten im Karstadt-Parkhaus abstellen, das geht sehr einfach.
          Für die Mobiltät ohne Auto probieren Sie die neuen Jelbi-Stationen oder den ÖPNV aus, mehr
          dazu finden Sie weiter unten. Für Menschen mit körperlichen Einschränkungen gibt es
          speziell ausgewiesene Parkplätze.
        </p>
        <p>
          <strong>Karstadt Parkhaus nutzen, so gehts</strong>
        </p>
      </div>

      <ol className="mt-6 grid grid-cols-3 gap-3">
        {steps.map((step, index) => {
          return (
            <li key={step.title} className="prose flex gap-3 border bg-white">
              <div className="flex h-10 w-10 flex-none items-center justify-center bg-gray-400 text-white">
                {index}
              </div>
              <p className="my-2 leading-tight">
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
