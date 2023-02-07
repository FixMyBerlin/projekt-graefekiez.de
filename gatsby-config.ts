import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Projekt Graefekiez Berlin`,
    siteUrl: `https://projekt-graefekiez.berlin`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Projekt Graefekiez Berlin',
        short_name: 'Graefekiez',
        start_url: '/',
        background_color: 'white',
        theme_color: '#fff8e8',
        icon: 'src/images/logos/logo-bezirksamt.png',
        display: 'minimal-ui', // https://developer.mozilla.org/en-US/docs/Web/Manifest/display#values
        legacy: false,
        lang: 'de-DE', // https://developer.mozilla.org/en-US/docs/Web/Manifest/lang
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      // options: {
      //   mdxOptions: {
      //     remarkPlugins: [],
      //     rehypePlugins: [],
      //   },
      // },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`,
    //   },
    // },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}

export default config
