import clsx from 'clsx'
import type { LngLatBoundsLike } from 'mapbox-gl'
import React from 'react'
import { ConsentAndMap } from '../Map/ConsentAndMap'
import { MapViewProps } from '../Map/MapView'
import { DataMapLegend } from './DataMapLegend'

export type TLegendConfig = {
  title: string
  sourceName: string
  sourceLink: string
  items: { title: string; color: string }[]
}

type Props = {
  legendConfigs: TLegendConfig[]
  visibleLayerSearchterms: MapViewProps['visibleLayerSearchterms']
  mapBounds: 'berlin' | 'xhain'
  mapClass?: string
  legendClassName?: string
  buttons?: React.ReactNode
}

type MapWrapperProps = Pick<Props, 'mapClass' | 'visibleLayerSearchterms' | 'mapBounds'>

const MAPBOX_MAP_STYLE = 'mapbox://styles/hejco/cldrhwyz8000s01o1ds41kjim'
const BOUNDS_BERLIN = [
  13.0931839, 52.36077805442321, 13.750532816664474, 52.671787,
] as LngLatBoundsLike

const BOUND_GRAEFE = [
  13.4062593651, 52.4860524646, 13.4264295769, 52.4963478559,
] as LngLatBoundsLike

const MapWithWrapper: React.FC<MapWrapperProps> = ({
  mapClass,
  mapBounds,
  visibleLayerSearchterms,
}) => {
  return (
    <div className={clsx(mapClass, 'mb-2 h-full w-full')}>
      <ConsentAndMap
        mapStyle={MAPBOX_MAP_STYLE}
        config={{ bounds: mapBounds === 'berlin' ? BOUNDS_BERLIN : BOUND_GRAEFE }}
        visibleLayerSearchterms={visibleLayerSearchterms}
        minZoom={mapBounds === 'xhain' ? 10 : 2}
        maxZoom={18}
      />
    </div>
  )
}

export const DataMap: React.FC<Props> = ({
  mapClass,
  visibleLayerSearchterms,
  buttons,
  legendClassName,
  legendConfigs,
  mapBounds,
}) => {
  return (
    <>
      <MapWithWrapper
        visibleLayerSearchterms={visibleLayerSearchterms}
        mapBounds={mapBounds}
        mapClass={mapClass}
      />
      <div className="w-full">
        {buttons && (
          <div className="mb-2 flex flex-col justify-start gap-2 px-2 md:flex-row md:items-center">
            {buttons}
          </div>
        )}
        <DataMapLegend legendConfigs={legendConfigs} legendClassName={legendClassName} />
      </div>
    </>
  )
}
