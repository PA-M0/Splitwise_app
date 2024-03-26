<!-- <template>
    <div>
        <article class="p-2"> 

            <div class="grid gap-x-8 gap-y-4 grid-cols-3">
                <nuxt-link to="/dashboard" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" to="/dashboard" class="w-6 h-6">
                    <path
                        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
            </nuxt-link>


                <div class="bg-gray-800 text-gray-50 rounded-lg  max-w-[150px] w-[100px] text-center m-auto" style="padding: 2px;">
                    <div class="bg-gray-50 text-gray-900 rounded-lg">my code</div>
                </div>

            </div>
        </article>
    </div>
</template> -->


<template>
    <qrcode-vue :value="value" :level="level" :render-as="renderAs" />
  </template>
  <script setup lang="ts">
    import { ref } from 'vue'
    import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
  
    const value = ref('qrcode')
    const level = ref<Level>('M')
    const renderAs = ref<RenderAs>('svg')
  </script>