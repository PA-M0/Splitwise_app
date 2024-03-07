
<template>
   
   <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex justify-between items-center mx-auto max-w-screen-xl">



          <form>
            <button type="submit" class="p-1.5 ">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>



          <a href="#" class="text-mygreenH  dark:text-white hover:text-green-100">Add friends</a>



        </div>
      </nav>
    </header>

    
 <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> 
<hr
  class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
 
 <div style="border-style: solid;border-radius: 5px; border-width: 1px; background-color: #ededee;">
   <h1 style="font-size: 24px;" class="text-center p-3 text-dark">
    <img src="../assets/images/user.png" alt="" class="m-1" style="display: inline-block;" >Friends</h1>
   
 </div>

 



 


 <div class="m-5">
    <AddFriendBtn />
</div>

 
 <!-- <div class="mt-2 text-center">
   <button  @click="addFriend()" type="button" class="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add more friends</button>
  
 </div> -->
 
 
<div>
  <Friend_list />
</div>

 <br><br><br><br><br><br><br><br><br><br><br><br>

 <br><br><br><br><br><br><br><br><br><br><br><br>



   
   </template>
   
   <script>
   import axios from 'axios';
   import { ref } from 'vue'




   export default {
     data() {
       return {
         apiData: [],
        
       
       };
     },
     async mounted() {
       try {
         // Adjust the URL to match your API endpoint
         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
   
         // Update the data property with the fetched data
         this.apiData = response.data;
       } catch (error) {
         // Handle error
         console.error('Error fetching data:', error);
       }
     },
     methods:{
       
        addFriend(){
           
            
            
        }
     }
   };
   </script>
   