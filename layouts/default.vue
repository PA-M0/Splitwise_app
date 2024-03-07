<template>
  <div class="border-sm h-full">


   


    <slot />

    <nav class="bg-white border-gray-20 w-[498px] fixed bottom-0  dark:bg-gray-900">


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



    </nav>







  </div>
</template>

<script setup>
</script>
