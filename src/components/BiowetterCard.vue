<template>
  <div
    v-if="biowetter"
    class="flex flex-col font-yrsa mt-[5rem] mx-[5rem] justify-start text-left"
  >
    <div class="flex row">
      <div
        :class="{
          'text-white bg-[#3f3b3b]': openTab === 1,
        }"
        class="mr-[.4rem] pr-[1rem] hover:bg-[#303a52] hover:text-white transition-colors duration-500 hover:cursor-pointer p-2 rounded"
        @click="toggleTabs(1)"
      >
        <p>Heute Nachmittag</p>
      </div>
      <div
        :class="{
          'text-white bg-[#3f3b3b]': openTab === 2,
        }"
        class="mr-[.4rem] px-[1rem] hover:bg-[#303a52] hover:text-white transition-colors duration-500 hover:cursor-pointer p-2 rounded"
        @click="toggleTabs(2)"
      >
        <p>Morgen Vormittag</p>
      </div>
      <div
        :class="{
          'text-white bg-[#3f3b3b]': openTab === 3,
        }"
        class="mr-[.4rem] px-[1rem] hover:bg-[#303a52] hover:text-white transition-colors duration-500 hover:cursor-pointer p-2 rounded"
        @click="toggleTabs(3)"
      >
        <p>Morgen Nachmittag</p>
      </div>
      <div
        :class="{
          'text-white bg-[#3f3b3b]': openTab === 4,
        }"
        class="mr-[.4rem] px-[1rem] hover:bg-[#303a52] hover:text-white transition-colors duration-500 hover:cursor-pointer p-2 rounded"
        @click="toggleTabs(4)"
      >
        <p>Übermorgen Vormittag</p>
      </div>
      <div
        :class="{
          'text-white bg-[#3f3b3b]': openTab === 5,
        }"
        class="px-[1rem] hover:bg-[#303a52] hover:text-white transition-colors duration-500 hover:cursor-pointer p-2 rounded"
        @click="toggleTabs(5)"
      >
        <p>Übermorgen Nachmittag</p>
      </div>
    </div>

    <!-- Tabs -->

    <!-- Heute Nachmittag -->

    <div
      class="mt-[5rem] text-xl"
      :class="openTab == 1 ? 'tabactive' : 'tabinactive'"
    >
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Ort: {{ biowetter.name }}
      </p>
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Date: {{ biowetter.today_afternoon.date }}
      </p>
      <p class="text-3xl mb-[1rem] font-bitter font-extrabold">Empfehlungen:</p>
      <ul>
        <li
          class="font-serif mb-[.6rem]"
          v-for="item in biowetter.today_afternoon.recomms"
        >
          <span class="text-indigo-700">{{ item.name }}:&nbsp;</span>
          <span class="text-rose-900">{{ item.value }}</span>
        </li>
      </ul>
      <p class="text-3xl my-[1rem]">Effekte:</p>

      <div>
        <div
          class="flex justify-start font-serif mb-[.6rem]"
          v-for="item in biowetter.today_afternoon.effect"
        >
          <div>
            <p class="hover:bg-green-200 transition-colors duration-500">
              <span class="text-sky-400">▹</span>
              {{ item.name }}:
              <span class="underline underline-offset-1">{{ item.value }}</span>
            </p>

            <div v-for="i in item.subeffect" class="flex flex-col">
              <p class="hover:bg-indigo-200 transition-colors">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-400">▹</span>
                {{ i.name }}:&nbsp;
                <span class="hover:underline underline-offset-8">{{
                  i.value
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Morgen Vormittag< -->
    <div
      class="mt-[5rem] text-xl"
      :class="openTab == 2 ? 'tabactive' : 'tabinactive'"
    >
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Ort: {{ biowetter.name }}
      </p>
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Date: {{ biowetter.tomorrow_morning.date }}
      </p>
      <p class="text-3xl mb-[1rem] font-bitter font-extrabold">Empfehlungen:</p>
      <ul>
        <li
          class="font-serif mb-[.6rem]"
          v-for="item in biowetter.tomorrow_morning.recomms"
        >
          <span class="text-indigo-700">{{ item.name }}:&nbsp;</span>
          <span class="text-rose-900">{{ item.value }}</span>
        </li>
      </ul>
      <p class="text-3xl my-[1rem]">Effekte:</p>

      <div>
        <div
          class="flex justify-start font-serif mb-[.6rem]"
          v-for="item in biowetter.tomorrow_morning.effect"
        >
          <!-- <div v-if="item.value != 'kein Einfluss' && item.value != 'keine'"> -->
          <div>
            <p class="hover:bg-green-200 transition-colors duration-500">
              <span class="text-sky-400">▹</span>
              {{ item.name }}:
              <span class="underline underline-offset-1">{{ item.value }}</span>
            </p>

            <div v-for="i in item.subeffect" class="flex flex-col">
              <p class="hover:bg-indigo-200 transition-colors">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-400">▹</span>
                {{ i.name }}:&nbsp;
                <span class="hover:underline underline-offset-8">{{
                  i.value
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Morgen Nachmittag -->
    <div
      class="mt-[5rem] text-xl"
      :class="openTab == 3 ? 'tabactive' : 'tabinactive'"
    >
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Ort: {{ biowetter.name }}
      </p>
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Date: {{ biowetter.tomorrow_afternoon.date }}
      </p>
      <p class="text-3xl mb-[1rem] font-bitter font-extrabold">Empfehlungen:</p>
      <ul>
        <li
          class="font-serif mb-[.6rem]"
          v-for="item in biowetter.tomorrow_afternoon.recomms"
        >
          <span class="text-indigo-700">{{ item.name }}:&nbsp;</span>
          <span class="text-rose-900">{{ item.value }}</span>
        </li>
      </ul>
      <p class="text-3xl my-[1rem]">Effekte:</p>

      <div>
        <div
          class="flex justify-start font-serif mb-[.6rem]"
          v-for="item in biowetter.tomorrow_afternoon.effect"
        >
          <div>
            <p class="hover:bg-green-200 transition-colors duration-500">
              <span class="text-sky-400">▹</span>
              {{ item.name }}:
              <span class="underline underline-offset-1">{{ item.value }}</span>
            </p>

            <div v-for="i in item.subeffect" class="flex flex-col">
              <p class="hover:bg-indigo-200 transition-colors">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-400">▹</span>
                {{ i.name }}:&nbsp;
                <span class="hover:underline underline-offset-8">{{
                  i.value
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Übermorgen Vormittag -->
    <div
      class="mt-[5rem] text-xl"
      :class="openTab == 4 ? 'tabactive' : 'tabinactive'"
    >
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Ort: {{ biowetter.name }}
      </p>
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Date: {{ biowetter.dayafter_to_morning.date }}
      </p>
      <p class="text-3xl mb-[1rem] font-bitter font-extrabold">Empfehlungen:</p>
      <ul>
        <li
          class="font-serif mb-[.6rem]"
          v-for="item in biowetter.dayafter_to_morning.recomms"
        >
          <span class="text-indigo-700">{{ item.name }}:&nbsp;</span>
          <span class="text-rose-900">{{ item.value }}</span>
        </li>
      </ul>
      <p class="text-3xl my-[1rem]">Effekte:</p>

      <div>
        <div
          class="flex justify-start font-serif mb-[.6rem]"
          v-for="item in biowetter.dayafter_to_morning.effect"
        >
          <div>
            <p class="hover:bg-green-200 transition-colors duration-500">
              <span class="text-sky-400">▹</span>
              {{ item.name }}:
              <span class="underline underline-offset-1">{{ item.value }}</span>
            </p>

            <div v-for="i in item.subeffect" class="flex flex-col">
              <p class="hover:bg-indigo-200 transition-colors">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-400">▹</span>
                {{ i.name }}:&nbsp;
                <span class="hover:underline underline-offset-8">{{
                  i.value
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Übermorgen Nachmittag -->
    <div
      class="mt-[5rem] text-xl"
      :class="openTab == 5 ? 'tabactive' : 'tabinactive'"
    >
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Ort: {{ biowetter.name }}
      </p>
      <p class="text-lg my-[1rem] font-sans font-extrabold">
        Date: {{ biowetter.dayafter_to_afternoon.date }}
      </p>
      <p class="text-3xl mb-[1rem] font-bitter font-extrabold">Empfehlungen:</p>
      <ul>
        <li
          class="font-serif mb-[.6rem]"
          v-for="item in biowetter.dayafter_to_afternoon.recomms"
        >
          <span class="text-indigo-700">{{ item.name }}:&nbsp;</span>
          <span class="text-rose-900">{{ item.value }}</span>
        </li>
      </ul>
      <p class="text-3xl my-[1rem]">Effekte:</p>

      <div>
        <div
          class="flex justify-start font-serif mb-[.6rem]"
          v-for="item in biowetter.dayafter_to_afternoon.effect"
        >
          <div>
            <p class="hover:bg-green-200 transition-colors duration-500">
              <span class="text-sky-400">▹</span>
              {{ item.name }}:
              <span class="underline underline-offset-1">{{ item.value }}</span>
            </p>

            <div v-for="i in item.subeffect" class="flex flex-col">
              <p class="hover:bg-indigo-200 transition-colors">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="text-purple-400">▹</span>
                {{ i.name }}:&nbsp;
                <span class="hover:underline underline-offset-8">{{
                  i.value
                }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

import store from "@/store";
export default {
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
  setup() {
    const biowetter = computed(() => store.state.biowetter);
    
    return {
      biowetter,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: disc !important;
}
.tabinactive {
  opacity: 0;
  height: 0;
  margin: 0 !important;
  overflow: hidden;
}
.tabactive {
  opacity: 1;
  height: auto;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}
.tablex {
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  background: transparent;
}

.thx,
.tdx {
  color: #000000;
  background: #f5f1ff;
  padding: 1em;

  border-bottom: 2px solid white;
}
</style>
