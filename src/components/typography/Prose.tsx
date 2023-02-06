import React from 'react'
import clsx from 'clsx'

type Props = {
  className?: string
  children: React.ReactNode
}

export const Prose: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        'prose prose-p:text-gray-900 prose-a:no-underline',
        'prose-code:before:content-none prose-code:after:content-none'
      )}
    >
      {children}
    </div>
  )
}
