<!-- pages/friends-list.vue -->
<template>
    <div>
        <div v-for="(data, index) in friends" :key="index"
            class="w-full m-auto mt-2 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">fake Name{{ data.name }}</h5>
                <nuxt-link @click="openPopUp()"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                 
                    <v-dialog wid   th="500">
                        <template v-slot:activator="{ props }">
                            <nuxt-link v-bind="props" text="View all" style="cursor: pointer;"> </nuxt-link>
                        </template>
                    
                        <template v-slot:default="{ isActive }">
                            <v-card >
                                <v-card-text>
                                    <h2><b>fake name{{ data.name }}</b></h2><br>
                                  You own 200$
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn style="font-size: 12px;" text="Close Dialog" @click="isActive.value = false"></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </nuxt-link>


            </div>
            <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <img class="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg " alt="Neil image">
                            </div>
                            <div class="flex-1 min-w-0 ms-4">
                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Neil Sims
                                </p>
                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {{ data.email }}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {{ data.phone }}
                            </div>
                        </div>
                    </li>


                </ul>
            </div>
        </div>
    </div>

    <!-- <div>
        <h1>Friends List</h1>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{ friend.name }} - {{ friend.email }} - {{ friend.phone }}
      </li>
    </ul>
  </div>      
  <ul>
      <li v-for="(friend, index) in friendddd" :key="index">
        {{ friend.name }} - {{ friend.email }} - {{ friend.phone }}
      </li>
    </ul>   -->
</template>
  
<script>
import { useFriendsStore } from '~/store/friends';

export default {
    data() {
        return {
            alret: false,
            friendddd:[],
        }
    },
    computed: {
        friends() {
            const friendsStore = useFriendsStore();
            this.friendddd = friendsStore.getFriends
            console.log('Friendsdd Store:', friendsStore.getFriends);
            return friendsStore.getFriends;
        },

    },
    methods: {
        openPopUp() {
            this.alert = true;
          
            
        }
    }
};
</script>
  