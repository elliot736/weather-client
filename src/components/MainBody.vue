<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-2/3 mx-auto">
        <div class="flex flex-col py-32 px-10 relative mb-4">
          <SearchingBar />
          <WeatherCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store";
import { computed, ref } from "vue";
import PollenMap from "./PollenMap.vue";
import SearchingBar from "./SearchingBar.vue";
import WeatherCard from "./WeatherCard.vue";
export default {
  components: {
    SearchingBar,
    WeatherCard,
    PollenMap,
  },

  computed: {},
  setup() {
    const weather = computed(() => store.state.weather);
    // const active =
    //   store.state.weather.length > 0
    //     ? ref("block opacity-100 animate")
    //     : ref("hidden opacity-0");

    // function show() {
    //   if (store.state.weather.length > 0) {
    //     return "block opacity-100 animate";
    //   } else {
    //     return "hidden opacity-0";
    //   }
    // }
    return {
      weather,
    };
  },
};
</script>

<style></style>
