<template>
  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
  <div class="p-3 flex justify-between">
    <nuxt-link to="/dashboard" class="grow">
      <img src="/assets/images/logo.svg" class="h-8 inline-block" alt="SplitWise Logo" />
      <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white inline-block">SplitWise</span>
    </nuxt-link>
    <nuxt-btn type="button" to="/login"
      class="text-mygreen  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log
      in</nuxt-btn>
    <nuxt-btn type="button" to="/signup"
      class="text-white bg-mygreen hover:bg-mygreenH focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign
      up</nuxt-btn>

  </div>

  <div class="md:container text-center max-w-[400px] md:mx-auto">



  


    <section class="p-5 w-[450px] mx-auto"style="background-image: url('https://assets.splitwise.com/assets/core/facets.png');">



      <h1 class="mb-2  text-4xl text-left font-bold tracking-tight text-gray-900 dark:text-white ">What is Splitwise?</h1>
      <p class="mb-3 font-normal  text-left text-gray-700 dark:text-gray-400">Splitwise is a Providence, RI-based
        company that makes it easy to split bills with friends and family. We organize all your shared expenses and IOUs
        in one place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with
        roommates, or paying someone back for lunch, Splitwise makes life easier. We store your data in the cloud so
        that you can access it anywhere: on iPhone, Android, or on your computer</p>
      <h3 class="mb-2 text-md text-left font-bold tracking-tight text-gray-900 dark:text-white">We focuse on fairness
      </h3>
      <p class="mb-3 font-normal text-left text-gray-700 dark:text-gray-400">Splitwise is a Providence, RI-based company
        that makes it easy to split bills with friends and family. We organize all your shared expenses and IOUs in one
        place, so that everyone can see who they owe. Whether you are sharing a ski vacation, splitting rent with
        roommates, or paying someone back for lunch, Splitwise makes life easier. We store your data in the cloud so
        that you can access it anywhere: on iPhone, Android, or on your computer.</p>
        <img src="https://secure.splitwise.com/assets/core/logo-faceted.svg" class="w-100 bg-opacity-50 lg:block">

    </section>

    <section>
      <h2 class="mb-2 p-4  text-3xl text-left font-bold tracking-tight text-gray-900 dark:text-white">Meet the team</h2>

    <TeamCard   />
    

    </section>



  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>



</script>