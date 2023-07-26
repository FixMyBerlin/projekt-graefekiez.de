import clsx from 'clsx'
import React from 'react'
import { pinkButtonStyles } from '../links'

type Props = {
  handleClick: () => void
  active: boolean
  fly?: boolean
  children: React.ReactNode
}

export const MapButton: React.FC<Props> = ({ handleClick, active, fly, children }) => {
  return (
    <button
      type="button"
      className={clsx(
        pinkButtonStyles,
        'bg-gray-200',
        { '!bg-white !ring-1': active },
        { 'shadow-xl': fly },
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
