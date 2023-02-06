import React from 'react'

export type Activity = {
  icon: React.ReactNode
  date: string
  title: string
  description: string
}

type Props = { activities: Activity[] }

export const Timeline: React.FC<Props> = ({ activities }) => {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {activities.map(({ icon, date, title, description }, activityItemIdx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={activityItemIdx}>
            <div className="relative pb-8">
              {activityItemIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {icon}
                <div className="min-w-0 flex-1">
                  <div className="text-sm text-gray-900">
                    <span className="font-bold">{title}</span>
                    <p className="mt-0.5 text-sm text-gray-500">{date}</p>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
