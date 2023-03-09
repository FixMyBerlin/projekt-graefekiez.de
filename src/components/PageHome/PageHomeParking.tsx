import React from 'react'
import { ContainerTwoThirdWidth } from '../layouts/ContainerTwoThirdWidth'
import { Link } from '../links'
import { H1, Prose } from '../typography'

export const PageHomeParking: React.FC = () => {
  return (
    <section id="parken" className="scroll-mt-10">
      <H1>Angebote für Gewerbe und Anwohnende</H1>
      <ContainerTwoThirdWidth>
        <Prose>
          <p>So wird der Alltag für alle entspannter.</p>
          <p className="bg-white p-4">
            <strong>Parkhaus</strong>
            <br />
            In unmittelbarer Nähe zum Projektgebiet befindet sich das Parkhaus am Hermannplatz mit
            Dauerparkplätzen. Diese können gegen Gebühr genutzt werden.{' '}
            <Link
              blank
              href="https://galeria-parken.de/parkhaus/9bae5f5d-8c1a-4ff2-b09b-127fb9da93bb"
            >
              Hier geht es zur Seite des Parkhauses
            </Link>{' '}
            (externer Link).
          </p>
          <p className="bg-white p-4">
            <strong>Lade- und Lieferflächen</strong>
            <br />
            Im Graefekiez werden mehrere Lade- und Lieferflächen eingerichtet. Diese sind nur für
            das Be- und Entladen von Fahrzeugen gedacht. Parken ist hier nicht gestattet. Dadurch
            wird die Belieferung einfacher und der Alltag für Gewerbetreibende und Lieferdienste
            entspannter. Lieferfahrzeuge müssen nicht mehr in der zweiten Reihe halten und
            gefährliche Situationen für den Fußverkehr werden entschärft.
          </p>
          <p className="bg-white p-4">
            <strong>Flächendeckendes Netz von Jelbi-Stationen und Jelbi-Punkten</strong>
            <br />
            Die Berliner Verkehrsbetriebe (BVG) richten Jelbi-Stationen und Jelbi-Punkte mit
            Sharing-Angeboten im Graefekiez ein. Hier lassen sich schnell, komfortabel und auf
            kurzem Weg Roller, Räder, Scooter, Lastenräder oder Autos leihen. An den U-Bahnhöfen
            Schönleinstraße und Südstern kann von Jelbi auf den öffentlichen Nahverkehr umgestiegen
            werden. Für die Nutzung von Jelbi muss die{' '}
            <Link blank href="https://www.jelbi.de/">
              Jelbi-App
            </Link>{' '}
            (externer Link) installiert werden.
          </p>
          <p className="bg-white p-4">
            <strong>Behindertenstellplätze</strong>
            <br />
            Die bestehenden Stellplätze bleiben erhalten.
          </p>
        </Prose>
      </ContainerTwoThirdWidth>
    </section>
  )
}
