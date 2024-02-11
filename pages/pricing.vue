<template>
 
  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
  <hr
    class="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

  <div style="border-style: solid;border-radius: 5px; border-width: 1px; background-color: #ededee;">
    <h1 style="font-size: 24px;" class="text-center p-3 text-dark">
      <img src="../assets/images/user.png" alt="" class="m-1" style="display: inline-block;" width="20">Pricing
    </h1>

  </div>




  <button type="button" style="" @click="aa()"
    class="text-white float-right block bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add
    expense
    <svg xmlns="http://www.w3.org/2000/svg" style="display: inline-block;" x="0px" y="0px" width="15" height="15"
      viewBox="0,0,256,256">
      <g fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter"
        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none"
        font-size="none" text-anchor="none" style="mix-blend-mode: normal">
        <g transform="scale(10.66667,10.66667)">
          <path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path>
        </g>
      </g>
    </svg></button>
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
   




