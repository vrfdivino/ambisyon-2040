const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://juan-learns-to-code.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '<p>Juan Learns to Code</p>',
    logoLink: 'https://juan-learns-to-code.netlify.app/',
    title: 'asdff',
    githubUrl: 'https://github.com/vrfdivino/ambisyon-2040',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/setup',
      '/io',
      '/data-types',
      '/functions',
      '/conditionals',
      '/loops',
      '/data-structures',
      '/project',
      '/conclusion',
    ],
    collapsedNav: [
      // '/codeblock', // add trailing slash if enabled above
      // '/data-types',
    ],
    links: [{ text: 'Edit in Github', link: 'https://github.com/vrfdivino/ambisyon-2040' }],
    frontline: false,
    // ignoreIndex: true,
    title: '<p>Intro to Programming</p>',
  },
  siteMetadata: {
    title: 'Intro to Programming / Juan Learns to Code',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://juan-learns-to-code.netlify.app/',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/introduction',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
