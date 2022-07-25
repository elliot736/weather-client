<template>
  <div class="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <router-link class="hover:text-gray-900 mr-5" to="/">Home</router-link>
        <router-link class="hover:text-gray-900 mr-5" to="/pollen"
          >Pollen</router-link
        >
        <router-link class="hover:text-gray-900 mr-5" to="/about"
          >About</router-link
        >
      </nav>
      <a
        class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
      >
        <img class="w-[4rem] text-white p-2" src="./assets/logo.png" alt="" />
        <span class="ml-3 text-xl">Wetter Daten</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
    </div>

    <!-- <a
    class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
  >
    <img class="w-[4rem] text-white p-2" src="../assets/logo.png" alt="" />
    <span class="ml-3 text-xl">Wetter Daten</span>
  </a> -->

    <router-view />
  </div>
</template>

<script setup></script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
