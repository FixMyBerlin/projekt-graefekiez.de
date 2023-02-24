import React, { useEffect, useState } from 'react'
import { DataMap } from '../maps/DataMap/DataMap'
import { MapButton } from '../maps/MapButton'

const wzbLayers = ['wzb-buildings', 'wzb--border', 'wzb--area', 'wzb--spaceuses', 'wzb--noentry']

const mapConfig = {
  jelbi: {
    visibleLayerSearchTerms: ['wzb--jelbi'],
    legendConfig: {
      title: 'Legende',
      sourceName: '',
      sourceLink: '',
      items: [
        {
          title: 'Lieferflächen',
          color: '#4FACC2',
        },
        {
          title: 'Grünflächen',
          color: '#5EA739',
        },
        {
          title: 'Entsiegelung',
          color: '#2B781C',
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
          title: 'Lieferflächen',
          color: '#4FACC2',
        },
        {
          title: 'Grünflächen',
          color: '#5EA739',
        },
        {
          title: 'Entsiegelung',
          color: '#2B781C',
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
          title: 'Lieferflächen',
          color: '#4FACC2',
        },
        {
          title: 'Grünflächen',
          color: '#5EA739',
        },
        {
          title: 'Entsiegelung',
          color: '#2B781C',
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
          title: 'Lieferflächen',
          color: '#4FACC2',
        },
        {
          title: 'Grünflächen',
          color: '#5EA739',
        },
        {
          title: 'Entsiegelung',
          color: '#2B781C',
        },
      ],
    },
  },
}

export const PageHomeMapMap: React.FC = () => {
  const [mapConfigState, setMapConfigState] = useState(['jelbi', 'logistik', 'schule', 'fuzo'])
  const [layers, setLayers] = useState(wzbLayers)

  useEffect(() => {
    const layerStatus = mapConfigState
    const newLayers = Object.entries(mapConfig)
      .filter((item) => layerStatus.includes(item[0]))
      .map((item) => item[1].visibleLayerSearchTerms)
      .flat()
    setLayers(wzbLayers.concat(newLayers))
  }, [])

  const toggleMapLayer = (layerName: string) => {
    let layerStatus = mapConfigState
    if (layerStatus.includes(layerName)) {
      layerStatus = layerStatus.filter((item) => item !== layerName)
    } else {
      layerStatus.push(layerName)
    }
    setMapConfigState(layerStatus)
    const newLayers = Object.entries(mapConfig)
      .filter((item) => layerStatus.includes(item[0]))
      .map((item) => item[1].visibleLayerSearchTerms)
      .flat()
    setLayers(wzbLayers.concat(newLayers))
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
        legendConfig={mapConfig.jelbi.legendConfig}
      />
    </section>
  )
}
