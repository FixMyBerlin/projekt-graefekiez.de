import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DesktopNavigation, MobileNavigation } from './Navigation'

type Props = {
  title: string
  subtitle: string
  image?: React.ReactNode
}

export const Hero: React.FC<Props> = ({ title, subtitle, image: _todo }) => {
  return (
    <div className="relative isolate overflow-hidden bg-yellow-900">
      {/* Image: */}
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      {/* Gradient: */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
      </div>

      <div className="flex flex-1 justify-center p-6 pb-0 md:justify-start lg:p-8 lg:pb-0">
        <MobileNavigation visibilityClassName="md:hidden" />
        <DesktopNavigation visibilityClassName="hidden md:block" />
      </div>

      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 sm:pt-20 sm:pb-24">
          <div className="text-center">
            <StaticImage
              src="./assets/logo-bezirksamt.png"
              alt="Bezirksamt Friedrichshain-Kreuzberg"
              height={250}
            />
            <h1 className="text-4xl font-normal tracking-tight text-white sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Gradient: */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
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
      </div>
    </div>
  )
}
