import clsx from 'clsx'
import React from 'react'
import { pinkButtonStyles } from '../links/styles'

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
      className={clsx(pinkButtonStyles, { '!bg-pink-50 ring-1': active }, { 'shadow-xl': fly })}
      disabled={active}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
