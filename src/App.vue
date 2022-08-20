<template>
  <div
    class="bg-[#f5f5f5] fill-height selection:bg-[#3f3b3b] selection:text-[#fdfdfd]"
  >
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
        <router-link class="hover:text-gray-900 mr-5" to="/"
          >Wetter</router-link
        >
        <router-link class="hover:text-gray-900 mr-5" to="/pollen"
          >Pollen</router-link
        >
        <router-link class="hover:text-gray-900 mr-5" to="/biowetter"
          >Biowetter</router-link
        ><router-link class="hover:text-gray-900 mr-5" to="/uvi"
          >UV Index</router-link
        ><router-link class="hover:text-gray-900 mr-5" to="/gefahr-index"
          >Thermischer Gefahrenindex </router-link
        ><router-link class="hover:text-gray-900 mr-5" to="/about"
          >Über
        </router-link>
      </nav>
      <a
        class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
      >
        <img class="w-[4rem] text-white p-2" src="./assets/logo.png" alt="" />
        <span class="ml-3 text-xl">Wetter Daten</span>
      </a>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0"></div>
    </div>

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

.fill-height {
  height: 100%;
  min-height: 100vh;
}
</style>
