/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { HeadFC, PageProps } from 'gatsby'
import React, { ReactNode } from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Hero } from '~/components/layouts/Hero/Hero'
import { Link, linkStyles } from '~/components/links'
import { FaqItem } from '~/components/PageFaq/FaqItem'
import { H1, H3, Prose } from '~/components/typography'

export type TQuestion = {
  id: number
  question: string
  answer: string
  answerNode?: ReactNode
}

export type TFaqs = {
  carFaqs: TQuestion[][]
  pedestrianFaqs: TQuestion[][]
  backgroundFaqs: TQuestion[][]
}

export const faqs: TFaqs = {
  carFaqs: [
    [
      {
        id: 1,
        question: 'Kann ich oder mein Besuch noch mit dem Auto in den Kiez fahren?',
        answer:
          'Alle Ziele im Kiez sind wie bisher auch weiterhin mit dem Auto erreichbar. Auch das Ein-und Ausladen ist weiterhin fast überall möglich. Die neuen Ladezonen machen das sogar einfacher und verhindern das Halten in der zweiten Reihe. Lediglich für das dauerhafte Parken gibt es durch die Umgestaltung von Pkw-Stellplätzen weniger Platz.',
      },
      {
        id: 2,
        question: 'Wo können Anwohner*innen in Zukunft ihr Auto abstellen?',
        answer:
          'Es gibt die Möglichkeit, das Fahrzeug für einen monatlichen Tarif im Parkhaus am Hermannplatz abzustellen.',
      },
      {
        id: 3,
        question:
          'Wenn die Wege zwischen Parkplatz und Wohnung länger werden, fühle ich mich gerade nachts unsicher. Was wird für mehr Sicherheit getan?',
        answer:
          'Im Graefekiez entsteht ein enges Netz an Shared-Mobility-Standorten im öffentlichen Straßenland, sie sind gut einsehbar und verlässlich zu nutzen. Das Parkhaus am Hermannplatz ist beleuchtet und bewacht. ',
      },
    ],
    [
      {
        id: 4,
        question: 'Was passiert mit den Stellplätzen für Menschen mit Behinderungen?',
        answer:
          'Bestehende Stellplätze für Menschen mit Beeinträchtigungen bleiben erhalten oder werden in unmittelbarer Nähe neu ausgewiesen.',
      },
      {
        id: 5,
        question: 'Wie funktionieren Anlieferungen, Paketdienste oder andere Wirtschaftsverkehre?',
        answer:
          'In der Graefestraße, Böckhstraße, Dieffenbachstraße und Grimmstraße werden Liefer- und Ladeflächen für den Wirtschaftsverkehr ausgewiesen. Für die LKW-Anlieferung werden 20m-Zonen und für die Anlieferung durch Kurier- Express- und Paketlieferungen 10m-Zonen eingerichtet. Die Liefer- und Ladeflächen entstehen schwerpunktmäßig in der Nähe anlieferungsintensiver Gewerbestandorten und werden so ausgewählt, dass eine Belieferung bis zur Zieladresse innerhalb von 75-100 Metern gewährleistet ist. ',
      },
      {
        id: 6,
        question: 'Wer darf die Liefer- und Ladeflächen nutzen?',
        answer:
          'Ladeflächen dürfen zum Be- und Entladen genutzt werden – sowohl für gewerbliche als auch für private Zwecke.',
      },
    ],
    [
      {
        id: 7,
        question: 'Wo kann ich mich zum Projekt Graefekiez informieren?',
        answer:
          'Das Bezirksamt Friedrichshain-Kreuzberg informiert laufend über alle geplanten Aktivitäten im Rahmen des Projektes. Alle Aktivitäten und Termine sind auf der Homepage www.projekt-graefekiez.de unter der Rubrik „Aktuelles“ zu finden. Bis Ende 2023 sind eine Reihe Info- und Diskussionsveranstaltungen geplant.',
      },
      {
        id: 8,
        question: 'Wo kann ich meine Ideen und Vorschläge einbringen?',
        answer:
          'Auf der Homepage des Projekts finden Sie Informationen zu anstehenden Beteiligungsmöglichkeiten. Dort können Sie Ihre Ideen einbringen. Ab Juni gibt es eine Infobox vor Ort, in die Sie Ihre Ideen und Vorschläge einwerfen bzw. abgeben können.',
      },
    ],
  ],
  pedestrianFaqs: [
    [
      {
        id: 1,
        question: 'Was sind die Ziele des Projektes?',
        answer:
          'Das Projekt Graefekiez soll die Verkehrssicherheit für Fußgänger*innen und Radfahrende sowie insbesondere für Schüler*innen erhöhen. Der Wirtschaftsverkehr soll verbessert und die Stadt gegenüber den Folgen des Klimawandels widerstandsfähiger gemacht werden.',
      },
      {
        id: 2,
        question: 'Wird der Kiez autofrei?',
        answer:
          'Nein, es werden weiterhin alle Wohnungen und Betriebe mit dem Auto erreichbar sein.',
      },
      {
        id: 3,
        question: 'Was passiert wann im Graefekiez?',
        answer:
          'Das Projekt läuft in zwei Schritten. Ab Juni werden im „Kerngebiet“ in der Böckh- und Graefestraße Parkplätze für 12 Monate umgenutzt. Durch bessere Querungsmöglichkeiten und Einsehbarkeit werden die Schulwege sicherer. Die Parkplätze werden in enger Beteiligung mit Anwohner*innen neugestaltet und Nutzungsmöglichkeiten entwickelt. In den genannten Straßen werden Lade- und Lieferflächen zur Anlieferung, Ver- und Entsorgung sowie Plätze für Gewerbebetriebe und Behindertenstellplätze zur Verfügung gestellt. Zusätzlich werden Radabstellanlagen und insgesamt 13 Car- bzw. Bikesharing- Stationen der BVG (Jelbi) im gesamten Graefekiez auf früheren Stellplätzen geschaffen. Eine Durchfahrtssperre in der Schönleinstraße zwischen Lachmann- und Dieffenbachstr. wird eingerichtet, um das Abkürzen von Lkw durch das Viertel zu verhindern. Bereits parallel zum ersten Schritt beginnt die Vorbereitung für den zweiten Schritt. Für die zweite Stufe wird ein Freiflächenkonzept erstellt. Das ist auf Grundlage einer umfassenden Bürger*innen-Beteiligung die Voraussetzung für eine Ausweitung der tatsächlichen Verkehrsberuhigung auf den gesamten Graefekiez.',
      },
      {
        id: 4,
        question: 'Wer führt das Projekt durch?',
        answer:
          'Das Projekt wird vom Bezirksamt Friedrichshain-Kreuzberg verantwortet, zuständig ist das Straßen- und Grünflächenamt. Es kümmert sich um alle baulichen und verkehrstechnischen Maßnahmen.',
      },
    ],
    [
      {
        id: 5,
        question: 'Wer macht die wissenschaftliche Begleitung und die Beteiligung vor Ort?',
        answer:
          'Die wissenschaftliche Begleitung und die Koordination der vielfältigen Beteiligungsformen obliegt dem Wissenschaftszentrum Berlin für Sozialforschung (WZB), weitere Partner wie das DLR, das RIFS, die HfWU und inter 3 (CompAIR) sowie die Vereine Berlin 21, NaturFreunde e.V und paper planes e.V. verantworten die Beteiligung und die Befragung der Anwohner*innen und der Gewerbetreibenden.',
      },
      {
        id: 6,
        question: 'Was passiert mit den Stellplätzen, die im Kerngebiet umgenutzt werden?',
        answer:
          'Die Sperrung des Durchgangsverkehrs am Hohenstaufenplatz dient zur Unterbindung von Abkürzungs- und Umwegungsverkehr vom Kottbusser Damm über die Schönleinstraße zur Urbanstraße. Dies soll unterbunden werden, da Durchgangsverkehr auf die Hauptstraßen gehört. Durch weniger Durchgangsverkehr soll die Verkehrssicherheit erhöht werden. Mit Verkehrszählungen wird geprüft, welchen Effekt diese Sperrung hat.',
      },
      {
        id: 7,
        question: 'Warum wird die Durchfahrt am Hohenstaufenplatz gesperrt?',
        answer:
          'Die Stellplätze werden teils entsiegelt und begrünt, teils zu Liefer- und Ladeflächen umgestaltet und teils als Aktionsflächen ausgewiesen. Auf den Aktionsflächen finden durch die Projektpartner*innen verschiedene Formate zur Diskussion, Beteiligung und Gestaltung mit der Nachbarschaft statt.',
      },
      {
        id: 8,
        question: 'Der Graefekiez ist schon verkehrsberuhigt, warum wird so viel verändert?',
        answer:
          'Die schon in den 1980er Jahren eingeführten verkehrsberuhigten Bereiche im Graefekiez wurden baulich nie umgesetzt. Rechtlich sind alle Verkehrsteilnehmenden gleichgestellt, baulich gibt es jedoch weiterhin Gehweg und Fahrbahn. Hierbei handelt es sich um ein “gebautes Missverständnis“, welches zu unklaren und gefährlichen Situationen im Straßenverkehr führen kann. Es braucht eine eindeutige und im Ergebnis sicherere Straßengestaltung. Dafür muss der gesamte Straßenquerschnitt umgestaltet werden. Dies wird im Rahmen des Projekts ausprobiert.',
      },
    ],
    [
      {
        id: 9,
        question: 'Wie werden Anwohner*innen und Gewerbetreibende beteiligt?',
        answer:
          'Im Kerngebiet sind verschiedene Formate der Projektpartner geplant. Für Gewerbetreibende gibt es gesonderte Angebote. Über alle Termine und Aktivitäten wird auf dieser Webseite informiert.',
      },
      {
        id: 10,
        question:
          'Wie wird das Freihalten der Lieferzonen und der umgenutzten Parkplätze sichergestellt?',
        answer:
          'Das Ordnungsamt wird verstärkt kontrollieren. Die freiwerdenden Plätze werden zudem bespielt und umgenutzt.',
      },
      {
        id: 11,
        question: 'Werden Rettungs- und Einsatzfahrzeuge eingeschränkt?',
        answer:
          'Nein, alle Rettungswege werden freigehalten. Es ist im Gegenteil zu erwarten, dass Rettungs- und andere Einsatzfahrzeuge besser durchkommen, wenn das Halten in der zweiten Reihe aufgrund neuer Lade- und Lieferflächen weniger häufig vorkommt.',
      },
      {
        id: 12,
        question: 'Können die Maßnahmen zurückgebaut werden?',
        answer:
          'Ja, die Bezirksverordnetenversammlung von Friedrichshain-Kreuzberg kann nach dem Schritt 1 beschließen, dass die Maßnahmen teilweise oder ganz zurückgenommen werden.',
      },
      {
        id: 13,
        question: 'Was kostet das Projekt und wer finanziert es?',
        answer:
          'Das Projekt wird zum Teil aus Mitteln der Senatsverwaltung für Umwelt, Mobilität, Verbraucher- und Klimaschutz und des Straßen- und Grünflächenamtes Friedrichshain-Kreuzberg finanziert. Die mit dem Projekt Graefekiez verbundenen Beteiligungsaktivitäten und Forschungsarbeiten werden aus Drittmitteln finanziert, die die beteiligten Institute eingeworben haben.',
      },
    ],
  ],
  backgroundFaqs: [
    [
      {
        id: 1,
        question: 'Wie wurde entschieden, dass das Projekt Graefekiez stattfindet? ',
        answerNode: (
          <p>
            Es handelt sich um eine Umsetzung eines{' '}
            <a
              className={linkStyles}
              target="_blank"
              href="https://www.berlin.de/ba-friedrichshain-kreuzberg/politik-und-verwaltung/bezirksverordnetenversammlung/online/vo020.asp?VOLFDNR=10383"
              rel="noreferrer"
            >
              Beschlusses der Bezirksverordnetenversammlung vom 29.06.2022 (Drucksache DS/0154/VI)
            </a>
            . Darin wird das Bezirksamt aufgefordert, „im Graefekiez einen Feldversuch zur
            Neugestaltung des öffentlichen Raums durchzuführen“.
          </p>
        ),
        answer:
          'Es handelt sich um eine Umsetzung eines Beschlusses der Bezirksverordnetenversammlung vom 29.06.2022 (Drucksache DS/0154/VI). Darin wird das Bezirksamt aufgefordert, „im Graefekiez einen Feldversuch zur Neugestaltung des öffentlichen Raums durchzuführen“.',
      },
      {
        id: 2,
        question:
          'Warum gibt es ein zweistufiges Projekt und nicht sofort eine finale Umgestaltung?',
        answer:
          'Nein, es werden weiterhin alle Wohnungen und Betriebe mit dem Auto erreichbar sein.',
      },
      {
        id: 9,
        question: 'Ist nicht eine Parkraumbewirtschaftung die bessere Lösung?',
        answer:
          'Parkraumbewirtschaftung hat generell eine entlastende Wirkung, sie wird im Bezirk auch schrittweise eingeführt. Sie führt vor allem dazu, dass das Parken von Besucher*innen und Pendler*innen abnimmt und mehr Parkraum für Anwohner*innen zur Verfügung steht. Das Projekt geht jedoch darüber hinaus und erprobt nicht nur die Verteilung, sondern auch die Umnutzung von Kfz-Stellplätzen zu Gunsten aller.',
      },
    ],
    [
      {
        id: 4,
        question: 'Wie soll die Verkehrssicherheit gewährleistet werden?',
        answer:
          'Durch die Umnutzung von Kfz-Parkplätzen werden Sichtverhältnisse verbessert. Die Durchfahrtssperre am Hohenstaufenplatz reduziert Abkürzungsverkehr. Besonders die Menschen zu Fuß und die Radfahrer*innen werden besser gesehen und können ihrerseits die Verkehrslage besser einschätzen.',
      },
      {
        id: 5,
        question: 'Wie viele haben eigentlich ein Auto im Graefekiez?',
        answer:
          'Wie in allen Kiezen innerhalb des S-Bahnrings liegt auch im Graefekiez der Autobesitz weit unter dem Berliner Durchschnitt. Im Jahr 2021 kommen auf 1.000 Einwohner*innen nur 182 Pkw (Berlinweit: 335 Pkw auf 1.000 Einwohner*innen).',
      },
      {
        id: 6,
        question: 'Wird das Projekt Auswirkungen auf die Mieten haben?',
        answer:
          'Ob Mieten steigen oder nicht, hängt in erster Linie vom Wohnungsmarkt und von seiner Regulierung ab. Die Ziele des Projektes sind eine höhere Verkehrssicherheit und eine bessere Aufenthaltsqualität.',
      },
    ],
    [
      {
        id: 7,
        question:
          'Führt eine bessere Aufenthaltsqualität nicht zu mehr Lärmbelästigung und mehr Müll?',
        answer:
          'Die Stellplätze werden teils entsiegelt und begrünt, teils zu Liefer- und Ladeflächen umgestaltet und teils als Aktionsflächen ausgewiesen. Auf den Aktionsflächen finden durch die Projektpartner*innen verschiedene Formate zur Diskussion, Beteiligung und Gestaltung mit der Nachbarschaft statt.',
      },
      {
        id: 8,
        question: 'Wird durch das Projekt der Parksuchverkehr in anderen Kiezen erhöht?',
        answer:
          'Das ist kurzfristig möglich. Ähnliche Projekte zeigen, dass diese Effekte jedoch nachlassen, da zum Beispiel auf Alternativen ausgewichen wird. In diesem Fall das Parkhaus am Hermannplatz, die Sharing-Angebote oder der öffentliche Nahverkehr.',
      },
      {
        id: 3,
        question: 'Auf welcher rechtlichen Grundlage wird hier agiert?',
        answer:
          'Die maßgeblichen Gesetze bzw. Verordnungen sind die Straßenverkehrsordnung (StVO sowie das Berliner Straßengesetz (BerlStrG) und das Berliner Mobilitätsgesetz (MobG BE).',
      },
    ],
  ],
}

const faqToc = [
  { title: 'Praktische Fragen von Anwohner*innen', href: '#anwohnende' },
  { title: 'Allgemeine Fragen zum Projekt Graefekiez', href: '#graefekiez' },
  { title: 'Hintergründe zum Projekt', href: '#hintergruende' },
]

const FaqPage: React.FC<PageProps> = () => {
  const { carFaqs, pedestrianFaqs, backgroundFaqs } = faqs
  return (
    <Layout>
      <Hero title="Häufige Fragen" subtitle="und Antworten" />
      <section className="mx-auto w-full max-w-7xl py-6 px-4 lg:py-8 lg:px-24">
        <Prose>
          <div className="mx-auto max-w-5xl px-4">
            <H1>Antworten auf häufige Fragen</H1>

            <div className="mb-12">
              <p>Direkt zu einer Kategorie springen:</p>
              {faqToc.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}>
                    <Link href={item.href}>{item.title}</Link>
                  </div>
                )
              })}
            </div>

            <section id="anwohnende">
              <H3 line>
                <strong>Praktische Fragen von Anwohner*innen</strong>
              </H3>

              <ul
                role="list"
                className="mt-10 grid max-w-2xl grid-cols-1 gap-y-2 gap-x-8 lg:max-w-none lg:grid-cols-3"
              >
                {carFaqs.map((column, columnIndex) => (
                  <li key={columnIndex}>
                    <ul role="list" className="flex flex-col gap-8">
                      {column.map((faq) => (
                        <li key={faq.id}>
                          <FaqItem question={faq} />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section id="graefekiez">
              <H3 line>
                <strong>Allgemeine Fragen zum Projekt Graefekiez</strong>
              </H3>

              <ul
                role="list"
                className="mt-10 grid max-w-2xl grid-cols-1 gap-y-2 gap-x-8 lg:max-w-none lg:grid-cols-3"
              >
                {pedestrianFaqs.map((column, columnIndex) => (
                  <li key={columnIndex}>
                    <ul role="list" className="flex flex-col gap-8">
                      {column.map((faq) => (
                        <li key={faq.id}>
                          <FaqItem question={faq} />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section id="hintergruende">
              <H3 line>
                <strong>Hintergründe zum Projekt</strong>
              </H3>

              <ul
                role="list"
                className="mt-10 grid max-w-2xl grid-cols-1 gap-y-2 gap-x-8 lg:max-w-none lg:grid-cols-3"
              >
                {backgroundFaqs.map((column, columnIndex) => (
                  <li key={columnIndex}>
                    <ul role="list" className="flex flex-col gap-8">
                      {column.map((faq) => (
                        <li key={faq.id}>
                          <FaqItem question={faq} />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Prose>
      </section>
    </Layout>
  )
}

export default FaqPage

export const Head: HeadFC = () => <MetaTags title="FAQ" />
