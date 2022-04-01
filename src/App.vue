<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HomePage.vue'
</script>

<template>
  <section class="flex">
    <div class="flex-1 w-full bg-[url('src/assets/github.jpg')] bg-cover bg-center h-[350px]">
      <img src="/src/assets/git-logo.png" class="mx-auto mt-[100px] h-[100px]">
      <h2 class="text-3xl text-white pt-12">List Game of Thrones book</h2>
    </div>
  </section>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
