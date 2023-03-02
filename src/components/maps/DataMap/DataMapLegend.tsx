import clsx from 'clsx'
import React from 'react'
import { TLegendConfig } from './DataMap'

type Props = {
  legendConfig: TLegendConfig
  legendClassName?: string
}

export const DataMapLegend: React.FC<Props> = ({ legendConfig, legendClassName }) => {
  return (
    <div className="p-4 text-gray-600">
      <h2 className="mb-2 font-bold">Legende</h2>
      <div className="flex flex-col flex-wrap gap-6">
        <ul className={clsx(legendClassName, 'flex flex-wrap gap-y-3 gap-x-5')}>
          {legendConfig.itemsFirstRow.map((item) => {
            return (
              <li key={item.title} className="flex items-center gap-2">
                {item.color ? (
                  <div className="h-5 w-8" style={{ backgroundColor: item.color }} />
                ) : (
                  <div>{item.icon}</div>
                )}
                {item.title}
              </li>
            )
          })}
        </ul>
        <ul className={clsx(legendClassName, 'flex flex-wrap gap-y-3 gap-x-5')}>
          {legendConfig.itemsSecondRow.map((item) => {
            return (
              <li key={item.title} className="flex items-center gap-2">
                {item.color ? (
                  <div className="h-5 w-8" style={{ backgroundColor: item.color }} />
                ) : (
                  <div>{item.icon}</div>
                )}
                {item.title}
              </li>
            )
          })}
        </ul>
        <ul className={clsx(legendClassName, 'flex flex-wrap gap-y-3 gap-x-5')}>
          {legendConfig.itemsThirdRow.map((item) => {
            return (
              <li key={item.title} className="flex items-center gap-2">
                {item.color ? (
                  <div className="h-5 w-8" style={{ backgroundColor: item.color }} />
                ) : (
                  <div>{item.icon}</div>
                )}
                {item.title}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
