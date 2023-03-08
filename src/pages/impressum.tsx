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
          <p>
            <strong>Bezirksamt Friedrichshain-Kreuzberg von Berlin</strong>
            <br />
            Anschrift: Petersburger Straße 86-90, 10247 Berlin
            <br />
            E-Mail-Adresse: <MailLink>sga@ba-fk.berlin.de</MailLink>
            <br />
            Tel.: +49 30 90298 2169
          </p>
          <p>Verantwortlich: Bezirksstadträtin Frau Annika Gerold</p>
          <p>
            Bei Fragen und Anmerkungen zu diesem Internetauftritt wenden Sie sich bitte an{' '}
            <MailLink>sga@ba-fk.berlin.de</MailLink>
          </p>
          <p>
            Konzeption und Umsetzung der Website durch FixMyCity GmbH{' '}
            <Link href="https://www.fixmycity.de/">https://www.fixmycity.de/</Link>
          </p>

          <p>
            Die Daten der interaktiven Karten stammen aus unterschiedlichen Quellen und sind
            entsprechend gekennzeichnet. Die genutzten Geodaten der Stadt Berlin stammen aus dem
            Geodatenportel FIS-Broker und können unter{' '}
            <Link href="https://fbinter.stadt-berlin.de/fb/index.jsp">
              https://fbinter.stadt-berlin.de/fb/index.jsp
            </Link>{' '}
            eingesehen werden. Für OSM Daten: © OpenStreetMap-Mitwirkende. Weitere Informationen zu
            den Nutzungsrechten unter:{' '}
            <Link href="https://www.openstreetmap.org/copyright">
              https://www.openstreetmap.org/copyright
            </Link>
          </p>
          <p>
            Alle Bildrechte, sofern nicht anders gekennzeichnet: © Bezirksamt
            Friedrichshain-Kreuzberg
          </p>
          <p>Foto im Header auf der Startseite: Matthias Heskamp / paper planes e.V.</p>
        </Prose>
      </Container>
    </Layout>
  )
}

export default ImprintPage

export const Head: HeadFC = () => <MetaTags title="Impressum" noindex />
