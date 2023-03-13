import React from 'react'
import { useMap } from 'react-map-gl'
import { buttonStyles } from '~/components/links'

export const MapFlyButton = () => {
  const { mainMap } = useMap()

  // TODO Active State Toggle

  type HandleFly = { lat: number; lng: number; zoom: number }
  const handleFly = ({ lat, lng, zoom }: HandleFly) => {
    if (!mainMap) return
    mainMap.flyTo({ center: [lat, lng], zoom })
  }

  return (
    <div className="space-x-5">
      <button
        onClick={() => handleFly({ lat: 1, lng: 2, zoom: 10 })}
        type="button"
        className={buttonStyles}
      >
        Ziele
      </button>
      <button
        onClick={() =>
          handleFly({
            lat: 13.4298,
            lng: 52.4969,
            zoom: 13,
          })
        }
        type="button"
        className={buttonStyles}
      >
        Maßnahmen
      </button>
    </div>
  )
}
