require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Carlos Coelho`,
    author: `Carlos Coelho`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
