import React from 'react'
import clsx from 'clsx'
import { Link } from '../links'
import { Prose } from '../typography'

const ChevronRightIcon = (props: any) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const Card: React.FC<any> = ({ as: Component = 'div', className, children }) => {
  return (
    <Component className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  )
}

const CardLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

export const CardTitle: React.FC<{ as?: any; href?: string; children: React.ReactNode }> = ({
  as: Component = 'h2',
  href,
  children,
}) => {
  return (
    <Component className="text-base font-bold tracking-tight text-gray-800">
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  )
}

export const CardDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Prose className="prose-ul:list-disc prose-ul:pl-2 prose-li:m-0.5 prose-li:pl-1">
      <p className="relative z-10 mt-2 text-sm text-gray-600">{children}</p>
    </Prose>
  )
}

export const CardCta: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-2 flex items-center text-sm font-normal text-gray-500"
    >
      {children}
      <ChevronRightIcon className="stroke-current ml-1 h-4 w-4" />
    </div>
  )
}

export const CardEyebrow: React.FC<{
  as?: any
  decorate?: boolean
  className?: string
  dateTime?: string
  children: React.ReactNode
}> = ({ as: Component = 'p', decorate = false, className, dateTime, children }) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-gray-400',
        decorate && 'pl-3.5'
      )}
      dateTime={dateTime}
    >
      {decorate && (
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-gray-400" />
        </span>
      )}
      {children}
    </Component>
  )
}
