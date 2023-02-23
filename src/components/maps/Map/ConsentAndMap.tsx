import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { MapProvider } from 'react-map-gl'
import { getConsentStore, writeContentStore } from '../MapConsent/localStorage'
import { MapConsentBanner, TConsent } from '../MapConsent/MapConsentBanner'
import { MapViewProps, MapView } from './MapView'

export const ConsentAndMap: React.FC<MapViewProps> = ({
  config,
  visibleLayerSearchterms,
  visibleLayerIds,
  layerFilter,
  markers,
  mapStyle,
  boundsPadding,
  minZoom,
  maxZoom,
  fullscreenOption,
}) => {
  const [consentGiven, setConsent] = useState<TConsent>(null)
  useEffect(() => setConsent(getConsentStore()))

  const handleConsent = (consent: boolean) => {
    writeContentStore(consent)
    setConsent(consent)
  }

  if (consentGiven === null || consentGiven === false) {
    return (
      <div className="relative h-full w-full">
        <MapConsentBanner consentGiven={consentGiven} handleConsent={handleConsent} />
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <div className="absolute -inset-2 blur-sm saturate-50">
            <StaticImage
              src="./assets/karte-fallback.jpg"
              alt=""
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      <MapProvider>
        <MapView
          config={config}
          visibleLayerSearchterms={visibleLayerSearchterms}
          visibleLayerIds={visibleLayerIds}
          layerFilter={layerFilter}
          markers={markers}
          mapStyle={mapStyle}
          boundsPadding={boundsPadding}
          minZoom={minZoom}
          maxZoom={maxZoom}
          fullscreenOption={fullscreenOption}
        />
      </MapProvider>
    </div>
  )
}
