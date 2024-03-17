<template>
  <div class="containerr ">
    
    <NuxtLayout >  
      <NuxtLoadingIndicator />
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
}
</style>

 
