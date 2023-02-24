import clsx from 'clsx'
import React from 'react'
import { Link } from '~/components/links'

export type TLegendConfig = {
  title: string
  sourceName: string
  sourceLink: string
  items: { title: string; color: string }[]
}

type Props = {
  legendConfig: TLegendConfig
  legendClassName?: string
}

export const DataMapLegend: React.FC<Props> = ({ legendConfig, legendClassName }) => {
  return (
    <div className="p-4 text-gray-600">
      <h2 className="mb-2">
        <strong>{legendConfig.title}</strong>{' '}
        {legendConfig.sourceName && (
          <span>
            {' '}
            (Quelle: <Link href={legendConfig.sourceLink}>{legendConfig.sourceName}</Link>)
          </span>
        )}
      </h2>
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
    </div>
  )
}
