
<template>

<div v-if="showToast" id="toast-warning" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
        </svg>
        <span class="sr-only">Warning icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">User not Found..</div>
    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
        <span class="sr-only" @click="closeToast()">Close</span>
        <svg @click="closeToast()" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>


    <v-row justify="end">
        <v-dialog v-model="dialog" persistent width="1024">
            <template v-slot:activator="{ props }">
                <v-btn style="background-color:#2459D8; color:white; border-radius:9px; font-size:12px;" v-bind="props">
                    Add more friend
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="evenodd" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <g transform="scale(10.66667,10.66667)">
                                <path d="M11,2v9h-9v2h9v9h2v-9h9v-2h-9v-9z"></path>
                            </g>
                        </g>
                    </svg>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5 "><strong>Add your friend </strong></span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col>
                                <form @submit.prevent="submitForm" class="max-w-sm mx-auto">
                                    <div class="mb-5">
                                        <label for="email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                            email</label>
                                        <input type="email" v-model="formData.email" id="email"
                                            class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@flowbite.com" required>
                                    </div>
                                    <div class="mb-5">
                                        <label for="tel"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                            phone</label>
                                        <input type="tel" v-model="formData.phone" id="phone"
                                            class="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required>
                                    </div>

                                    <button type="submit" @click="dialog = false"
                                        class="text-white  bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </form>
                            </v-col>


                        </v-row>
                    </v-container>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn style="color:#1A3A93" variant="text" @click="dialog = false">
                        Close
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>


    <div class="container">
        <div v-if="isLoading">
            <Loading title="Loading..." />
        </div>
        <div v-else>
        
        </div>
    </div>
    



    
  
</template>






<script>
import axios from 'axios'
import { ref } from 'vue';
import { useFriendsStore } from '~/store/friends';

export default {
    data() {
        return {
            dialog: false,
            formData: {
                phone: '',
                email: '',

            },
            userData: [],
            isLoading: false,
            friendsList:[],
            showToast:false,
        };
    },

    methods: {
        async submitForm() {
            try {
                this.showToast=false;
                // Access form data here
                console.log('Form Data:', this.formData.email);
                this.isLoading = true
                const response = await axios.post('https://httpbin.org/post', this.formData);

                this.isLoading = false
                
             
                let validRes = true;
                if(validRes){
                const newUserData = response.data;

                this.userData.push(newUserData)
               // friendsStore.addFriend(newUserData);
                useFriendsStore().addFriend(newUserData);
               // console.log(useFriendsStore().getFriends)
                this.friendsList = useFriendsStore().getFriends;
                
                this.formData.email = '';
                this.formData.phone = '';
                }else{
                    this.showToast = true;
                }
                
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
        closeToast(){
            this.showToast = false;
        }
       
    }
};
</script>