import { BoltIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Timeline } from '../Timeline/Timeline'

const iconClasses =
  'flex h-10 w-10 p-2 items-center justify-center rounded-full bg-yellow-400 ring-8 ring-white'

const activities = [
  {
    icon: <LightBulbIcon className={iconClasses} />,
    title: 'Erste Idee',
    date: '1989',
    description:
      'In den Straßen von Friedrichshain-Kreuzberg unterwegs zu sein ist oft mit sehr viel Stress verbunden. Das liegt nicht zuletzt daran, daß der Autoverkehr in den vergangenen Jahren extrem zugenommen hat. Als Bezirk (?) wollen wir für die Entspannung dieser Situation sorgen – speziell in den Wohnvierteln.Das liegt nicht zuletzt daran, daß der Autoverkehr in den vergangenen Jahren extrem zugenommen hat. Als Bezirk (?) wollen wir für die Entspannung dieser Situation sorgen – speziell in den Wohnvierteln.',
  },
  {
    icon: <BoltIcon className={iconClasses} />,
    title: 'Es geht weiter',
    date: '2013',
    description:
      'Die frei werdenden Flächen können für alles mögliche genutzt werden... Ab dem xy kannst du deine Ideen einreichen. Fülle dafür das Formular aus.',
  },
]

export const PageForschungTimeline: React.FC = () => {
  return (
    <section>
      <h2 className="sr-only">Zeitleiste</h2>
      <Timeline activities={activities} />
    </section>
  )
}
