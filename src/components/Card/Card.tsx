import React from 'react'

export type CardProps = {
  title: string
  description: string
  /** @desc <img className="h-48 w-full object-cover" src={imageUrl} alt="" /> */
  image: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div key={title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">{image}</div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          {/* <p className="text-indigo-600 text-sm font-medium">
              {cateogry}
          </p> */}
          <div className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
