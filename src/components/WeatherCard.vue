<template>
  <div
    :class="{ active: weather, hide: !weather }"
    class="bg-white flex flex-col p-10 mt-[5rem] rounded-xl ring-8 ring-white ring-opacity-40"
  >
    <!-- now-badge -->
    <div class="bg-black rounded absolute px-[.8rem] hidden">
      <div class="flex h-[.75rem] w-[.75rem]">
        <span
          class="animate-ping absolute inline-flex h-[.8rem] w-[.8rem] rounded-full bg-sky-400 opacity-75"
        ></span>
        <span
          class="relative inline-flex rounded-full h-[.75rem] w-[.75rem] bg-sky-500"
        ></span>
      </div>

      <p class="text-white">JETZT</p>
    </div>
    <!-- main -->
    <div class="flex justify-between">
      <div class="flex flex-col">
        <span class="text-6xl font-bold">{{ weather.main?.temp }}°C</span>
        <span class="font-semibold mt-1 text-xl text-gray-700">{{ city }}</span>
      </div>
      <div class="flex-col mt-[2rem] fill-sky-700">
        <p class="font-bold mt-1 text-md text-gray-700">
          Min: {{ weather ? weather?.main["temp_min"] : "" }}°C
        </p>
        <p class="font-bold text-md text-gray-700">
          Max: {{ weather ? weather?.main["temp_max"] : "" }}°C
        </p>
      </div>
      <img :src="imageUrl" class="w-[5rem]" />

      <!-- <svg
        class="h-24 w-24 fill-current text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"
        />
      </svg> -->
    </div>
    <!-- more details -->
    <div class="flex flex-col">
      <span class="border-t-[.05rem] border-gray-400 w-auto mt-[3rem]"></span>
      <div class="flex flex-row justify-between mt-[3rem]">
        <div class="rain flex flex-col items-center">
          <svg
            class="h-[2rem] w-[2rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-12.776 6.713l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.253-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.3 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29zm8.175-3.287l-1.41-1.41 2.303-2.303 1.41 1.41-2.303 2.303zm-3.301 3.287l-1.41-1.397 2.303-2.303 1.41 1.41-2.303 2.29z"
            />
          </svg>
          <p class="font-semibold font-mono text-gray-500 mt-[1rem]">
            Niederschlag:
          </p>
          <p class="font-semibold font-mono text-gray-500">
            {{ weather.rain ? weather.rain["1h"] + " h/mm" : "0%" }}
          </p>
        </div>
        <div class="wind flex flex-col items-center">
          <svg
            class="h-[2rem] w-[2rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.481 1l-7.481 1.438v-2.438h-2v24h2v-16.967l.75 3.902 13.006 3.98 2.244-3.312-8.519-10.603zm-7.162 2.395l6.369-1.225-5.145 7.594-1.224-6.369zm4.019 7.592l4.521-6.674 1.311 1.631-3.831 5.655-2.001-.612zm7.004 2.143l-2.001-.612 2.795-4.127 1.311 1.631-2.105 3.108z"
            />
          </svg>
          <p class="font-semibold font-mono text-gray-500 mt-[1rem]">Wind:</p>
          <p class="font-semibold font-mono text-gray-500">
            {{ weather.wind?.speed }} km/h
          </p>
        </div>
        <div class="humidity flex flex-col items-center">
          <svg
            class="h-[2rem] w-[2rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.234 14.141c0 .714-.138 1.249-.414 1.608-.276.358-.681.538-1.215.538-.512 0-.907-.184-1.187-.552-.278-.367-.418-.899-.418-1.594 0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.28.368.42.893.42 1.575zm-2.061.01c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.19-.105.483-.105.877zm5.263-2.039l-3.774 6.804h-1.117l3.774-6.804h1.117zm1.564 4.747c0 .711-.138 1.245-.414 1.603-.276.359-.681.538-1.215.538-.512 0-.908-.184-1.187-.552-.279-.368-.419-.897-.419-1.589 0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.281.367.421.893.421 1.575zm-2.062.009c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.191-.105.484-.105.877zm-1.938-11.308c2.725 5.186 6 6.718 6 10.515 0 3.267-2.691 5.925-6 5.925s-6-2.658-6-5.925c0-3.797 3.274-5.327 6-10.515zm0-5.56c-2.333 8.958-8 10.188-8 16.075 0 4.378 3.579 7.925 8 7.925 4.421 0 8-3.547 8-7.925 0-5.887-5.667-7.117-8-16.075z"
            />
          </svg>
          <p class="font-semibold font-mono text-gray-500 mt-[1rem]">
            Luftfeuchte
          </p>
          <p class="font-semibold font-mono text-gray-500">
            {{ weather.main?.humidity }} %
          </p>
        </div>
        <div class="pressure flex flex-col items-center">
          <svg
            class="h-[2rem] w-[2rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 14v2h-16v-2h16zm-20-3v2h24v-2h-24zm0 8h24v-2h-24v2zm20-11h-16v2h16v-2zm-20-3v2h24v-2h-24z"
            />
          </svg>
          <p class="font-semibold font-mono text-gray-500 mt-[1rem]">
            Luftdruck
          </p>
          <p class="font-semibold font-mono text-gray-500">
            {{ weather.main?.pressure }} hPa
          </p>
        </div>
        <div class="feels flex flex-col items-center">
          <svg
            class="h-[2rem] w-[2rem]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
          </svg>
          <p class="font-semibold font-mono text-gray-500 mt-[1rem]">Gefühlt</p>
          <p class="font-semibold font-mono text-gray-500">
            {{ weather ? weather?.main["feels_like"] : "" }} °C
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    :class="{ active: !weather, hide: weather }"
    class="flex shadow-md gap-6 rounded-lg overflow-hidden mt-[5rem] bg-gray-50 text-gray-800 divide-gray-300"
  >
    <div class="flex flex-1 flex-col p-4 border-l-8 border-purple-600">
      <span class="text-2xl">Hej</span>
      <span class="text-md text-gray-600"
        >Bitte gib einen gültigen Städtenamen ein 🌎
      </span>
    </div>
  </div>
  <!-- {{ weather }} -->
</template>

<script>
import store from "@/store";
import { computed, ref } from "vue";
export default {
  setup() {
    const weather = computed(() => store.state.weather);
    const city = computed(() => store.state.city);
    const icon = computed(() =>
      store.state.weather ? store.state.weather.weather[0]?.icon : ""
    );
    let imageUrl = computed(() => {
      if (store.state.weather) {
        return new URL(`../assets/icons/${icon.value}.svg`, import.meta.url)
          .href;
      }
    });

    return {
      weather,
      city,
      icon,
      imageUrl,
    };
  },
};
</script>

<style>
.active {
  display: block;
  opacity: 100%;
  animation: fade-in-move-down 0.7s;
}
.hide {
  display: none !important;
  opacity: 0;
  transition: opacity 1s;
}
@keyframes fade-in-move-down {
  0% {
    opacity: 0;
    transform: translateY(-3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
