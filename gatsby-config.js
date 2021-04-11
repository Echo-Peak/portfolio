require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const plugins = [
  'gatsby-plugin-sass',
  // {
  //   resolve: `gatsby-source-contentful`,
  //   options: {
  //     spaceId: SPACE_ID,
  //     accessToken: process.env.ACCESS_TOKEN,
  //   },
  // }
];

if (ANALYTICS_ID) {
  plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: ANALYTICS_ID,
    },
  });
}

module.exports = {
  plugins,
  siteMetadata: {
    title: `Portfolio`,
    siteLogo:'./test.png',
    seo:{
      meta:'test'
    }
  },
};
