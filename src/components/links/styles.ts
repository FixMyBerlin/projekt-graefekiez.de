import clsx from 'clsx'
import { LinkProps } from './Link'

// LINK
export const linkStyles =
  'underline underline-offset-4 decoration-gray-300 hover:decoration-blue-600 hover:text-blue-700'

// HOVER:
const hoverStyleForButtonElement = clsx(
  'enabled:hover:ring-1',
  'enabled:active:border-pink-50 enabled:active:bg-pink-50 enabled:active:ring-0',
)
const hoverStyleForLinkElement = clsx('hover:ring-1', 'active:bg-pink-50 active:ring-0')

// BUTTON
const buttonBase = 'py-2.5 px-7 font-bold'
const buttonStylesForLinkElement = clsx(buttonBase, hoverStyleForLinkElement)
export const buttonStyles = clsx(buttonBase, hoverStyleForButtonElement)

// BUTTON PINK
const pinkButtonBase =
  'inline-flex items-center justify-center border-[1.5px] border-gray-300 bg-white font-bold no-underline ring-gray-700'
const pinkButtonStylesForLinkElement = clsx(buttonStylesForLinkElement, pinkButtonBase)
export const pinkButtonStyles = clsx(buttonStyles, pinkButtonBase)

// BUTTON PINK
const lightPinkButtonBase = 'bg-pink-50 px-4 py-2 flex items-center gap-2'
const lightPinkButtonStylesForLinkElement = clsx(buttonStylesForLinkElement, lightPinkButtonBase)
export const lightPinkButtonStyles = clsx(buttonStyles, lightPinkButtonBase)

export const selectLinkStyle = (button: LinkProps['button'], className?: string) => {
  switch (button) {
    case true:
      return clsx(buttonStylesForLinkElement, className)
    case 'regular':
      return clsx(buttonStylesForLinkElement, className)
    case 'pink':
      return clsx(pinkButtonStylesForLinkElement, className)
    case 'lightPink':
      return clsx(lightPinkButtonStylesForLinkElement, className)
    default:
      return clsx(linkStyles, className)
  }
}
