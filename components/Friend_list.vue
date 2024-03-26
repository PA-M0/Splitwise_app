<!-- pages/friends-list.vue -->
<template>
    <div>
        <div 
            class="w-full m-auto mt-2 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">My Friends</h5>
                <nuxt-link @click="openPopUp()"
                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                 
                  
                </nuxt-link>


            </div>
            <div class="flow-root" v-for="(data, index) in friends" :key="index" >
                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                    <li class="py-3 sm:py-4">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <img class="w-8 h-8 rounded-full" :src="data.avatar_url" alt="my friend">
                                </div>
                                <div class="flex-1 min-w-0 ms-4">
                                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {{ data.full_name }}
                                    </p>
                                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {{ data.email }}
                                    </p>
                                </div>
                                <div
                                    class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>
                       


                </ul>
            </div>
        </div>
    </div>

   
</template>
  
<script>
import { useFriendsStore } from '~/store/friends';

export default {
    data() {
        return {
            alret: false,
            friendddd:[],
            showFriend:false,
        }
    },
    computed: {
        friends() {
            const friendsStore = useFriendsStore();
            this.friendddd = friendsStore.getFriends
            console.log('Friendsdd Store:', friendsStore.getFriends.length);
            return friendsStore.getFriends;
        },

    },
    methods: {
        openPopUp() {
            this.alert = true;
          
            
        }
    },
    mounted(){
        if(friendsStore.getFriends.length > 0){
            this.showFriend = true
        }
        
    }
};
</script>
  