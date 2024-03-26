<template>
  <div class="border-sm h-full">





    <slot />


    <div class="bg-white border  w-[498px] fixed bottom-0" style="z-index: 999;">
      <div class="grid h-full pt-2 max-w-lg grid-cols-5 mx-auto font-medium">
        <nuxt-link to="/friends">
          <button type="button"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">
            <svg
              class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-mygreenH focus:text-mygreenH dark:group-hover:text-blue-500"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>


            <span
              class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-mygreenH  dark:group-hover:text-blue-500">Friends</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/pricing">
          <button type="button"
            class="inline-flex flex-col items-center justify-center px-5  border-gray-200 group-hover:text-mygreenH dark:hover:bg-gray-800 group dark:border-gray-600">
            <svg
              class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
              <path
                d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
            </svg>
            <span
              class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500">Pricing</span>
          </button>
        </nuxt-link>
        <div class="text-center">
          <nuxt-link to="/dashboard">
            <img src="/assets/images/logo.svg" class="h-8 inline-block" alt="SplitWise Logo" />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-mygreenH inline-block">SplitWise</span>
          </nuxt-link>
        </div>
        <nuxt-link to="/about">
          <button type="button"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-200 group-hover:text-mygreenH dark:hover:bg-gray-800 group border-x dark:border-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor"   class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>

            <span
              class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500">About</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/dashboard">
          <button type="button"
            class="inline-flex flex-col items-center justify-center px-5 border-gray-200 group-hover:text-mygreenH dark:hover:bg-gray-800 group border-x dark:border-gray-600">
            <svg
              class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span
              class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-mygreenH dark:group-hover:text-blue-500">Profile</span>
          </button>
        </nuxt-link>
      </div>
    </div>





    <!-- <nav class="bg-white border-gray-20 w-[498px] fixed bottom-0  dark:bg-gray-900">


      <div id="navbar-user">
        <ul
          class="flex justify-around font-medium border border-gray-100  bg-gray-50  rtl:space-x-reverse  dark:bg-gray-800  dark:border-gray-700">

          <li>
            <nuxt-link to="/friends"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mygreenH md:p-0 dark:text-white md:dark:hover:text-mygreen dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Friends</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pricing"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mygreenH md:p-0 dark:text-white md:dark:hover:text-mygreen dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</nuxt-link>
          </li>
          <div class="py-1 text-center">
            <nuxt-link to="/dashboard">
              <img src="/assets/images/logo.svg" class="h-8 inline-block" alt="SplitWise Logo" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white inline-block">SplitWise</span>
            </nuxt-link>
          </div>
          <li>
            <nuxt-link to="/about"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mygreenH md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</nuxt-link>
          </li>



          <li>
            <nuxt-link to="/dashboard"
              class="block py-2  px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-mygreenH md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="26" height="26" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" />
              </svg>
              Account</nuxt-link>
          </li>
        </ul>
      </div>



    </nav> -->







  </div>
</template>

<script setup>
</script>
