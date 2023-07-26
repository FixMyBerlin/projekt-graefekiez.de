import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'
import { Link } from '~/components/links'

type Props = {
  href: string
  children: React.ReactNode
}

export const DesktopNavigationNavItem: React.FC<Props> = ({ href, children }) => {
  const isActive = false // TODO migrate to gatsby – useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-4 py-2 transition',
          isActive ? 'text-blue-500' : 'hover:text-blue-500',
        )}
        activeClassName="font-bold"
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0" />
        )}
      </Link>
    </li>
  )
}

export const MobileNavigationNavItem: React.FC<Props> = ({ href, children }) => {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}
