import clsx from 'clsx'
import type { LngLatBoundsLike } from 'mapbox-gl'
import React, { ReactNode } from 'react'
import { ConsentAndMap } from '../Map/ConsentAndMap'
import { MapViewProps } from '../Map/MapView'
import { DataMapLegend } from './DataMapLegend'

export type TLegendConfig = {
  title: string
  itemsFirstRow: { title: string; color?: string; icon?: ReactNode }[]
  itemsSecondRow: { title: string; color?: string; icon?: ReactNode }[]
  itemsThirdRow: { title: string; color?: string; icon?: ReactNode }[]
}

type Props = {
  legendConfig: TLegendConfig
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
  legendConfig,
  mapBounds,
}) => {
  return (
    <>
      <MapWithWrapper
        visibleLayerSearchterms={visibleLayerSearchterms}
        mapBounds={mapBounds}
        mapClass={mapClass}
      />
      <div>
        {buttons && (
          <div className="mb-2 flex flex-col justify-start gap-2 px-2 sm:grid sm:grid-cols-2 md:flex md:flex-row">
            {buttons}
          </div>
        )}
        <DataMapLegend legendConfig={legendConfig} legendClassName={legendClassName} />
      </div>
    </>
  )
}
