import React, { useState } from 'react'
import { buttonStyle } from '../links'
import { DataMap } from '../maps/DataMap/DataMap'
import { MapButton } from '../maps/MapButton'

const mapConfig = {
  einwohnerdichte: {
    visibleLayerSearchTerms: ['fmc--BXH-All', 'fmc--BXH-Berlin-Einwohnerdichte'],
    legendConfig: {
      title: 'Einwohnerdichte',
      sourceName: 'Umweltatlas',
      sourceLink:
        'https://www.berlin.de/umweltatlas/mensch/umweltgerechtigkeit/2022/auswertungsergebnisse-gesamtstadt-und-bezirke/',
      items: [
        {
          title: 'unter 10.000',
          color: '#F7C297',
        },
        {
          title: '10.000 bis 20.000',
          color: '#E28436',
        },
        {
          title: '20.000 und mehr',
          color: '#A93F0A',
        },
      ],
    },
  },
  mehrfachbelastung: {
    visibleLayerSearchTerms: ['fmc--BXH-All', 'fmc--BXH-Berlin-Mehrfachbelastung'],
    legendConfig: {
      title: 'Mehrfachbelastung',
      sourceName: 'Umweltatlas',
      sourceLink:
        'https://www.berlin.de/umweltatlas/mensch/umweltgerechtigkeit/2022/auswertungsergebnisse-gesamtstadt-und-bezirke/',
      items: [
        {
          title: 'keine starke Belastung',
          color: '#E7CBCB',
        },
        {
          title: 'einfach',
          color: '#D19999',
        },
        {
          title: 'zweifach',
          color: '#CF6E6E',
        },
        {
          title: 'dreifach',
          color: '#B43131',
        },
        {
          title: 'vierfach',
          color: '#891515',
        },
        {
          title: 'fünffach',
          color: '#480404',
        },
      ],
    },
  },
}

export const PageHomeMapMap: React.FC = () => {
  const [mapConfigState, setMapConfigState] = useState<keyof typeof mapConfig>('einwohnerdichte')
  return (
    <section className="">
      <DataMap
        mapBounds="berlin"
        mapClass="h-[380px]"
        visibleLayerSearchterms={mapConfig[mapConfigState].visibleLayerSearchTerms}
        buttons={
          <>
            <MapButton
              active={mapConfigState === 'einwohnerdichte'}
              handleClick={() => setMapConfigState('einwohnerdichte')}
            >
              Einwohnerdichte
            </MapButton>
            <MapButton
              active={mapConfigState === 'mehrfachbelastung'}
              handleClick={() => setMapConfigState('mehrfachbelastung')}
            >
              Mehrfachbelastung
            </MapButton>
          </>
        }
        legendConfig={mapConfig[mapConfigState].legendConfig}
      />

      <nav className="mt-4 space-x-2 space-y-2 bg-gray-300 p-4">
        {/* TODO: Anschauen dafür https://tailwindui.com/components/application-ui/forms/radio-groups#component-245cb777f4a9823e97d8b1c2dfb87e0c */}
        <button type="button" className={buttonStyle}>
          Parkmöglichkeiten
        </button>
        <button type="button" className={buttonStyle}>
          Jelbi-Stationen
        </button>
        <button type="button" className={buttonStyle}>
          Lieferzonen
        </button>
        <button type="button" className={buttonStyle}>
          Neunutzungen
        </button>
      </nav>
    </section>
  )
}
