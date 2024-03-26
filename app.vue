<template>
  <div class="containerr ">
    
    <NuxtLayout >  
      <!-- <NuxtLoadingIndicator color="#348feb" height="5" /> -->
      <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500" />
      <NuxtLoadingBar :duration="1000" />

        <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<script setup lang="ts">


  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
    
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>
<style>
.containerr{
  width:500px;
  max-width: 500px;
  margin: 0 auto;
  /* background-color: #020720; */
}

.page-enter-active, .page-leave-active{
  transition: all 0.5s;
  background-color: red;
}
.page-enter, .page-leave-active{
  opacity:0;
  transform:scale(0);
}
</style>

 
