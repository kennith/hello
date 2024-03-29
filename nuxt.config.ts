// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/hello/',
    buildAssetsDir: '/assets/'
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  nitro: {
    output: {
      publicDir: 'docs'
    }
  }
})
