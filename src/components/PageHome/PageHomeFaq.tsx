import React from 'react'

const faqs = [
  [
    {
      question: 'Does TaxPal handle VAT?',
      answer: 'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'How do I apply for a job at TaxPal?',
      answer:
        'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
  ],
  [
    {
      question: 'What was that testimonial about tax fraud all about?',
      answer:
        'TaxPal is just a software application, ultimately your books are your responsibility.',
    },
    {
      question: 'TaxPal sounds horrible but why do I still feel compelled to purchase?',
      answer:
        'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
    },
    {
      question: 'I found other companies called TaxPal, are you sure you can use this name?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export const PageHomeFaq: React.FC = () => {
  return (
    <section>
      <h2 className="mt-10 mb-8 text-3xl sm:text-4xl">Fragen und Antworten</h2>
      <div className="prose">
        <p>Lorem Ipsum</p>
      </div>

      <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        {faqs.map((column, columnIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={columnIndex}>
            <ul className="flex flex-col gap-y-8">
              {column.map((faq, faqIndex) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={faqIndex}>
                  <h3 className="font-display text-slate-900 text-lg leading-7">{faq.question}</h3>
                  <p className="text-slate-700 mt-4 text-sm">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
