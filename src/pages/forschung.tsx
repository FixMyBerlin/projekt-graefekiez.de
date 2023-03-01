import { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Container } from '~/components/layouts/Container'
import { Hero } from '~/components/layouts/Hero/Hero'
import { H1, H3, Prose } from '~/components/typography'

const parnters = [
  {
    name: 'WZB',
    image: (
      <StaticImage
        src="../images/logos/WZB_logo_quareise_quer_transparent.png"
        alt=""
        height={80}
      />
    ),
  },
  {
    name: 'DLR',
    image: (
      <StaticImage src="../components/PageForschung/assets/Logo-DLR_2.jpg" alt="" height={60} />
    ),
  },
  {
    name: 'RIFS',
    image: (
      <StaticImage src="../components/PageForschung/assets/Logo-RIFS.jpg" alt="" height={60} />
    ),
  },
  {
    name: 'HFWU',
    image: (
      <StaticImage src="../components/PageForschung/assets/Logo-HFWU.jpg" alt="" height={80} />
    ),
  },
]

const ForschungPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Hero title="Forschung" subtitle="Wissenschaftliche Begleitung" />
      <Container colorClass="bg-white mx-auto max-w-prose">
        <H1>
          Wissenschaftliche Begleitung durch das Wissenschaftszentrum Berlin für Sozialforschung
        </H1>
        <Prose>
          <p>
            In der wissenschaftlichen Debatte wird darauf hingewiesen, dass einer der Hemmnisse bei
            der Umsetzung der Verkehrswende die Verfügbarkeit von öffentlichem Raum als Parkplatz
            ist. Das Projekt Graefekiez soll wissenschaftlich begründet Aufschluss darüber geben, ob
            mit dem Wegfall von Stellplätzen eine Reduzierung der Anzahl der Autos möglich ist und
            ob sich die öffentlichen Räume für neue Aktivitäten beleben lassen.
          </p>
          <p>
            Die Evaluation der Akzeptanz der verkehrlichen Maßnahmen und der Beteiligungsprozess im
            Graefekiez ist der zentrale wissenschaftliche Untersuchungsgegenstand. Durch
            flächendeckende repräsentative Befragungen werden Ergebnisse zur Wirkung der Maßnahmen
            zusammengetragen und die Anwohnenden umfassend über die Befragungen informiert und zu
            Reaktionen eingeladen. Zusätzlich sollen durch Fokusgruppen Personen aus dem Kiez
            (Schüler*innen, Gewerbetreibende, Menschen mit Einschränkungen u. a.) einbezogen werden,
            die bei Umfragen nicht mitmachen. Alle Beteiligungsaktivitäten im Kiez werden umfassend
            beobachtet und dokumentiert. Verkehrsmessungen ergänzen die Erfassung von Veränderungen
            in der Nutzung der Straßenzüge.
          </p>
          <p>
            Die Forschungsgruppe Digitale Mobilität und gesellschaftliche Differenzierung am
            Wissenschaftszentrum Berlin für Sozialforschung (WZB) verantwortet die wissenschaftliche
            Begleitforschung – unterstützt durch Forschungseinrichtungen wie das Deutsche Luft- und
            Raumfahrtzentrum (DLR), das Research Institute for Sustainability (RIFS Potsdam) und die
            Hochschule für Wirtschaft und Umwelt in Geislingen-Nürthingen (HfWU). Das WZB wird in
            mehreren Veranstaltungen im Kiez über die laufenden Ergebnisse informieren und mit den
            Anwohnenden im Austausch bleiben. Ebenso werden die Beteiligungs- und
            Gestaltungsaktivitäten beobachtet und ausgewertet.
          </p>
        </Prose>
        <div className="mt-12">
          <H3>Forschungspartner</H3>
          <ul className="mt-12 grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6">
            {parnters.map((partner, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  {partner.image}
                  <span className="sr-only">{partner.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </Layout>
  )
}

export default ForschungPage

export const Head: HeadFC = () => <MetaTags title="Forschung" />
