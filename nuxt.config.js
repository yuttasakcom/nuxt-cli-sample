const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Shop' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css'
      }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.min.js' },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['~assets/styles/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-2dc64.firebaseio.com',
    credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-2dc64.firebaseio.com',
    fbAPIKey: 'AIzaSyCN4OXYGlIMlctSGA8ZeeFm5QXZMBDeZfU'
  }

  // transition: {
  //   name: 'fade',
  //   mode: 'out-in'
  // }
}
