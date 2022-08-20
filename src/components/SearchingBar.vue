<template>
  <div class="flex justify-center">
    <input
      type="text"
      class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow border border-solid border-gray-300 transition ease-in-out focus:bg-white focus:border-teal-700 focus:outline-none"
      placeholder="Das wetter in.."
      v-model="query"
    />
    <svg
      class="w-[1.8rem] ml-[1rem] cursor-pointer fill-black"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      @click="search"
    >
      <path
        d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"
      />
    </svg>
  </div>
</template>

<script>
import store from "@/store";
import { computed, ref } from "vue";
export default {
  setup() {
    const state = computed(() => store.state);
    const weather = store.state.weather;
    const lon = store.state.lon;
    const lat = store.state.lat;
    let query = ref("");

    const search = () => {
      store.getters.getWeather(query.value);
    };
    return {
      state,
      search,
      weather,
      lon,
      lat,
      query,
    };
  },
};
</script>

<style></style>
