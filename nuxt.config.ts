// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/css/main.css'],
  build: {
    transpile: ['vuetify',],
    
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@cssninja/nuxt-toaster',
      '@pinia/nuxt',
    
   ],
   axios: {
    baseURL: 'http://65.109.165.190:8200', // Proxy requests through your Nuxt.js server
  },
   proxy: {
    '/api/': {
      target: 'http://65.109.165.190:8200',
      pathRewrite: { '^/api/': '' },
    },
  },
   
   

})
