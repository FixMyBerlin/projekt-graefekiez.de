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
  legendConfig: TLegendConfig
  visibleLayerSearchterms: MapViewProps['visibleLayerSearchterms']
  mapBounds: 'berlin' | 'xhain'
  mapClass?: string
  legendClassName?: string
  buttonOrientationVertical?: boolean
  buttons?: React.ReactNode
}

type MapWrapperProps = Pick<Props, 'mapClass' | 'visibleLayerSearchterms' | 'mapBounds'>

const MAPBOX_MAP_STYLE = 'mapbox://styles/hejco/cldir3cym002601o4nn80d6ef'
const BOUNDS_BERLIN = [
  13.0931839, 52.36077805442321, 13.750532816664474, 52.671787,
] as LngLatBoundsLike
const BOUND_XHAIN = [
  13.368215305236783, 52.482770463629336, 13.491453514701735, 52.53102559302558,
] as LngLatBoundsLike

const MapWithWrapper: React.FC<MapWrapperProps> = ({
  mapClass,
  mapBounds,
  visibleLayerSearchterms,
}) => {
  return (
    <div className={clsx(mapClass, 'mb-5 h-full w-full')}>
      <ConsentAndMap
        mapStyle={MAPBOX_MAP_STYLE}
        config={{ bounds: mapBounds === 'berlin' ? BOUNDS_BERLIN : BOUND_XHAIN }}
        visibleLayerSearchterms={visibleLayerSearchterms}
        minZoom={mapBounds === 'xhain' ? 10 : 2}
        maxZoom={13}
      />
    </div>
  )
}

export const DataMap: React.FC<Props> = ({
  mapClass,
  buttonOrientationVertical,
  visibleLayerSearchterms,
  buttons,
  legendClassName,
  legendConfig,
  mapBounds,
}) => {
  if (buttonOrientationVertical)
    return (
      <div className="w-full">
        {/* bei md screen und kleiner auch hier buttons unter Map horizontal */}
        <div className="mb-2 flex flex-col sm:flex-row">
          <MapWithWrapper
            visibleLayerSearchterms={visibleLayerSearchterms}
            mapBounds={mapBounds}
            mapClass={mapClass}
          />

          <div className="flex px-4 sm:p-2">
            {buttons && <div className="mx-auto flex flex-wrap gap-1 sm:flex-col">{buttons}</div>}
          </div>
        </div>
        <DataMapLegend legendConfig={legendConfig} legendClassName={legendClassName} />
      </div>
    )

  return (
    <>
      <MapWithWrapper
        visibleLayerSearchterms={visibleLayerSearchterms}
        mapBounds={mapBounds}
        mapClass={mapClass}
      />
      <div className="w-full">
        {buttons && <div className="mb-2 flex items-center justify-center gap-1">{buttons}</div>}
        <DataMapLegend legendConfig={legendConfig} legendClassName={legendClassName} />
      </div>
    </>
  )
}
