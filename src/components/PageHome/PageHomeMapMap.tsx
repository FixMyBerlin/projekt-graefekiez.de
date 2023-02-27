import React, { useState } from 'react'
import { DataMap } from '../maps/DataMap/DataMap'
import { MapButton } from '../maps/MapButton'

const wzbStandardLayers = [
  'wzb-buildings',
  'wzb--border',
  'wzb--area',
  'wzb--spaceuses',
  'wzb--noentry',
]

const mapConfig = {
  jelbi: {
    visibleLayerSearchTerms: ['wzb--jelbi'],
    legendConfig: {
      title: 'Legende',
      sourceName: '',
      sourceLink: '',
      items: [
        {
          title: 'Jelbi',
          color: '#4FACC2',
        },
      ],
    },
  },
  logistik: {
    visibleLayerSearchTerms: ['wzb--logisti'],
    legendConfig: {
      title: 'Legende',
      sourceName: '',
      sourceLink: '',
      items: [
        {
          title: 'Logistik',
          color: '#5EA739',
        },
      ],
    },
  },
  schule: {
    visibleLayerSearchTerms: ['wzb--school'],
    legendConfig: {
      title: 'Legende',
      sourceName: '',
      sourceLink: '',
      items: [
        {
          title: 'Schulstraße',
          color: '#4FACC2',
        },
        {
          title: 'Schule',
          color: '#4FACC2',
        },
      ],
    },
  },
  fuzo: {
    visibleLayerSearchTerms: ['wzb--fuzo'],
    legendConfig: {
      title: 'Legende',
      sourceName: '',
      sourceLink: '',
      items: [
        {
          title: 'Fußgänger*innenzone',
          color: '#2B781C',
        },
      ],
    },
  },
}

export const PageHomeMapMap: React.FC = () => {
  // array of all visibleLayerSearchTerms in mapConfig
  const additionalLayers = Object.entries(mapConfig)
    .map(([_key, value]) => value.visibleLayerSearchTerms)
    .flat()
  // array of all legendConfigs in mapConfig
  const legendConfigs = Object.entries(mapConfig).map(([_key, value]) => value.legendConfig)

  const [mapConfigState, setMapConfigState] = useState(['jelbi', 'logistik', 'schule', 'fuzo'])
  const [layers, setLayers] = useState(wzbStandardLayers.concat(additionalLayers))
  const [legends, setLegends] = useState(legendConfigs)

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
    // update legendConfigs in legends state
    const newLegendConfigs = Object.entries(mapConfig)
      .filter(([key, _value]) => layerStatus.includes(key))
      .map(([_key, value]) => value.legendConfig)
    setLegends(newLegendConfigs)
  }

  return (
    <section className="bg-gray-50 ">
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
              Logistikflächen
            </MapButton>
            <MapButton
              handleClick={() => toggleMapLayer('schule')}
              active={mapConfigState.includes('schule')}
            >
              Schulstraße
            </MapButton>
            <MapButton
              handleClick={() => toggleMapLayer('fuzo')}
              active={mapConfigState.includes('fuzo')}
            >
              Fußgänger*innenzone
            </MapButton>
          </>
        }
        legendConfigs={legends}
      />
    </section>
  )
}
