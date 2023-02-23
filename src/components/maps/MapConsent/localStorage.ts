const OPTIN_KEY = 'fmc.map-consent'

export const getConsentStore = () => {
  switch (localStorage.getItem(OPTIN_KEY)) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      return null
  }
}

export const writeContentStore = (val: boolean) => {
  if (val == null) {
    localStorage.removeItem(OPTIN_KEY)
  }
  localStorage.setItem(OPTIN_KEY, val.toString())
}
