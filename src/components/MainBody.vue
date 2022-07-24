<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-2/3 mx-auto">
        <div class="flex flex-col py-32 px-10 relative mb-4">
          <SearchingBar />
          <WeatherCard />
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="px-2 w-1/2">
            <div
              class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
            >
              <PollenMap />
            </div>
          </div>
          <div class="px-2 w-1/2">
            <div
              class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative"
            >
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                src="https://dummyimage.com/542x420"
              />
              <div class="text-center relative z-10 w-full">
                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                  Shooting Stars
                </h2>
                <p class="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a class="mt-3 text-yellow-500 inline-flex items-center"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
