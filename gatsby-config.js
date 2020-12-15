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
        precision: 6
      }
    },
  ],
};
