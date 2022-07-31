<template>
  <div class="flex flex-col mt-[3rem] items-center" v-if="uvi">
    <div class="">
      <div class="flex flex-row">
        <table class="">
          <thead>
            <tr>
              <th>Ort:</th>
              <th>Heute:</th>
              <th>Morgen:</th>
              <th>Übermorgen:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ uvi.city }}</th>
              <th>{{ uvi.forecast.today }}</th>
              <th>{{ uvi.forecast.tomorrow }}</th>
              <th>{{ uvi.forecast.dayafter_to }}</th>
            </tr>
          </tbody>
        </table>
        <img class="ml-[5rem]" src="../assets/uvi.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const uvi = computed(() => store.state.uvi);
    return {
      uvi,
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
  height: 10rem;
  margin-top: 10rem;
}

th,
td {
  color: #fff;
  background: #085f63;
  padding: 1em;
}
thead {
  border-bottom: 2px solid white;
}
</style>
