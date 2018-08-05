module.exports = {
  siteMetadata: {
	title: 'Design+Code 3',
	description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'ed25elwuynzy',
        accessToken: '7398814b66079f47525cb752f0d5c08776b6d74ed03cc3c89323eebb9acf9013'
      }
    }
],
}