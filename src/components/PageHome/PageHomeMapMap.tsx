import React, { useState } from 'react'
import { DataMap, TLegendConfig } from '../maps/DataMap/DataMap'
import { MapButton } from '../maps/MapButton'
import GesamtgebietIcon from './assets/MapLegend/gesamtgebiet-icon.inline.svg'
import JelbiSIcon from './assets/MapLegend/jelbi-s-icon.inline.svg'
import JelbiPIcon from './assets/MapLegend/jelbi-p-icon.inline.svg'
import SchuleIcon from './assets/MapLegend/schule-icon.inline.svg'
import NoEntryIcon from './assets/MapLegend/noentry-icon.inline.svg'

// layer names of layers which are aways active
const wzbStandardLayers = [
  'wzb--Kerngebiet',
  'wzb--kerngebiet-outline',
  'wzb--schools',
  'wzb--noentry',
  'wzb--durchfahrtssperre',
  'wzb--border',
  'wzb--border-bg',
  'wzb-buildings',
  'wzb--bundeslander-berlinbezirke',
]

const wzbStandardLegend: TLegendConfig = {
  title: 'Legende',
  itemsFirstRow: [
    {
      title: 'Kerngebiet',
      color: '#E7A297',
    },
    {
      title: 'Gesamtgebiet',
      icon: <GesamtgebietIcon />,
    },
  ],
  itemsSecondRow: [
    {
      title: 'Aktionsflächen',
      color: '#ED07D3',
    },
    {
      title: 'Entsiegelte Flächen',
      color: '#82DB14',
    },
    {
      title: 'Lade- und Lieferflächen',
      color: '#14BCD2',
    },
  ],
  itemsThirdRow: [
    {
      title: 'Jelbi-Station (inkl. Carsharing)',
      icon: <JelbiSIcon />,
    },
    {
      title: 'Jelbi-Punkt (Nur Mikromobilität)',
      icon: <JelbiPIcon />,
    },
    {
      title: 'Schule',
      icon: <SchuleIcon />,
    },
    {
      title: 'Durchfahrtssperre',
      icon: <NoEntryIcon />,
    },
  ],
}

const mapConfig = {
  jelbi: {
    visibleLayerSearchTerms: ['wzb--jelbi'],
  },
  logistik: {
    visibleLayerSearchTerms: ['wzb--logistic'],
  },
  aktion: {
    visibleLayerSearchTerms: ['wzb--aktion'],
  },
  entsiegelt: {
    visibleLayerSearchTerms: ['wzb--noseal'],
  },
}

export const PageHomeMapMap: React.FC = () => {
  // array of all visibleLayerSearchTerms in mapConfig
  const additionalLayers = Object.entries(mapConfig)
    .map(([_key, value]) => value.visibleLayerSearchTerms)
    .flat()

  const [mapConfigState, setMapConfigState] = useState([
    'jelbi',
    'logistik',
    'aktion',
    'entsiegelt',
  ])
  const [layers, setLayers] = useState(wzbStandardLayers.concat(additionalLayers))

  const toggleMapLayer = (layerName: string) => {
    // update mapConfigState - toggle terms
    let layerStatus: string[] = []
    if (mapConfigState.includes(layerName)) {
      layerStatus = mapConfigState.filter((item) => item !== layerName)
    } else {
      layerStatus = [...mapConfigState]
      layerStatus.push(layerName)
    }
    setMapConfigState(layerStatus)
    // update visibleLayerSearchTerms layer state
    const newLayers = Object.entries(mapConfig)
      .filter(([key, _value]) => layerStatus.includes(key))
      .map(([_key, value]) => value.visibleLayerSearchTerms)
      .flat()
    setLayers(wzbStandardLayers.concat(newLayers))
  }

  return (
    <section className="bg-gray-100 ">
      <DataMap
        mapBounds="xhain"
        mapClass="h-[340px] md:h-[590px]"
        visibleLayerSearchterms={layers}
        buttons={
          <>
            <MapButton
              handleClick={() => toggleMapLayer('jelbi')}
              active={mapConfigState.includes('jelbi')}
            >
              Jelbi-Stationen
            </MapButton>
            <MapButton
              handleClick={() => toggleMapLayer('logistik')}
              active={mapConfigState.includes('logistik')}
            >
              Lieferflächen
            </MapButton>
            <MapButton
              handleClick={() => toggleMapLayer('aktion')}
              active={mapConfigState.includes('aktion')}
            >
              Aktionsflächen
            </MapButton>
            <MapButton
              handleClick={() => toggleMapLayer('entsiegelt')}
              active={mapConfigState.includes('entsiegelt')}
            >
              Entsiegelte Flächen
            </MapButton>
          </>
        }
        legendConfig={wzbStandardLegend}
      />
    </section>
  )
}
