import clsx from 'clsx'
import React from 'react'
import XhainLogo from '../../../images/logos/Logo-BA-Xhain.inline.svg'
import { DesktopNavigation, MobileNavigation } from './Navigation'

type Props = {
  className?: string
  title: string
  subtitle?: string
  /** @default 'dark' */
  titleColor?: 'light' | 'dark'
  /** @desc className="h-full w-full" */
  image?: React.ReactNode
}

export const Hero: React.FC<Props> = ({
  title,
  subtitle,
  titleColor = 'dark',
  image,
  className,
}) => {
  return (
    <div className={clsx(className, 'relative isolate overflow-hidden bg-yellow-300')}>
      {/* Image: */}
      {image ? (
        <div className="absolute inset-0 -z-10">{image}</div>
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-[#F7BD64] to-yellow-100" />
      )}

      {/* Gradient Top */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden" />

      {/* Gradient Dots: */}
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="-trangray-x-1/2 relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#gradient)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="gradient"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F4BE34" />
              <stop offset={1} stopColor="#886407" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <div className="flex flex-1 justify-center p-6 pb-0 md:justify-start lg:p-8 lg:pb-0">
        <MobileNavigation visibilityClassName="md:hidden" />
        <DesktopNavigation visibilityClassName="hidden md:block" />
      </div>

      <div className="px-6 pb-28 pt-0 sm:pb-44 sm:pt-10 md:pt-16">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="mb-10 mt-6 flex w-full flex-col items-center justify-center">
              <XhainLogo height={130} width={200} />
            </div>
            <h1
              className={clsx(
                'text-5xl font-bold tracking-tight sm:text-7xl',
                titleColor === 'light' ? 'text-white' : 'text-gray-900'
              )}
            >
              {title}
            </h1>
            <p
              className={clsx(
                'mt-10 flex justify-center text-xl leading-8 sm:block sm:text-3xl',
                'text-black'
              )}
            >
              {subtitle && <span className="bg-yellow-300 px-12 py-3">{subtitle}</span>}
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Dots: */}
      {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="-trangray-x-1/2 relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#gradient2)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="gradient2"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#574005" />
              <stop offset={1} stopColor="#886407" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </div>
  )
}
