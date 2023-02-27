import clsx from 'clsx'
import React from 'react'

export type TLegendConfig = {
  title: string
  sourceName: string
  sourceLink: string
  items: { title: string; color: string }[]
}

type Props = {
  legendConfigs: TLegendConfig[]
  legendClassName?: string
}

export const DataMapLegend: React.FC<Props> = ({ legendConfigs, legendClassName }) => {
  return (
    <div className="p-4 text-gray-600">
      <h2 className="mb-2">
        <strong>Legende</strong>{' '}
        {/* {legendConfigs[0].sourceName && (
          <span>
            {' '}
            (Quelle: <Link href={legendConfigs[0].sourceLink}>{legendConfigs[0].sourceName}</Link>)
          </span>
        )} */}
      </h2>
      <div className="flex flex-wrap gap-3">
        <ul className={clsx(legendClassName, 'flex flex-wrap gap-y-3 gap-x-5')}>
          <li className="flex items-center gap-2">
            <div className="h-5 w-8" style={{ backgroundColor: '#fff' }} />
            Grenze
          </li>
        </ul>
        {legendConfigs.map((legendConfig) => (
          <ul className={clsx(legendClassName, 'flex flex-wrap gap-y-3 gap-x-5')}>
            {legendConfig.items.map(({ title, color }) => {
              return (
                <li key={title} className="flex items-center gap-2">
                  <div className="h-5 w-8" style={{ backgroundColor: color }} />
                  {title}
                </li>
              )
            })}
          </ul>
        ))}
      </div>
    </div>
  )
}
