import clsx from 'clsx'
import React from 'react'
import { Prose } from '~/components/typography'

type Props = {
  map: React.ReactElement
  order: 'map-content' | 'content-map'
  children: React.ReactNode
}

export const WrapperDataMapAndContent: React.FC<Props> = ({ map, order, children }) => {
  // Ordering:
  // - Desktop: Use grid, allow left-right-switch
  // - Mobile: Use flex, always content>map (reverse left-right-switch with flex-row-reverse)
  return (
    <div
      className={clsx(
        'lg:grid lg:grid-cols-2',
        'flex gap-12',
        order === 'map-content' ? 'flex-col-reverse' : 'flex-col',
        'gap-8'
      )}
    >
      {order === 'content-map' ? (
        <>
          <Prose className="px-4 lg:px-0">{children}</Prose>
          <div className="flex w-full flex-col items-center bg-white">{map}</div>
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-center bg-white">{map}</div>
          <Prose className="px-4 lg:px-0">{children}</Prose>
        </>
      )}
    </div>
  )
}
