import { ArrowRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import React from 'react'
import { Link } from '../links'

export type CardProps = {
  title: string
  description: string
  /** @desc <img className="h-48 w-full object-cover" src={imageUrl} alt="" /> */
  image: React.ReactNode
  link?: { title: string; href: string }
}

export const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div key={title} className="flex flex-col overflow-hidden border">
      <div className="flex-shrink-0">{image}</div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          {/* <p className="text-indigo-600 text-sm font-normal">
              {cateogry}
          </p> */}
          <div className="mt-2 block">
            <p className="text-xl font-bold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </div>
          {link && (
            <Link button="lightPink" blank className={clsx('mt-4 !font-normal')} href={link.href}>
              <ArrowRightIcon className="h-5" /> {link.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
