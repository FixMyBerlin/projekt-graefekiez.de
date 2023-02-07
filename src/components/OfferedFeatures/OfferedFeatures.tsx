import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import React from 'react'

export type FeatureItem = {
  subTitle: string | null
  title: string
  description: string
  /* @desc <Image className="w-full" src={feature.image} alt="" sizes="52.75rem" /> */
  image: React.ReactNode
  icon: React.ReactNode
}

type FeatureProps = {
  feature: Omit<FeatureItem, 'title'> & { title: string | React.ReactNode }
  isActive: boolean
  className: string
}

const Feature: React.FC<FeatureProps> = ({ feature, isActive, className }) => {
  return (
    <div
      className={clsx(
        className,
        'group rounded-lg p-6',
        isActive ? 'bg-white/30 hover:opacity-100' : 'bg-white'
      )}
    >
      <div
        className={clsx(
          'inline-block p-3',
          isActive ? 'bg-blue-600 text-white' : 'bg-pink-500 text-white'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          {feature.icon}
        </svg>
      </div>
      {feature.subTitle && (
        <p className={clsx('mt-2 text-sm font-bold', isActive ? 'text-blue-600' : 'text-gray-600')}>
          {feature.subTitle}
        </p>
      )}
      <h3
        className={clsx(
          'mt-2 text-xl text-gray-900',
          isActive ? '' : 'decoration-pink-500 underline-offset-4 group-hover:underline'
        )}
      >
        {feature.title}
      </h3>
      <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
    </div>
  )
}

const FeaturesMobile: React.FC<{ features: FeatureItem[] }> = ({ features }) => {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.title}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-gray-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10">
              {feature.image}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const FeaturesDesktop: React.FC<{ features: FeatureItem[] }> = ({ features }) => {
  return (
    <Tab.Group as="div" className="hidden lg:mt-16 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.title}
                feature={{
                  ...feature,
                  title: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.title}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-10 overflow-hidden rounded-xl bg-white px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.title}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-900/5 ring-1 ring-gray-500/10">
                    {feature.image}
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="rounded-4xl pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export const OfferedFeatures: React.FC<{ features: FeatureItem[] }> = ({ features }) => {
  return (
    <>
      <FeaturesMobile features={features} />
      <FeaturesDesktop features={features} />
    </>
  )
}
