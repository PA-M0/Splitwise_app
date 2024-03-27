<template>
 
  
 <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex justify-between items-center mx-auto max-w-screen-xl">



        <form>
          <button type="submit" class="p-1.5 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
    class=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

    <div class="bg-gray-100" style="border-style: solid; border-width: 1px; ">
      <h1 style="font-size: 20px;" class=" p-1 text-gray-800">
        <img src="../assets/images/user.png" alt="" class="" style="display: inline-block;" width="20">Pricing
      </h1>

    </div>


  
    <p>i'm working on it</p>
  <br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br>
  
</template>




<script >
import axios from 'axios';
import { ref } from 'vue'
import { useFriendsStore } from '~/store/friends';

export default {
  methods: {
    aa() {
      const friendsStore = useFriendsStore();
      console.log("11:")
      console.log(friendsStore)
    }
  },
}


</script>
   




