import React from 'react'
import { ContainerTwoThirdWidth } from '../layouts/ContainerTwoThirdWidth'
import { linkStyles } from '../links'
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
            Dauerparkplätzen. Diese können gegen Gebühr genutzt werden.
          </p>
          <p className="bg-white p-4">
            <strong>Lade- und Lieferflächen</strong>
            <br />
            Im Graefekiez werden in der Böckhstraße und Graefestraße mehrere Lade- und Lieferflächen
            eingerichtet. Diese Zonen sind nur für das Be- und Entladen von Fahrzeugen gedacht.
            Parken ist hier nicht gestattet. Dadurch wird die Belieferung einfacher und der Alltag
            für Gewerbetreibende und Lieferdienste entspannter. Lieferfahrzeuge müssen nicht mehr in
            der zweiten Reihe halten und gefährliche Situationen für den Fußverkehr werden
            entschärft.
          </p>
          <p className="bg-white p-4">
            <strong>Parkhaus</strong>
            <br />
            Die Berliner Verkehrsbetriebe (BVG) richten Jelbi-Stationen und Jelbi-Punkte mit
            Sharing-Angeboten im Graefekiez ein. Hier lassen sich schnell, komfortabel und auf
            kurzem Weg Roller, Räder, Scooter, Lastenräder oder Autos leihen. An den U-Bahnhöfen
            Schönleinstraße und Südstern besteht die direkte Verbindung zwischen Jelbi und den
            öffentlichen Verkehrsmitteln. Für die Nutzung von Jelbi muss die{' '}
            <a className={linkStyles} target="_blank" href="https://www.jelbi.de/" rel="noreferrer">
              Jelbi-App
            </a>{' '}
            installiert werden.
          </p>
        </Prose>
      </ContainerTwoThirdWidth>
    </section>
  )
}
