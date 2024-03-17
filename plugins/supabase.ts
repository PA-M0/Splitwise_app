
    import { createClient } from '@supabase/supabase-js'
    const supabaseUrl = "https://nieskdugmwyminyuisza.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pZXNrZHVnbXd5bWlueXVpc3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MTgzNTUsImV4cCI6MjAyNDE5NDM1NX0.JBwWRzR7ohh7nRWj5dEa1TOx-xXLRmGM2Oo5akHRaWk"

    export const supabase = createClient(supabaseUrl, supabaseKey);
    
    export default defineNuxtPlugin((supabase) => {})