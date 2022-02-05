module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
    siteUrl: 'https://gatsbystarterdefaultsource.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GATSBY_APP_API_KEY,
          authDomain: process.env.GATSBY_APP_AUTH_DOMAIN,
          databaseURL: process.env.GATSBY_APP_DATABASE_URL,
          projectId: process.env.GATSBY_APP_PROJECT_ID,
          storageBucket: process.env.GATSBY_APP_STORAGE_BUCKET,
          messagingSenderId: process.env.GATSBY_APP_MESSAGING_SENDER_ID,
          appId: process.env.GATSBY_APP_APP_ID,
        },
      },
    },
  ],
};
