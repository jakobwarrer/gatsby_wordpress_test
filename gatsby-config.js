module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'flexbogforing.dev.dedi1542.your-server.de',
        protocol: 'http',
        // auth: {
        //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //   // to access endpoints that are protected with .htaccess.
        //   htaccess_user: 'Frontend',
        //   htaccess_pass: 'cms4atweb',
        //   htaccess_sendImmediately: false,
        // },
        verboseOutput: false,
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}
