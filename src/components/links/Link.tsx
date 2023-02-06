import clsx from 'clsx'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'

export type LinkProps = {
  to: string
  className?: string
  newWindow?: boolean
  button?: boolean
  external?: boolean
  children: React.ReactNode
}

export const linkStyle = 'underline-offset-4 hover:underline decoration-pink-500'
export const buttonStyle =
  'py-2.5 px-7 font-bold inline-flex items-center justify-center border-[1.5px] border-pink-500 bg-white font-bold no-underline ring-pink-600 hover:bg-pink-50 hover:ring-1 active:border-2 active:border-pink-50 active:bg-pink-500 active:ring-0;'

export const Link: React.FC<LinkProps> = ({
  to,
  className,
  newWindow = false,
  external = false,
  button,
  children,
}) => {
  if (newWindow || external) {
    return (
      <a
        href={to}
        className={clsx(button ? buttonStyle : linkStyle, className)}
        {...(newWindow && { target: '_blank' })}
        {...((newWindow || external) && { rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={to} className={clsx(button ? buttonStyle : linkStyle, className)}>
      {children}
    </GatsbyLink>
  )
}
