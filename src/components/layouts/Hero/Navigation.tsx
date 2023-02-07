import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { StaticImage } from 'gatsby-plugin-image'
import React, { Fragment } from 'react'
import { DesktopNavigationNavItem, MobileNavigationNavItem } from './NavigationNavItem'

const navigation = [
  { name: 'Projekt Graefekiez', href: '/' },
  { name: 'Forschung', href: '/forschung' },
  { name: 'Aktuelles / Termine', href: '/aktuelles' },
  { name: 'Häufige Fragen', href: '/faq' },
]

type Props = {
  visibilityClassName: string
}

export const DesktopNavigation: React.FC<Props> = ({ visibilityClassName }) => {
  return (
    <div className={visibilityClassName}>
      <nav className="pointer-events-auto flex items-center bg-white/90 px-6 text-sm font-normal text-gray-800 shadow-xl ring-1 ring-gray-400/5 backdrop-blur">
        <StaticImage
          src="../../../images/logos/logo-bezirksamt.png"
          alt="Bezirksamt Friedrichshain-Kreuzberg"
          height={50}
        />
        <ul className="flex">
          {navigation.map((item) => {
            return (
              <DesktopNavigationNavItem key={item.name} href={item.href}>
                {item.name}
              </DesktopNavigationNavItem>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export const MobileNavigation: React.FC<Props> = ({ visibilityClassName }) => {
  return (
    <Popover className={visibilityClassName}>
      <Popover.Button className="group flex items-center bg-white/90 px-4 py-2 text-sm font-normal text-gray-800 shadow-xl ring-1 ring-gray-900/5 backdrop-blur">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-gray-500 group-hover:stroke-gray-700 dark:group-hover:stroke-gray-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-white/40 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top bg-white py-12 px-16 ring-1 ring-gray-900/5 dark:ring-gray-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </Popover.Button>
              <h2 className="sr-only text-sm font-normal text-gray-600">Navigation</h2>
            </div>
            <div className="text-center">
              <StaticImage
                src="../../../images/logos/logo-bezirksamt.png"
                alt="Bezirksamt Friedrichshain-Kreuzberg"
                height={100}
              />
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-gray-100 text-base text-gray-800">
                {navigation.map((item) => {
                  return (
                    <MobileNavigationNavItem key={item.name} href={item.href}>
                      {item.name}
                    </MobileNavigationNavItem>
                  )
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
