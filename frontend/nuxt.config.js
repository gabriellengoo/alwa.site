import { defineNuxtConfig } from "nuxt";

export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ALWA',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // bridge : {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    '@/assets/css/grid.css',
    '@/assets/css/images.css',
    '@/assets/css/transitions.css',
    '@/assets/css/typography.css',
    // SCSS file in the project
    // '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@plugins/masonry', mode: 'client' },
    { src: '@plugins/lazy', mode: 'client' },
    { src: '@plugins/slider', mode: 'client' },
    '~/plugins/preview.client.js',
  ],
  gsap: {
    /* Module Options */
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // "@nuxtjs/sanity",
    // '@nuxtjs/sanity/module',
    'nuxt-gsap-module',
    '@nuxtjs/sanity/module',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@nuxtjs/sanity'
  ],
  sanity: {
    // module options
    projectId: 't4wk0gbl',
    apiVersion: '2023-09-05'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders: {
    //   sass: {
    //     implementation: require('sass'),
    //   },
    //   scss: {
    //     implementation: require('sass'),
    //   },
    // },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  image: {
    sanity: {
      projectId: 't4wk0gbl',
      dataset: 'production',
    },
  },
}