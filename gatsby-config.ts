import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  flags: {
    // https://www.gatsbyjs.com/docs/debugging-html-builds/#ssr-during-gatsby-develop
    // Hopefully helps with https://github.com/gatsbyjs/gatsby/issues/9911#issuecomment-846318739
    DEV_SSR: true,
  },
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
      options: {
        extensions: [`.mdx`, `.md`],
        //   mdxOptions: {
        //     remarkPlugins: [],
        //     rehypePlugins: [],
        //   },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    // Required https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/#mdxprovider
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
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
