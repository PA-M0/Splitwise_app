<template>
  <div class="border-sm">


    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex justify-between items-center mx-auto max-w-screen-xl">


          <form class="text-xs font-medium">
            <label for="default-search" class="text-sm font-small text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search"
                class="block p-4 ps-10 text-xs p-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-mygreenH focus:border-mygreenH dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mygreenH dark:focus:border-blue-500"
                placeholder="Search Friends ..." required>
              <button type="submit"
                class="text-white absolute  text-xs font-medium end-2.5 bottom-2.5 bg-mygreen hover:bg-mygreenH focus:ring-4 focus:outline-none focus:ring-mygreenH font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-mygreenH">Search</button>
            </div>
          </form>


          <div class="flex items-center lg:order-2">
            <a href="#"
              class="text-gray-800 text-xs font-medium dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log
              in</a>
            <a href="#"
              class="text-white text-xs font-medium bg-mygreen hover:bg-mygreenH focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get
              started</a>

          </div>

        </div>
      </nav>
    </header>


    <slot />
    
    <nav class="bg-white border-gray-20 w-[498px] fixed bottom-0  dark:bg-gray-900">


      <div id="navbar-user">
        <ul
          class="flex justify-around font-medium border border-gray-100 rounded-lg bg-gray-50  rtl:space-x-reverse  dark:bg-gray-800  dark:border-gray-700">

          <li>
            <nuxt-link to="/dashboard"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mygreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mygreen md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pricing"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mygreen md:p-0 dark:text-white md:dark:hover:text-mygreen dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/friends"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-mygreen md:p-0 dark:text-white md:dark:hover:text-mygreen dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Friends</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="py-1 text-center">
        <nuxt-link to="/dashboard">
          <img src="/assets/images/logo.svg" class="h-8 inline-block" alt="SplitWise Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white inline-block">SplitWise</span>
        </nuxt-link>
      </div>

    </nav>







  </div>
</template>
<script setup>
</script>


