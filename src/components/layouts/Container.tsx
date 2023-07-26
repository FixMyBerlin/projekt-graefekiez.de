import clsx from 'clsx'
import React from 'react'

type Props = {
  colorClass?: string
  grid?: boolean
  children: React.ReactNode
}

export const Container: React.FC<Props> = ({ colorClass, grid = false, children }) => {
  return (
    <div className={colorClass}>
      <div
        className={clsx(
          { 'grid gap-10 md:grid-cols-3 ': grid },
          'mx-auto max-w-7xl px-5 py-4 md:px-12 2xl:px-0',
          // 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
        )}
      >
        {children}
      </div>
    </div>
  )
}
