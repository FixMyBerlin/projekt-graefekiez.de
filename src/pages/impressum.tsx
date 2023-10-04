import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { Link, MailLink } from '~/components/links'
import { Prose } from '~/components/typography'

const ImprintPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Impressum" subtitle="Bezirksamt Friedrichshain-Kreuzberg" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <Prose>
          <div>
            <strong>Herausgeber</strong>
            <p>
              Bezirksamt Friedrichshain-Kreuzberg von Berlin
              <br />
              vertreten durch Annika Gerold, Stadträtin für Verkehr, Grünflächen, Ordnung und Umwelt
              von Friedrichshain-Kreuzberg
            </p>
            <p>
              Telefon: (030) 90298-2169
              <br />
              E-Mail: <MailLink>stadtraetin.gerold@ba-fk.berlin.de</MailLink>
            </p>
          </div>
          <strong>Redaktion</strong>
          <p>
            Bezirksamt Friedrichshain-Kreuzberg von Berlin
            <br />
            vertreten durch
            <br />
            Sara Lühmann – Pressestelle Bezirksamt Friedrichshain-Kreuzberg von Berlin
          </p>
          <p>
            Telefon: (030) 90298-2843
            <br />
            E-Mail: <MailLink>presse@ba-fk.berlin.de</MailLink>
          </p>
          <p>
            Verantwortliche im Sinne des Telemediengesetz (TMG) und dem Rundfunkstaatsvertrag
            (RStV): Pressestelle des Bezirksamtes Friedrichshain-Kreuzberg
          </p>
          <strong>Technische Umsetzung</strong>
          <p>
            Konzeption und Umsetzung sowie technischer Betrieb der Website durch{' '}
            <Link blank href="https://www.fixmycity.de/">
              FixMyCity GmbH
            </Link>
          </p>

          <strong>Verwendete Daten</strong>
          <p>
            Die Daten der interaktiven Karten stammen aus unterschiedlichen Quellen und sind
            entsprechend gekennzeichnet. Die genutzten Geodaten der Stadt Berlin stammen aus dem
            Geodatenportel FIS-Broker und können unter{' '}
            <Link blank href="https://fbinter.stadt-berlin.de/fb/index.jsp">
              https://fbinter.stadt-berlin.de/fb/index.jsp
            </Link>{' '}
            eingesehen werden.
          </p>
          <p>
            Für OSM Daten: © OpenStreetMap-Mitwirkende. Weitere Informationen zu den Nutzungsrechten
            unter:{' '}
            <Link blank href="https://www.openstreetmap.org/copyright">
              https://www.openstreetmap.org/copyright
            </Link>
          </p>

          <strong>Datenschutz</strong>
          <p>
            Bitte beachten Sie hierzu die <Link href="/datenschutz">Datenschutzerklärung</Link>
          </p>

          <strong>Haftungshinweis</strong>
          <p>
            Die im Angebot des Bezirksamtes Friedrichshain-Kreuzberg von Berlin veröffentlichten
            Inhalte sind mit größter Sorgfalt recherchiert. Dennoch kann das Bezirksamt
            Friedrichshain-Kreuzberg von Berlin keine Gewähr für die Aktualität, Korrektheit oder
            Vollständigkeit der bereitgestellten Informationen übernehmen. Alle Angaben erfolgen
            ohne Gewähr. Aus der Nutzung dieser Informationen abgeleitete Haftungsansprüche gegen
            das Bezirksamt Friedrichshain-Kreuzberg, das Land Berlin oder den Betreiber von
            “berlin.de” sind ausgeschlossen.
          </p>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernimmt das Bezirksamt
            Friedrichshain-Kreuzberg von Berlin keine Gewähr für die Inhalte externer Links. Für den
            Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>

          <strong>Urheberrecht</strong>
          <p>
            Alle Bildrechte, sofern nicht anders gekennzeichnet: © Bezirksamt
            Friedrichshain-Kreuzberg Foto im Header auf der Startseite: Matthias Heskamp / paper
            planes e.V.
          </p>
        </Prose>
      </Container>
    </Layout>
  )
}

export default ImprintPage

export const Head: HeadFC = () => <MetaTags title="Impressum" noindex />
