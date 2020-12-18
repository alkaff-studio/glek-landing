module.exports = {
  siteMetadata: {
    title: `Glek`,
    description: `Hausnya Hilang Berkahnya Datang`,
    author: `@isfawwaz`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Glek`,
        short_name: `Glek`,
        start_url: `/`,
        background_color: `#72dce3`,
        theme_color: `#72dce3`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            debug: true,
          },
        },
        precision: 6
      }
    },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: 'https://gmail.us7.list-manage.com/subscribe/post?u=5daa10040e5fd5ca5907f9172&amp;id=637a080d1d', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: '/images/*\.svg$/'
      }
    }
  ],
};
