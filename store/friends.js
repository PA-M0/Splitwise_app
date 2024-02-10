// store/friends.js

import { defineStore } from 'pinia';

export const useFriendsStore = defineStore('friends', {
  state: () => ({
    friends: [],
  }),

  actions: {
    addFriend(friend) {
      this.friends.push(friend);
      
    },

    removeFriend(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
    
  },
  getters: {
    getFriends() {
      return this.friends;
    },
  },
  
  
});

