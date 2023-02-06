/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.zinc,
      yellow: {
        50: '#FEFAF0',
        100: '#FCEDC5', // wzb light
        200: '#F9DD94',
        300: '#F7CE66',
        400: '#F4BE34', // wzb primary
        500: '#E9AB0C',
        600: '#B8870A', // wzb dark
        700: '#886407',
        800: '#574005',
        900: '#271C02',
      },
      blue: {
        50: '#ECF2F9',
        100: '#D5E3F1',
        200: '#AFC9E4',
        300: '#87B3E2',
        400: '#6295CA',
        500: '#3F7BBB',
        600: '#326295',
        700: '#25496F',
        800: '#183049',
        900: '#0C1722',
      },
      green: {
        50: '#EDF7F3',
        100: '#C6E6D5',
        200: '#A3D7C1',
        300: '#7FC7A9',
        400: '#5BB891',
        500: '#449C77',
        600: '#3E8E6C',
        700: '#255541',
        800: '#163226',
        900: '#060E0B',
      },
      pink: {
        50: '#FFECF5',
        100: '#F9AED1',
        200: '#F67FB7',
        300: '#F24F9C',
        400: '#EF2081',
        500: '#CE0F69',
        600: '#9D0B50',
        700: '#6D0838',
        800: '#3E0420',
        900: '#0E0107',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
