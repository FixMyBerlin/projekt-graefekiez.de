/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import { Layout, MetaTags } from '~/components/layouts'
import { Hero } from '~/components/layouts/Hero/Hero'
import { FaqItem } from '~/components/PageFaq/FaqItem'
import { H1, H3, Prose } from '~/components/typography'

export type TQuestion = {
  id: number
  question: string
  answer: string
}

export type TFaqs = {
  carFaqs: TQuestion[][]
  pedestrianFaqs: TQuestion[][]
}

export const faqs: TFaqs = {
  carFaqs: [
    [
      {
        id: 1,
        question:
          'Kann ich überhaupt noch mit einem Auto in den Kiez fahren? Was macht mein Besuch, wenn es mit dem Auto kommen will?',
        answer:
          'Alle Ziele im Kiez sind wie bisher auch weiterhin mit dem Auto erreichbar. Auch das Ein- und Ausladen ist weiterhin fast überall möglich. Die neuen Ladezonen machen das sogar einfacher und verhindern das Halten in der zweiten Reihe. Lediglich das dauerhafte Parken wird durch den Wegfall von Stellplätzen schwieriger und ist möglicherweise mit längeren Fußwegen verbunden. Das gilt auch für Besucher:innen, die mit dem eigenen Auto anreisen.',
      },
      {
        id: 2,
        question:
          'Nun habe ich als Anwohner:in aber selber ein Auto, wo kann ich es denn abstellen?',
        answer:
          'Es gibt die Möglichkeit, das Fahrzeug für einen monatlichen Tarif von 60 Euro im Parkhaus am Hermannplatz abzustellen.',
      },
      {
        id: 3,
        question: 'Warum wählen wir diesen Ansatz?',
        answer:
          'Wir müssen dringend die Verkehrssicherheit im Bezirk erhöhen. Das dies notwendig ist, zeigen immer wieder schwere oder gar tödliche Unfälle mit Rad- oder Fußbeteiligung. Wir sind den Verkehrsteilnehmenden verpflichtet, die besonders gefährdet sind. Dazu gehören z.B. Kinder, ältere Menschen – und im Allgemeinen alle, die zu Fuß oder mit dem Rad unterwegs sind. Wir wählen einen flächendeckenden Ansatz, um die Umweltgerechtigkeit im Bezirk zu erhöhen. Die Daten des Umweltatlas zeigen, dass die Wohngebiete in XHain unterschiedlich stark von negativen Umweltbelastungen betroffen sind. Mit zunehmenden Hitzesommern steigt der Bedarf für qualitativ hochwertige öffentliche Räume. Gerade in Gebieten des Bezirks mit hoher Einwohner*innen-Dichte und geringer Grünraumversorgung ist dies wichtig.',
      },
    ],
    [
      {
        id: 4,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 5,
        question: 'Warum wählen wir diesen Ansatz?',
        answer:
          'Wir müssen dringend die Verkehrssicherheit im Bezirk erhöhen. Das dies notwendig ist, zeigen immer wieder schwere oder gar tödliche Unfälle mit Rad- oder Fußbeteiligung. Wir sind den Verkehrsteilnehmenden verpflichtet, die besonders gefährdet sind. Dazu gehören z.B. Kinder, ältere Menschen – und im Allgemeinen alle, die zu Fuß oder mit dem Rad unterwegs sind. Wir wählen einen flächendeckenden Ansatz, um die Umweltgerechtigkeit im Bezirk zu erhöhen. Die Daten des Umweltatlas zeigen, dass die Wohngebiete in XHain unterschiedlich stark von negativen Umweltbelastungen betroffen sind. Mit zunehmenden Hitzesommern steigt der Bedarf für qualitativ hochwertige öffentliche Räume. Gerade in Gebieten des Bezirks mit hoher Einwohner*innen-Dichte und geringer Grünraumversorgung ist dies wichtig.',
      },
      {
        id: 6,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
    ],
    [
      {
        id: 7,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 8,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 9,
        question: 'Warum wählen wir diesen Ansatz?',
        answer:
          'Wir müssen dringend die Verkehrssicherheit im Bezirk erhöhen. Das dies notwendig ist, zeigen immer wieder schwere oder gar tödliche Unfälle mit Rad- oder Fußbeteiligung. Wir sind den Verkehrsteilnehmenden verpflichtet, die besonders gefährdet sind. Dazu gehören z.B. Kinder, ältere Menschen – und im Allgemeinen alle, die zu Fuß oder mit dem Rad unterwegs sind. Wir wählen einen flächendeckenden Ansatz, um die Umweltgerechtigkeit im Bezirk zu erhöhen. Die Daten des Umweltatlas zeigen, dass die Wohngebiete in XHain unterschiedlich stark von negativen Umweltbelastungen betroffen sind. Mit zunehmenden Hitzesommern steigt der Bedarf für qualitativ hochwertige öffentliche Räume. Gerade in Gebieten des Bezirks mit hoher Einwohner*innen-Dichte und geringer Grünraumversorgung ist dies wichtig.',
      },
    ],
  ],
  pedestrianFaqs: [
    [
      {
        id: 1,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 2,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 3,
        question: 'Warum wählen wir diesen Ansatz?',
        answer:
          'Wir müssen dringend die Verkehrssicherheit im Bezirk erhöhen. Das dies notwendig ist, zeigen immer wieder schwere oder gar tödliche Unfälle mit Rad- oder Fußbeteiligung. Wir sind den Verkehrsteilnehmenden verpflichtet, die besonders gefährdet sind. Dazu gehören z.B. Kinder, ältere Menschen – und im Allgemeinen alle, die zu Fuß oder mit dem Rad unterwegs sind. Wir wählen einen flächendeckenden Ansatz, um die Umweltgerechtigkeit im Bezirk zu erhöhen. Die Daten des Umweltatlas zeigen, dass die Wohngebiete in XHain unterschiedlich stark von negativen Umweltbelastungen betroffen sind. Mit zunehmenden Hitzesommern steigt der Bedarf für qualitativ hochwertige öffentliche Räume. Gerade in Gebieten des Bezirks mit hoher Einwohner*innen-Dichte und geringer Grünraumversorgung ist dies wichtig.',
      },
    ],
    [
      {
        id: 4,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 5,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 6,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
    ],
    [
      {
        id: 7,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 8,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
      {
        id: 9,
        question: 'Fallen Parkplätze weg?',
        answer:
          'Ja es fallen parkplätze weg, allerding nur 0,000001%. mehr dazu sehen sie hier in der Statistik',
      },
    ],
  ],
}

const FaqPage: React.FC<PageProps> = () => {
  const { carFaqs, pedestrianFaqs } = faqs
  return (
    <Layout>
      <Hero title="Häufige Fragen" subtitle="und Antworten" />
      <section className="mx-auto w-full max-w-7xl py-6 px-4 lg:mt-6 lg:py-8 lg:px-24">
        <Prose>
          <div className="mx-auto max-w-5xl px-4">
            <H1>Antworten auf häufige Fragen</H1>

            <H3 line>
              <strong className="text-blue-600">Veränderungen für Autofahrende</strong>
            </H3>

            <ul
              role="list"
              className="mt-16 grid max-w-2xl grid-cols-1 gap-y-2 gap-x-8 lg:max-w-none lg:grid-cols-3"
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
          </div>

          <div className="mx-auto mt-16 max-w-5xl px-4">
            <H3 line>
              <strong className="text-blue-600">Fragen zum Fußverkehr</strong>
            </H3>

            <ul
              role="list"
              className="mt-16 grid max-w-2xl grid-cols-1 gap-y-2 gap-x-8 lg:max-w-none lg:grid-cols-3"
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
          </div>
        </Prose>
      </section>
    </Layout>
  )
}

export default FaqPage

export const Head: HeadFC = () => <MetaTags title="FAQ" />
