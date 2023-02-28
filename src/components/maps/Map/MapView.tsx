import type {
  AnyLayer,
  CircleLayer,
  FillLayer,
  HeatmapLayer,
  LineLayer,
  LngLatBoundsLike,
  PaddingOptions,
  SymbolLayer,
} from 'mapbox-gl'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FullscreenControl,
  Map as ReactMapGl,
  MapboxEvent,
  NavigationControl,
  useMap,
  ViewState,
  ViewStateChangeEvent,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useEffect, useState } from 'react'

import { isDebugHash } from '~/components/utils/isDebugHash'
import { flattenFilterArrays, wrapFilterWithAll } from './filterUtils'
import { MapDebugHelper, MapDebugHelperData, showMapDebugHelper } from './MapDebugHelper'

export type MapViewProps = {
  config: Partial<Pick<ViewState, 'longitude' | 'latitude' | 'zoom'>> & {
    bounds?: LngLatBoundsLike
    zoomDiff?: number
  }
  visibleLayerSearchterms?: string[]
  visibleLayerIds?: string[]
  layerFilter?: [string, string[]]
  markers?: React.ReactNode[]
  mapStyle: `mapbox://styles/${string}/${string}`
  boundsPadding?: number | PaddingOptions
  minZoom?: number
  maxZoom?: number
  fullscreenOption?: boolean
}

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiaGVqY28iLCJhIjoiY2piZjd2bzk2MnVsMjJybGxwOWhkbWxpNCJ9.L1UNUPutVJHWjSmqoN4h7Q'

export const MapView: React.FC<MapViewProps> = ({
  config,
  visibleLayerSearchterms,
  visibleLayerIds,
  layerFilter,
  markers,
  mapStyle,
  boundsPadding = 20,
  minZoom,
  maxZoom,
  fullscreenOption = false,
}) => {
  const { mainMap } = useMap()

  // Used by <MapDebugHelper data={debugData} />
  const [debugData, setDebugData] = useState<MapDebugHelperData | undefined>(undefined)

  // By convention, all interactive layers start with "fmc-"
  type OurLayerReturnType =
    // | BackgroundLayer | CustomLayerInterface | SkyLayer | FillExtrusionLayer | HillshadeLayer | RasterLayer
    CircleLayer | FillLayer | HeatmapLayer | LineLayer | SymbolLayer
  const ourLayers = (allLayers: AnyLayer[]) => {
    return allLayers.filter((l) => {
      return l.id.startsWith('wzb-')
    }) as OurLayerReturnType[]
  }

  // When {config} changes, move the map
  useEffect(() => {
    if (!mainMap) return

    if (config.bounds) {
      const padding = typeof boundsPadding === 'number' ? boundsPadding : boundsPadding.left
      mainMap.fitBounds(config.bounds, { padding })
    }

    const [currentLon, currentLat] = mainMap.getCenter().toArray()
    const currentZoom = mainMap.getZoom()
    const newLon = config.longitude || currentLon
    const newLat = config.latitude || currentLat
    const newZoom = config.zoomDiff ? currentZoom - config.zoomDiff : config.zoom || currentZoom
    if (config.longitude || config.latitude || config.zoom || config.zoomDiff) {
      mainMap.easeTo({
        center: [newLon, newLat],
        zoom: newZoom,
        duration: 1000,
      })
    }
  }, [config.bounds, config.longitude, config.latitude, config.zoom, config.zoomDiff])

  // When {visibleLayerIds} OR {visibleLayerSearchterm} changes, update the visibility
  const updateLayerVisibility = () => {
    if (!(visibleLayerIds || visibleLayerSearchterms)) return
    if (!mainMap) return
    const map = mainMap.getMap()

    // Hide all custom layers so we can show those we want
    const allLayers = mainMap.getStyle().layers
    const fmcLayers = ourLayers(allLayers)
    fmcLayers.forEach((layer) => {
      map.setLayoutProperty(layer.id, 'visibility', 'none')
    })

    if (visibleLayerIds) {
      visibleLayerIds.forEach((layerId) => {
        if (!map.getLayer(layerId)) {
          // eslint-disable-next-line no-console
          console.error('handleLayerVisibility', 'Layer not found', layerId)
          return
        }
        map.setLayoutProperty(layerId, 'visibility', 'visible')
      })
    }

    if (visibleLayerSearchterms) {
      fmcLayers.forEach((layer) => {
        if (visibleLayerSearchterms.some((searchTerm) => layer.id.includes(searchTerm))) {
          map.setLayoutProperty(layer.id, 'visibility', 'visible')
        }
      })
    }
  }

  useEffect(() => {
    updateLayerVisibility()
  }, [visibleLayerIds, visibleLayerSearchterms])

  // When {layerFilter} changes, update the filter
  const [appliedLayerFilter, setAppliedLayerFilter] = useState<string[]>([])

  const updateLayerFilter = () => {
    if (!mainMap || !layerFilter) return
    const [filterProperty, filterValues] = layerFilter

    // Guard: Make sure we apply each filter only once
    if (appliedLayerFilter.includes(`${filterProperty}-${filterValues}`)) return

    const addedFilter = ['match', ['get', filterProperty], filterValues, true, false]

    const fmcLayers = ourLayers(mainMap.getStyle().layers)
    fmcLayers.forEach((layer) => {
      // TODO Hotfix for this one layer that does not have the required property
      // Which hides all data.
      // The workaround is, to not apply the filter to this layer…
      if (layer['source-layer'] === 'massnahme_joined_wgs84-d3gznc') return

      // We need to make sure that our addedFilters are actually added to existing filters.
      // Which is not easy, since the currentFilters could have any level of complexity.
      // Those helpers will remove all existing ['all', something] and flatten them
      // … and then add one wrapping ['all', newMergedAndNestedFilterArray]
      const currentFilters = mainMap.getMap().getFilter(layer.id)
      const newFilter = wrapFilterWithAll(flattenFilterArrays(currentFilters, addedFilter))
      mainMap.getMap().setFilter(layer.id, newFilter)
    })

    // Store a string representation of the applied filter to Guard for the next render.
    setAppliedLayerFilter((prev) => {
      const layerFilterString = `${filterProperty}-${filterValues}`
      return [...prev, layerFilterString]
    })

    if (showMapDebugHelper) {
      setDebugData(
        (prev) =>
          ({
            ...prev,
            ...{ ourUpdatedLayers: ourLayers(mainMap.getStyle().layers) },
          } as MapDebugHelperData)
      )
    }
  }

  useEffect(() => {
    updateLayerFilter()
  }, [layerFilter])

  // Intial Load of the map
  const handleLoad = (event: MapboxEvent) => {
    const map = event.target

    if (showMapDebugHelper) {
      const { layers, sources } = map.getStyle()
      setDebugData({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore "Property 'style' does not exist on type 'Map'" but it does
        styleModified: map.style.stylesheet.modified,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore "Property 'style' does not exist on type 'Map'" but it does
        styleId: map.style.stylesheet.id,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore "Property 'style' does not exist on type 'Map'" but it does
        styleName: map.style.stylesheet.name,
        ourLayers: ourLayers(layers),
        ourUpdatedLayers: [],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore "Property 'url' does not exist on type 'AnySourceData'"
        source: sources?.composite?.url,
        zoom: map.getZoom(),
      })
    }

    // Debug helper; use URL `/#showTileBoundaries`
    if (isDebugHash('showTileBoundaries')) {
      map.showTileBoundaries = true
    }

    // This needs to happen after we set the Debug data, so we can see "ourLayers" vs. "ourUpdatedLayers"
    updateLayerFilter()
    updateLayerVisibility()
  }

  return (
    <ReactMapGl
      id="mainMap"
      initialViewState={{
        longitude: config.longitude,
        latitude: config.latitude,
        zoom: config.zoom,
        // bbox:
        bounds: config.bounds,
        fitBoundsOptions: {
          padding: boundsPadding,
        },
      }}
      // mapLib={maplibregl} // This time we use Mapbox
      mapStyle={mapStyle}
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      // maxBounds={bboxView as BBox2d} // TODO remove?
      // interactiveLayerIds={geometry.features.map(({ properties }) => properties.id)} // TODO
      onLoad={handleLoad}
      onZoomEnd={(event: ViewStateChangeEvent) =>
        showMapDebugHelper &&
        setDebugData(
          (prev) =>
            ({
              ...prev,
              ...{ zoom: event.viewState.zoom },
            } as MapDebugHelperData)
        )
      }
      scrollZoom={false}
      {...({ minZoom } || {})}
      {...({ maxZoom } || {})}
      // hash
    >
      <NavigationControl position="bottom-right" showCompass={false} />
      {fullscreenOption && <FullscreenControl />}
      {markers}
      <MapDebugHelper data={debugData} />
    </ReactMapGl>
  )
}
