/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Tab } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import { H3, Prose } from '../typography'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Tabs = () => {
  const [categories] = useState({
    Jelbi: [
      {
        id: 1,
        title: 'Jelbi-Stationen',
        subtitle: 'Mobilitätsangebote, Bus & Bahn, Fahrrad, Carsharing',
        content: (
          <>
            <p>
              Die BVG wird im Graefekiez mit Unterstützung der Senatsverwaltung für Umwelt,
              Mobilität, Verbraucher- und Klimaschutz flächendeckend 13 Jelbi-Mobilitätsstationen
              für die Bündelung von Sharing-Angeboten errichten. An den Jelbi-Stationen und -Punkten
              lassen sich schnell, komfortabel und auf kurzem Weg Roller, Räder, Scooter,
              Lastenräder oder Autos entleihen. An den U-Bahnhöfen Schönleinstraße und Südstern
              besteht die direkte Verbindung zwischen Jelbi und den Öffentlichen. Über
              die Jelbi-App der BVG lassen sich Fahrzeuge orten, buchen und bezahlen.
            </p>
            <p>
              <strong>Jelbi </strong>
              ist die zentrale Vernetzungsplattform für Mobilitätsangebote in Berlin, vom ÖPNV bis
              hin zu verschiedenen Sharing-Anbietern. Die Nutzer:innen erhalten einen einfachen
              Zugang zu sämtlichen Formen geteilter Mobilität und finden so komfortabel das jeweils
              für sie passende Angebot. E-Scooter: Über die Jelbi-App sind die E-Scooter
              von Tier, Voi und Lime buchbar.
            </p>
            <p>
              <strong>Bikesharing: </strong>
              An den Stationen stehen Fahrräder der Firma Nextbike bereit.Die Mieträder können
              innerhalb des S-Bahnrings und an verschiedenen Stationen außerhalb gemietet und
              zurückgegeben werden.
            </p>
            <p>
              <strong>E-Roller-Sharing: </strong>
              Die E-Roller von Emmy können innerhalb des S-Bahnrings und außerdem in immer mehr
              Wohngebieten außerhalb des Rings genutzt werden.Carsharing: An den Jelbi-Stationen
              bietet Miles flexibles Carsharing innerhalb des S-Bahnrings sowie bis Weißensee,
              Steglitz, Westend, Reinickendorf und Potsdam an. Außerdem können Autos
              von Sixt gemietet werden.
            </p>
            <p>
              <strong>Taxi: </strong>
              An den Stationen können auch Taxis geordert werden. Fahrt-Gutscheine für die
              Graefekiez-Bewohner:innen und Informationen zum System vor Ort sollen den Einstieg
              erleichtern.
            </p>
          </>
        ),
      },
    ],
    Logistik: [
      {
        id: 1,
        title: 'Logistikflächen',
        subtitle: 'Gewerbetreibende und Lieferverkehr',
        content: (
          <>
            <p>
              Die BVG wird im Graefekiez mit Unterstützung der Senatsverwaltung für Umwelt,
              Mobilität, Verbraucher- und Klimaschutz flächendeckend 13 Jelbi-Mobilitätsstationen
              für die Bündelung von Sharing-Angeboten errichten. An den Jelbi-Stationen und -Punkten
              lassen sich schnell, komfortabel und auf kurzem Weg Roller, Räder, Scooter,
              Lastenräder oder Autos entleihen. An den U-Bahnhöfen Schönleinstraße und Südstern
              besteht die direkte Verbindung zwischen Jelbi und den Öffentlichen. Über
              die Jelbi-App der BVG lassen sich Fahrzeuge orten, buchen und bezahlen.
            </p>
            <p>
              <strong>Bikesharing: </strong>
              An den Stationen stehen Fahrräder der Firma Nextbike bereit.Die Mieträder können
              innerhalb des S-Bahnrings und an verschiedenen Stationen außerhalb gemietet und
              zurückgegeben werden.
            </p>
            <p>
              <strong>E-Roller-Sharing: </strong>
              Die E-Roller von Emmy können innerhalb des S-Bahnrings und außerdem in immer mehr
              Wohngebieten außerhalb des Rings genutzt werden.Carsharing: An den Jelbi-Stationen
              bietet Miles flexibles Carsharing innerhalb des S-Bahnrings sowie bis Weißensee,
              Steglitz, Westend, Reinickendorf und Potsdam an. Außerdem können Autos
              von Sixt gemietet werden.
            </p>
            <p>
              <strong>Taxi: </strong>
              An den Stationen können auch Taxis geordert werden. Fahrt-Gutscheine für die
              Graefekiez-Bewohner:innen und Informationen zum System vor Ort sollen den Einstieg
              erleichtern.
            </p>
          </>
        ),
      },
    ],
    Schule: [
      {
        id: 1,
        title: 'Schulstraße',
        subtitle: 'Eltern, Kinder und Ältere',
        content: (
          <>
            <p>
              Die BVG wird im Graefekiez mit Unterstützung der Senatsverwaltung für Umwelt,
              Mobilität, Verbraucher- und Klimaschutz flächendeckend 13 Jelbi-Mobilitätsstationen
              für die Bündelung von Sharing-Angeboten errichten. An den Jelbi-Stationen und -Punkten
              lassen sich schnell, komfortabel und auf kurzem Weg Roller, Räder, Scooter,
              Lastenräder oder Autos entleihen. An den U-Bahnhöfen Schönleinstraße und Südstern
              besteht die direkte Verbindung zwischen Jelbi und den Öffentlichen. Über
              die Jelbi-App der BVG lassen sich Fahrzeuge orten, buchen und bezahlen.
            </p>
            <p>
              <strong>Jelbi </strong>
              ist die zentrale Vernetzungsplattform für Mobilitätsangebote in Berlin, vom ÖPNV bis
              hin zu verschiedenen Sharing-Anbietern. Die Nutzer:innen erhalten einen einfachen
              Zugang zu sämtlichen Formen geteilter Mobilität und finden so komfortabel das jeweils
              für sie passende Angebot. E-Scooter: Über die Jelbi-App sind die E-Scooter
              von Tier, Voi und Lime buchbar.
            </p>
            <p>
              <strong>Taxi: </strong>
              An den Stationen können auch Taxis geordert werden. Fahrt-Gutscheine für die
              Graefekiez-Bewohner:innen und Informationen zum System vor Ort sollen den Einstieg
              erleichtern.
            </p>
          </>
        ),
      },
    ],
    'Zu Fuß': [
      {
        id: 1,
        title: 'Fußgänger*innenzone',
        subtitle: 'Flaneur*innen',
        content: (
          <p>
            Die BVG wird im Graefekiez mit Unterstützung der Senatsverwaltung für Umwelt, Mobilität,
            Verbraucher- und Klimaschutz flächendeckend 13 Jelbi-Mobilitätsstationen für die
            Bündelung von Sharing-Angeboten errichten. An den Jelbi-Stationen und -Punkten lassen
            sich schnell, komfortabel und auf kurzem Weg Roller, Räder, Scooter, Lastenräder oder
            Autos entleihen. An den U-Bahnhöfen Schönleinstraße und Südstern besteht die direkte
            Verbindung zwischen Jelbi und den Öffentlichen. Über die Jelbi-App der BVG lassen sich
            Fahrzeuge orten, buchen und bezahlen.
          </p>
        ),
      },
    ],
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="isolate flex divide-x divide-gray-200 rounded-lg shadow">
          {Object.keys(categories).map((category, categoryIdx) => (
            <Tab as={Fragment} key={category}>
              {({ selected }) => (
                <button
                  type="button"
                  className={classNames(
                    'font-medium group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm hover:bg-gray-50 focus:z-10 focus:outline-none',
                    categoryIdx === 0 ? 'rounded-l-md' : '',
                    categoryIdx === Object.keys(categories).length - 1 ? 'rounded-r-lg' : '',
                    selected
                      ? 'text-gray-900 focus:outline-none'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  {category}
                  <span
                    aria-hidden="true"
                    className={classNames(
                      selected ? 'bg-pink-500' : 'bg-transparent',
                      'absolute inset-x-0 bottom-0 h-0.5'
                    )}
                  />
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className="bg-white p-3">
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative max-w-xl rounded-md p-3">
                    <Prose>
                      <p>{post.subtitle}</p>
                      <H3 className="leading-5">{post.title}</H3>
                      {post.content}
                    </Prose>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
