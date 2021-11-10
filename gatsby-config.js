module.exports = {
  siteMetadata: {
    description: "Personal page of Matt Markham",
    locale: "en",
    title: "Matt Markham",
    formspreeEndpoint: "https://formspree.io/f/xdoyrqvb",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-blue",
      },
    },
  ],
};
