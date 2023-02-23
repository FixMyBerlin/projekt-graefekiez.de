import React from 'react'
import { pinkButtonStyles } from '~/components/links'
import { ConsentText } from './ConsentText'

export type TConsent = boolean | null

type Props = {
  consentGiven: TConsent
  handleConsent: (consent: boolean) => void
}

export const MapConsentBanner: React.FC<Props> = ({ consentGiven, handleConsent }) => {
  return (
    <div className="absolute bottom-5 z-20 mx-2 h-fit translate-y-1 rounded-xl bg-white shadow-xl ring-1 ring-gray-500/10 md:mx-5">
      <div className="px-4 py-5 sm:p-6">
        <div className="mb-2">
          <strong>Karte {consentGiven === false && 'doch'} aktivieren:</strong>
        </div>
        <ConsentText />
        <p className="mt-5 space-x-5">
          <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(true)}>
            Ja, ich stimme zu
          </button>
          {consentGiven === null && (
            <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(false)}>
              Ablehnen
            </button>
          )}
        </p>
      </div>
    </div>
  )
}
