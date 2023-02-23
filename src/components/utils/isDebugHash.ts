import { isBrowser } from './isEnv'

export const isDebugHash = (lookFor: string) => {
  if (!isBrowser) return false
  return window.location.hash.includes(lookFor)
}
