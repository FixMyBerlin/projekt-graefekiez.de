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
        'max-w-full',
        'prose prose-p:text-gray-900 prose-a:no-underline prose-ul:list-none prose-ul:pl-0 prose-li:m-0 prose-li:p-0',
        'prose-code:before:content-none prose-code:after:content-none'
      )}
    >
      {children}
    </div>
  )
}
