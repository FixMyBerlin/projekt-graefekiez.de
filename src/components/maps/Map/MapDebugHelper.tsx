import { AnyLayer } from 'mapbox-gl'
import React from 'react'
import { isDebugHash } from '~/components/utils/isDebugHash'

export type MapDebugHelperData = {
  styleModified: string
  styleId: string
  styleName: string
  ourLayers: AnyLayer[]
  ourUpdatedLayers: AnyLayer[]
  source: string
  zoom: number
}

type Props = {
  data: MapDebugHelperData | undefined
}

export const showMapDebugHelper = isDebugHash('debug')

export const MapDebugHelper = ({ data }: Props) => {
  if (!showMapDebugHelper || !data) return null

  const { styleModified, styleId, styleName, ourLayers, ourUpdatedLayers, source, zoom } = data

  const styleModifiedDate = styleModified && new Date(styleModified).toLocaleString()

  const ourSources = source
    ?.replace('mapbox://', '')
    ?.split(',')
    ?.filter((s: string) => s.startsWith('hejco'))

  return (
    <section className="border-xl absolute left-1 top-1 z-50 max-h-[98%] overflow-y-auto rounded bg-gray-900 p-1 text-xs text-white shadow-2xl print:hidden">
      <div>
        {isDebugHash('showTileBoundaries') ? (
          <span>showTileBoundaries: on</span>
        ) : (
          <a className="underline hover:underline-offset-2" href="#debug,showTileBoundaries">
            showTileBoundaries: off
          </a>
        )}
      </div>

      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary>Layer Ids ({ourLayers.length})</summary>
        <pre>
          {JSON.stringify(
            ourLayers.map((l) => l.id),
            undefined,
            2
          )}
        </pre>
      </details>
      <details>
        <summary>Layer Details</summary>
        <pre>{JSON.stringify(ourLayers, undefined, 2)}</pre>
      </details>
      <details className="open:bg-blue-500/20">
        <summary className="text-blue-500">Updated Layer Details</summary>
        <pre>{JSON.stringify(ourUpdatedLayers, undefined, 2)}</pre>
      </details>

      <hr className="border-1 my-0.5 border-gray-600" />

      <div>
        Style: <br />
        {styleModifiedDate || '-'}
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          className="underline hover:underline-offset-2"
          href={`https://studio.mapbox.com/styles/hejco/${styleId}/edit`}
        >
          {styleName}
        </a>
      </div>

      <hr className="border-1 my-0.5 border-gray-600" />

      <details>
        <summary>Sources ({ourSources.length})</summary>
        {ourSources.map((s) => {
          return (
            <a
              key={s}
              target="_blank"
              rel="noreferrer"
              href={`https://studio.mapbox.com/tilesets/${s}`}
              className="block underline hover:underline-offset-2"
            >
              {s}
            </a>
          )
        })}
      </details>

      <hr className="border-1 my-0.5 border-gray-600" />

      <div>Zoom: {zoom}</div>
    </section>
  )
}
