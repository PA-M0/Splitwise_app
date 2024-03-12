// plugins/supabase.js




// export default ({ app }, inject) => {
//   const supabaseUrl = 'https://nieskdugmwyminyuisza.supabase.co'
//   const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZXNrZHVnbXd5bWlueXVpc3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTgzNTUsImV4cCI6MjAyNDE5NDM1NX0.JBwWRzR7ohh7nRWj5dEa1TOx-xXLRmGM2Oo5akHRaWk'

  
//   const supabase = createClient(supabaseUrl, supabaseKey)
//   inject('supabase', supabase)
// }


// const supabaseUrl = 'https://nieskdugmwyminyuisza.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZXNrZHVnbXd5bWlueXVpc3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTgzNTUsImV4cCI6MjAyNDE5NDM1NX0.JBwWRzR7ohh7nRWj5dEa1TOx-xXLRmGM2Oo5akHRaWk'

// const supabase = createClient(supabaseUrl, supabaseKey)

// export default ({ app }, inject) => {
//   app.$supabase = supabase
//   inject('supabase', supabase)
// }
// export const supabase = createClient(supabaseUrl,)



// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://nieskdugmwyminyuisza.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// export const supabase = createClient(supabaseUrl, supabaseKey)



import { createClient } from '@supabase/supabase-js'
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
