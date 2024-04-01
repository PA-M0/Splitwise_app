<template>


  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex justify-between items-center mx-auto max-w-screen-xl">



        <form>
          <button type="submit" class="p-1.5 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

            <span class="sr-only">
              Search</span>
          </button>
        </form>




        <v-dialog max-width="450">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" elevation="0" class="text-purple-darken-2 text-center text-none"
              variant="text" text="Get SplitWise Pro!">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" class="inline-block ">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#DEC9F1" d="M9.017 0v5.724h9.018L14.73 0z" />
                  <path fill="#D0B3EB" d="M3.305 0L0 5.724h9.018V0z" />
                  <path fill="#4A276D" d="M9.017 5.724v15.619l9.018-15.62z" />
                  <path fill="#8F4ED3" d="M0 5.724l9.017 15.619V5.723z" />
                </g>
              </svg> Get SplitWise Pro!</v-btn>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card title="Splitwise Pro" class="bg-purple-darken-2 text-center m">


              <v-card-text class="bg-purple-darken-3 text-center mt-1"
                style="background-image: url('https://assets.splitwise.com/assets/core/facets.png');">
                <p class="text-left">Upgrade to</p>
                <h1 class="text-left text-2xl"><span class="font-black	">Splitwise</span> Pro
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" class="inline-block ">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#DEC9F1" d="M9.017 0v5.724h9.018L14.73 0z" />
                      <path fill="#D0B3EB" d="M3.305 0L0 5.724h9.018V0z" />
                      <path fill="#4A276D" d="M9.017 5.724v15.619l9.018-15.62z" />
                      <path fill="#8F4ED3" d="M0 5.724l9.017 15.619V5.723z" />
                    </g>
                  </svg>
                </h1>


                <ul class="max-w-md space-y-1 text-sm ml-5 mt-3 text-gray-300 list-inside dark:text-gray-400">
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50  dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Unlimited expenses
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50 dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Currency conversion
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50  dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Attach images and PDFs
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50  dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Receipt scanning
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50 dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Itemization
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50  dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Charts and graphs
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50   dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Expense search
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50  dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Save default splits
                  </li>
                  <li class="flex items-center">
                    <svg class="w-3.5 h-3.5 me-2 text-gray-50 dark:text-green-400 flex-shrink-0" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    PLus more goodies to come!
                  </li>
                </ul>
                <br>
                <v-btn href="https://www.splitwise.com/subscriptions/new" variant="outlined"
                  class="text-none flex flex-row justify-between " size="large" block>
                  <span class="mr-5">Monthly </span>
                  <span>$4.99</span>
                </v-btn>

                <v-btn href="https://www.splitwise.com/subscriptions/new" variant="outlined"
                  class="text-none mt-3 bg-purple-500  flex flex-row justify-between " size="x-large" block>
                  <svg class="w-4 h-4 me-2 text-gray-50 dark:text-green-400 flex-shrink-0" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="mr-5 ">Yearly </span>
                  <span>$39.99</span>
                </v-btn>
                <br>

                <v-btn href="https://www.splitwise.com/subscriptions/new"
                  class="text-none bg-green-600 flex flex-row justify-between " color="orange-darken-2" block>
                  <span>Get Splitwise Pro </span>

                </v-btn>
                <p class="text-gray-300 text-sm p-2 text-left mt-3"><b>Recurring billing, cancel anytime.</b> Your
                  subscription will be charged to your credit or debit card,
                  and auto-renews unless disabled 24 hours before the end of the bill cycle. You can manage your
                  subscription from your Account Settings page.</p>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text="Close" variant="text" class="text-none " @click="isActive.value = false"></v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>






      </div>
    </nav>
  </header>
  <div class="container">
    <div class="bg-gray-100" style="border-style: solid; border-width: 1px; ">
      <h1 style="font-size: 20px;" class=" p-1 text-gray-800">
        <img src="../assets/images/user.png" alt="" class="" style="display: inline-block;" width="20">Account
      </h1>

    </div>

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white p-3">Wellcome to SplitWise app</h5>

      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a href="#"
          class="w-full sm:w-auto bg-mygreenH hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
            </path>
          </svg>
          <div class="text-left rtl:text-right">
            <div class="mb-1 text-xs">Download on the</div>
            <div href="https://apps.apple.com/us/app/splitwise/id458023433"
              class="mt-1 font-sans text-sm font-semibold">
              Mac App Store</div>
          </div>
        </a>
        <a href="#"
          class="w-full sm:w-auto bg-purple-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg class="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play"
            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z">
            </path>
          </svg>
          <div class="text-left rtl:text-right">
            <div class="mb-1 text-xs">Get in on</div>
            <div href="https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile"
              class="mt-1 font-sans text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
    <section class="p-3  ">
      <h2 class="font-medium text- py-3">settings</h2>
      <div v-if="loading">
        <div role="status" class="max-w-sm p-4  p-2 mb-2">

          <div class="flex items-center mt-4">
            <svg class="w-14 h-14 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>

              <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="flex items-center p-2 gap-4" v-else>

        <img class="w-24 h-24 rounded-full border" v-show="updated" :src="avatar_path" alt="user-image">

        <Avatar v-model:path="avatar_path" @upload="updateProfile()" />
        <div class="font-normal ">
          <div>{{ user?.user_metadata.full_name }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400"><b>{{ user?.user_metadata.preferred_username }}</b>
          </div>

          <div class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}<b></b></div>

          <div class="text-sm text-mygreenH  cursor-pointer "><b class="text-gray-500">Role : </b>{{ user.role }}</div>

          <div class="text-sm text-gray-800 dark:text-gray-800"><span class="text-gray-500">sign up with </span> {{
            user?.app_metadata.provider }}</div>

          <div v-if="phone_number" class="text-sm text-gray-800 dark:text-gray-800"><span
              class="text-gray-500"><b>Phone:</b> </span> {{ user?.phone_number }}</div>
          <div v-else class="text-sm text-gray-800 dark:text-red-700" style="color: #b91c1c"><span
              class="text-gray-500"><b>Phone:</b> </span>
            not set up </div>


        </div>
      </div <hr>
      <div class="grid grid-cols-1 p-1 divide-y">

        <div class="p-3 text-base flex  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
          </svg>
          <span class="grow">Scan code</span>


          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>


        <div class="p-3 flex  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-3" width="18" height="22">
            <g fill="none" fill-rule="evenodd">
              <path fill="#DEC9F1" d="M9.017 0v5.724h9.018L14.73 0z" />
              <path fill="#D0B3EB" d="M3.305 0L0 5.724h9.018V0z" />
              <path fill="#4A276D" d="M9.017 5.724v15.619l9.018-15.62z" />
              <path fill="#8F4ED3" d="M0 5.724l9.017 15.619V5.723z" />
            </g>
          </svg>
          <nuxt-link to="/splitwisePro" class="grow">Splitwise Pro</nuxt-link>


          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </div>
      <h2 class="font-medium text- py-3">Perferences</h2>
      <div class="grid grid-cols-1 p-1 divide-y">
        <div class="p-3  flex  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 mr-3 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
          </svg>


          <span class="grow">Notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div class="p-3 flex  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 mr-3 h-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>

          <span class="grow">Passcode</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>


      </div>

      <h2 class="font-medium text- py-3">Feedback</h2>
      <div class="grid grid-cols-1 p-1 divide-y">
        <div class="p-3 flex  cursor-pointer">
          <img src="../assets/images/star.png" class="w-5 h-5 mr-3" alt="">
          <span class="grow">Rate Splitwise</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

        <div class="p-3 flex  cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>

          <span class="grow">Contact Us</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>







      </div>
    </section>
    <section>


      <div>
        <nuxt-btn class="text-mygreenH block text-center cursor-pointer" @click="signOut()" :disabled="loading">Log
          Out</nuxt-btn>
      </div>
      <div class="text-gray-500 mx-auto w-[200px]">
        <p class="mx-auto text-sm text-center">Made with Love Parsa Shafagh (PA_M0)
        </p>

        <div class="flex justify-between">
          <span class="mx-auto text-sm text-center text-blue-400">
            <a href="https://github.com/PA-M0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-4 inline-block h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
              </svg>
              github</a>
          </span>
          <span class="mx-auto text-sm text-center text-blue-400">
            <a href="mailto:recipient@example.com?subject=Splitwise%20App&body=Body%20Text%20Here"><svg
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 inline-block h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
              email</a>
          </span>
        </div>


      </div>
    </section>
    <br><br><br><br><br>


  </div>

</template>



<script lang="ts" setup>

import { supabase } from '@/plugins/supabase'

const supabase = useSupabaseClient()


const username = ref('')
const website = ref('')
const avatar_path = ref('')
const email = ref('')
const phone_number = ref('')
const isOpen = ref(false)


const loading = ref(true)
loading.value = true
const user = useSupabaseUser()
let updated = false

//getting data(username, website ,email ...) from db by supabase 
const { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url, email, phone_number`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
  email.value = user.value?.email
  phone_number.value = data.phone_number

}

loading.value = false


try {
  //adding email to db because when a user login with social login (google or github) we do not have his email directly
  const { data, error } = await supabase
    .from('profiles')
    .update({ email: email.value })
    .eq('id', user.value.id);



  // Update successful
  console.log('Email updated successfully');

} catch (error) {
  console.error('Update error:', error.message);
}






async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    }

    const { error } = await supabase
      .from('profiles')
      .upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {

    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    await navigateTo('/login')

  } catch (error) {
    alert(error)
  } finally {
    loading.value = false
  }
}
definePageMeta({
  middleware: 'auth'
})

</script>