<template>
  <div
    :class="{ active: pollen, hide: !pollen }"
    class="flex flex-col mt-[1.5rem] rounded bg-[#facf5a] font-mono"
  >
    <p class="text-xl font-semibold pt-[1rem]">
      Land : {{ pollen[0]?.region_name }}
    </p>

    <div
      class="flex p-4 flex-col transition-all duration-700"
      v-for="item in pollen"
    >
      <p class="pb-[1rem]">
        {{ item.partregion_name ? "Region: " + item.partregion_name : "" }}
      </p>
      <table class="">
        <thead>
          <tr>
            <th class="">Tag:</th>
            <th class="">Ambrosia</th>
            <th class="">Birke</th>
            <th class="">Roggen</th>
            <th class="">Hasel</th>
            <th class="">Beifuss</th>
            <th class="">Erle</th>
            <th class="">Esche</th>
            <th class="">Graeser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="">Heute</td>
            <td class="">{{ item.Pollen.Ambrosia?.today }}</td>
            <td class="">{{ item.Pollen.Birke?.today }}</td>
            <td class="">{{ item.Pollen.Roggen?.today }}</td>
            <td class="">{{ item.Pollen.Hasel?.today }}</td>
            <td class="">{{ item.Pollen.Beifuss?.today }}</td>
            <td class="">{{ item.Pollen.Erle?.today }}</td>
            <td class="">{{ item.Pollen.Esche?.today }}</td>
            <td class="">{{ item.Pollen.Graeser?.today }}</td>
          </tr>
          <tr>
            <td class="">Morgen</td>
            <td class="">{{ item.Pollen.Ambrosia?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Birke?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Roggen?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Hasel?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Beifuss?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Erle?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Esche?.tomorrow }}</td>
            <td class="">{{ item.Pollen.Graeser?.tomorrow }}</td>
          </tr>
          <tr>
            <td class="">Übermorgen</td>
            <td class="">{{ item.Pollen.Ambrosia?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Birke?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Roggen?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Hasel?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Beifuss?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Erle?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Esche?.dayafter_to }}</td>
            <td class="">{{ item.Pollen.Graeser?.dayafter_to }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";

import store from "@/store";
export default {
  setup() {
    const pollen = computed(() => store.state.pollen);
    // let regions = computed((i) => );
    const test = computed(() => {
      if (pollen) {
        for (let i = 0; i < store.state.pollen.length; i++) {
          store.state.pollen[i].partregion_name;
        }
      }
    });

    // for (partregion_name in store.state.pollen) {
    //   return regions.push(partregion_name);
    // }

    return {
      pollen,
      test,
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  background: transparent;
}

th,
td {
  color: #000000;
  background: #f5f1ff;
  padding: 1em;

  border-bottom: 2px solid white;
}
</style>
