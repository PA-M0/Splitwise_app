<template>
  <div>
    <a href="https://flowbite.com/" class="flex  mb-4 mt-5">

      <span class="text-2xl font-semibold m-auto whitespace-nowrap dark:text-white">SplitWise</span>
    </a>

    <v-card class="mx-auto pa-12 pb-8" elevation="10" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis" name="email">Email</div>

      <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
        variant="outlined" v-model="formData.email"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
          Forgot login password?</a>
      </div>

      <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
        @click:append-inner="visible = !visible" v-model="formData.password"></v-text-field>

      <v-card class="mb-12" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If
          you must login now, you can also click "Forgot login password?" below to reset the login password.
        </v-card-text>
      </v-card>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="submitForm">
        Log In
      </v-btn>
      <v-card-text class="text-center">
        <v-btn block color="white" variant="tonal">
          <nuxt-link class="text-blue s text-decoration-none" style="font-size: 12px;" to="/signup">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>

          </nuxt-link>
        </v-btn>

      </v-card-text>

    </v-card>
  </div>
</template>
<script>
import axios from 'axios';
definePageMeta({
  layout: 'custom'
})
export default {
  data() {
    return {
      visible: false,
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.formData) {
          console.error('formData is not initialized.');
          return;
        }

        const response = await this.$axios.post('https://jsonplaceholder.typicode.com/users', this.formData);
        // console.log(this.formData.email)
        // Handle the response as needed
        console.log('Backend response:', response.data);
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
      }
    }

  }

}
</script>