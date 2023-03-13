import React, { useEffect, useState } from 'react'
import { pinkButtonStyles } from '~/components/links'
import { ConsentText } from './ConsentText'
import { getConsentStore, writeContentStore } from './localStorage'

export const PrivacyPolicyMapConsentInfo: React.FC = () => {
  const [consentGiven, setConsent] = useState<boolean | null>(null)
  useEffect(() => setConsent(getConsentStore()))

  const handleConsent = (consent: boolean) => {
    writeContentStore(consent)
    setConsent(consent)
  }

  if (consentGiven === null) {
    return (
      <div className="my-5">
        <ConsentText />
        <p className="space-x-5">
          <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(true)}>
            Ja, ich stimme zu
          </button>
          <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(false)}>
            Ablehnen
          </button>
        </p>
      </div>
    )
  }

  if (consentGiven === false) {
    return (
      <div className="my-5">
        <p>
          <strong>Sie haben der Nutzung der Kartenfunktion widersprochen.</strong> Die Karten werden
          daher nicht angezeigt.
        </p>
        <hr className="my-5 border border-blue-400" />
        <ConsentText />
        <p className="space-x-5">
          <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(true)}>
            Zustimmen
          </button>
        </p>
      </div>
    )
  }

  return (
    <div className="my-5">
      <p>
        <strong>Sie haben der Nutzung der Kartenfunktion zugestimmt.</strong>
      </p>
      <ConsentText />
      <p className="space-x-5">
        <button type="button" className={pinkButtonStyles} onClick={() => handleConsent(false)}>
          Zustimmung zurückziehen
        </button>
      </p>
    </div>
  )
}
