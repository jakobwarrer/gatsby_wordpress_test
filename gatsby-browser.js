/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

plugins: [
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      baseUrl: 'lexbogforing.dev.dedi1542.your-server.de',
      protocol: 'http',
      hostingWPCOM: false,
      useACF: true,
    },
  },
]
