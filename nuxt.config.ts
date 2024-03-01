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
 
  modules: [
      '@cssninja/nuxt-toaster',
      '@pinia/nuxt',
        
      // '@sidebase/nuxt-auth',
   ],
 
// runtimeConfig: {
//   mongoUrl: process.env.MONGO_URL,
// },
// nitro: {
//   plugins: ["~/server/index.ts"],
// },

  
   
   

})
