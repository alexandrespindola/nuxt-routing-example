// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/projects',
      ]
    },
    plugins: ['~/server/index.ts'],
  }  
})
