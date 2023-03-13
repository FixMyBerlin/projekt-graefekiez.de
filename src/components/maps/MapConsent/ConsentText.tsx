import React from 'react'
import { Link } from '~/components/links'

export const ConsentText: React.FC = () => {
  return (
    <div className="prose">
      <p>
        Zur Nutzung der Kartenfunktion stimme bitte den{' '}
        <Link blank href="https://www.mapbox.com/legal/privacy">
          Datenschutzbestimmungen von Mapbox
        </Link>{' '}
        zu. Mapbox speichert nur kurzfristig notwendige Daten zu deiner IP-Adresse. Du kannst Deine
        Zustimmung auf <Link href="/datenschutz">unserer Datenschutz-Seite</Link> zurückziehen.
      </p>
    </div>
  )
}
