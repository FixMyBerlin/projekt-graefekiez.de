import clsx from 'clsx'
import React from 'react'
import { TQuestion } from '~/pages/faq'

type Props = {
  question: TQuestion
}

export const FaqItem: React.FC<Props> = ({ question }) => {
  const gray: boolean = question.id % 2 === 0
  return (
    <div className={clsx(gray ? 'bg-gray-50' : '', 'border border-gray-100 px-4')}>
      <p className="font-bold">{question.question}</p>
      {question.answerNode ?? <p>{question.answer}</p>}
    </div>
  )
}
