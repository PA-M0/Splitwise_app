<template>

    <div v-if="showToast" id="toast-warning"
        class="flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert">
        <div
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span class="sr-only">Warning icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">User not Found..</div>
        <button type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-warning" aria-label="Close">
            <span class="sr-only" @click="closeToast()">Close</span>
            <svg @click="closeToast()" class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
        </button>
    </div>


    <FriendList />
  

    <v-row justify="end" class="mt-2">
        <v-dialog v-model="dialog" persistent max-width="450">
            <template v-slot:activator="{ props }">
                <v-btn class="text-none m-auto" size="large" variant="outline" style="border: #309178 solid 2px;border-color: #309178; color:#20543F; border-radius:5px; font-size:12px;" v-bind="props">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 inline-block mr-1 text-mygreenH">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <span class="font-bold text-mygreenH"><b>Add more friends</b></span>
                   
                </v-btn>
            </template>
            <v-card class="max-w-md">
                <v-card-title class="text-center ">
                    <v-btn style="color:#58C3A7" class="text-none mr-5  text-sm" variant="text" @click="dialog = false">
                        Cancel
                    </v-btn>

                    <span class="text-md"><strong>Add friends </strong></span>
                    <v-btn style="color:#58C3A7" class="text-none ml-5 text-sm" variant="text" @click="dialog = false">
                        Next
                    </v-btn>

                </v-card-title>
                <v-card-text>
                    <v-container>
                        <div>
                            <v-card variant="tonal" color="teal-darken-4">
                                <v-tabs align-tabs="center" color="teal-lighten-1 " v-model="tab">
                                    <v-tab value="one" class="text-none">Email</v-tab>
                                    <v-tab value="two" class="text-none">Phone</v-tab>

                                </v-tabs>

                                <v-card-text>
                                    <v-window v-model="tab">
                                        <v-window-item value="one">
                                            <v-row>
                                                <v-col>
                                                    <form @submit.prevent="search_friend_by_email()"
                                                        class="max-w-sm mx-auto">
                                                        <div class="mb-5 mt-3">
                                                            <label for="email"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Your
                                                                email</label>
                                                            <input type="email" v-model="formData.email" id="email"
                                                                class=" bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-darken-2 focus:border-green-700 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="example@gmail.com" required>
                                                        </div>


                                                        <button type="submit"
                                                            class="text-white bg-mygreenH hover:bg-mygreenH focus:ring-4 focus:outline-none focus:ring-teal-darken-2 font-medium rounded-lg text-sm  px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                                    </form>
                                                </v-col>


                                            </v-row>
                                        </v-window-item>

                                        <v-window-item value="two">
                                            <v-row>
                                                <v-col>
                                                    <form @submit.prevent="submitForm" class="max-w-sm mx-auto">

                                                        <div class="mb-5 mt-3">
                                                            <label for="tel"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                                phone</label>
                                                            <input type="tel" v-model="formData.phone" id="phone"
                                                                class="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="09123456789" required>
                                                        </div>

                                                        <button type="submit"
                                                            class="text-white bg-mygreenH hover:bg-mygreenH focus:ring-4 focus:outline-none focus:ring-teal-darken-2 font-medium rounded-lg text-sm  px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                                    </form>
                                                </v-col>


                                            </v-row>
                                        </v-window-item>


                                    </v-window>
                                </v-card-text>
                            </v-card>
                        </div>




                    </v-container>

                </v-card-text>
                <v-card-actions>



                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    <section>
        <div>

        </div>

    </section>

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
import { supabase } from '@/plugins/supabase'
const user = useSupabaseUser()

export default {
    data() {
        return {
            tab: null,
            dialog: false,
            formData: {
                phone: '',
                email: '',

            },
            userData: [],
            isLoading: false,
            friendsList: [],
            showToast: false,
            friend_full_name: '',
            friend_avatar_url: '',
            friend_email: ''
        };
    },
    computed() {
        // Fetch friend's information when the component is mounted
        this.showFriendCard()
    },
    methods: {
        async submitForm() {
            try {
                this.showToast = false;
                // Access form data here

                this.isLoading = true
                const response = await axios.post('https://httpbin.org/post', this.formData);

                this.isLoading = false


                let validRes = true;
                if (validRes) {
                    const newUserData = response.data;

                    this.userData.push(newUserData)
                    // friendsStore.addFriend(newUserData);
                    useFriendsStore().addFriend(newUserData);
                    // console.log(useFriendsStore().getFriends)
                    this.friendsList = useFriendsStore().getFriends;

                    this.formData.email = '';
                    this.formData.phone = '';
                } else {
                    this.showToast = true;
                }

            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
        closeToast() {
            this.showToast = false;
        },
        async search_friend_by_email() {

            console.log(this.formData.email)

            // it search to db to find target user is exists, if not throw to catch
            try {
                let { data: _id, error } = await supabase
                    .from('profiles')
                    .select('id')
                    .eq('email', this.formData.email)

                if (error) throw error

                const targetFriendId = _id[0].id;


                //it will add the friendship request into the db
                try {

                    const { data, error } = await supabase
                        .from('friends')
                        .insert([
                            { user_id: user.value.id, friend_id: targetFriendId, status: 'pending' },
                        ])
                        .select()


                    console.log(' successfully');


                    this.showFriendCard(targetFriendId)



                } catch (error) {
                    console.error('Update error:', error.message);
                }



            } catch (error) {
                console.log("user not found.")
                alert("User not found, please invite your friend first.")
            }
        },
        async showFriendCard(targetFriendId) {
            try {
                let { data: cardInfo, error } = await supabase
                    .from('profiles')
                    .select('full_name,avatar_url,email')
                    .eq('id', targetFriendId)
                    .single()

                if (cardInfo) {
                    this.friend_full_name = cardInfo.full_name
                    this.friend_avatar_url = cardInfo.avatar_url
                    this.friend_email = cardInfo.email
                }

                const friendsStore = useFriendsStore();
                friendsStore.addFriend(cardInfo);
                this.frienList = friendsStore.getFriends

                console.log(this.friend_avatar_url)
            } catch (error) {
                console.log(error)
            }
        }

    }
};
</script>