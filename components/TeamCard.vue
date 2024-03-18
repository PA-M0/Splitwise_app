<template>
  <div>
    <div  v-for="employee in myTeam"
      class="flex flex-col mb-3  border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
      <div class="flex flex-row">
        <div>
          <img
            :src="employee.imageUrl"
            class="rounded-full w-20 h-20 m-3 object-cover	" alt="" />
        </div>
        <div class="flex p-5  flex-col items-start">
          <h3 class="text-xl font-medium">{{ employee.name }}
          </h3>
          <div>{{ employee.position }}</div>

        </div>
      </div>
      <div>
        <p class="p-1 text-left text-sm">
          {{ employee.description }}
        </p>

      </div>
    </div>









  </div>
</template>

<script setup lang="ts">
import { emit } from 'process';
import { addEmitHelper } from 'typescript';
import { ref } from 'vue';
const myTeam = [
{ name: 'Jonathan Bittner', position: 'CEO', description:'Jon is a former astrophysics grad student at Harvard who thinks quantitative fairness is pretty fun. He loves surveys, wombats, and his wife, Rebecca.', imageUrl:'https://splitwise.s3.amazonaws.com/uploads/employee/image/1/5cf7879c-968c-471e-92b1-1e8ce9414737.png' },
{ name: 'Ryan Laughlin', position: 'CTO', description:'Ryan likes building cool stuff for you! When not staring at a screen full of Ruby or CSS, he enjoys singing, drumming, working on strange art projects, and playing a little too much Splatoon. 🦑', imageUrl:'https://splitwise.s3.amazonaws.com/uploads/employee/image/2/e35dfcdf-96a7-4c4d-9f23-5323481fc6f3.png'},
{ name: 'Marshall Weir', position: 'iOS & Android', description:'Marshall is a mobile developer who has worked for Mobiata and other awesome companies. In his spare time, he is a glass-blower and a board game enthusiast.', imageUrl:'https://splitwise.s3.amazonaws.com/uploads/employee/image/3/9695bf54-afdd-43fc-b13e-86529f95413c.png'},
{ name: 'Lucas Eras Paiva', position: 'Server engineer', description:'Lucas recently graduated from Wesleyan University, where he studied Computer Science and Anthropology. He was born and raised in Brazil, and is excited to visit his family in the holidays.', imageUrl:'https://splitwise.s3.amazonaws.com/uploads/employee/image/14/147f855a-d393-4c52-bede-e59199c916e2.png'},
{ name: 'Paula Burke', position: 'Senior server engineer', description:'Paula is a backend software engineer who often finds herself working on infrastructure and security projects. In her free time, she reads, hikes, and tries to keep her cat out of trouble.', imageUrl:'https://splitwise.s3.amazonaws.com/uploads/employee/image/33/cb89795e-05b9-4bb7-b34a-7d00b27a2fa8.jpeg'},
{ name: 'Parsa Shafagh', position: 'Front-End Developer', description:'Parsa   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl:'../assets/images/justForFun.jpg'},


]


// Expose props directly

</script>