<template>
  <div class="mt-[3rem]" v-if="gfi">
    <div class="flex flex-col">
      <table class="mx-[2rem]">
        <thead>
          <tr>
            <th>Ort:</th>
            <th>Heute 03 Uhr</th>
            <th>Heute 09 Uhr</th>
            <th>Heute 15 Uhr</th>
            <th>Heute 21 Uhr</th>
            <th>Morgen 03 Uhr</th>
            <th>Morgen 09 Uhr</th>
            <th>Morgen 15 Uhr</th>
            <th>Morgen 21 Uhr</th>
            <th>Übermorgen 03 Uhr</th>
            <th>Übermorgen 09 Uhr</th>
            <th>Übermorgen 15 Uhr</th>
            <th>Übermorgen 21 Uhr</th>
            <th>Nach 3 Tage 03 Uhr</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ gfi.city }}</th>
            <th>{{ gfi.forecast.today_03MEZ }}</th>
            <th>{{ gfi.forecast.today_09MEZ }}</th>
            <th>{{ gfi.forecast.today_15MEZ }}</th>
            <th>{{ gfi.forecast.today_21MEZ }}</th>
            <th>{{ gfi.forecast.tomorrow_03MEZ }}</th>
            <th>{{ gfi.forecast.tomorrow_09MEZ }}</th>
            <th>{{ gfi.forecast.tomorrow_15MEZ }}</th>
            <th>{{ gfi.forecast.tomorrow_21MEZ }}</th>
            <th>{{ gfi.forecast.dayafter_to_03MEZ }}</th>
            <th>{{ gfi.forecast.dayafter_to_09MEZ }}</th>
            <th>{{ gfi.forecast.dayafter_to_15MEZ }}</th>
            <th>{{ gfi.forecast.dayafter_to_21MEZ }}</th>
            <th>{{ gfi.forecast.after_threedays_03MEZ }}</th>
          </tr>
        </tbody>
      </table>
      <div
        class="mt-[2rem] text-xl ml-[2rem] mr-[10rem] font-yrsa text-left font-extrabold"
      >
        <p class="">
          Der thermische Gefahrenindex beruht auf der Bewertung der
          meteorologischen Umgebungsbedingungen über die Gefühlte Temperatur.
        </p>
        <p class="">
          Die Beanspruchung des Organismus und damit die gesundheitliche
          Gefährdung steigt mit zunehmender Abweichung vom Behaglichkeitsbereich
          sowohl zum Warmen als auch zum Kalten hin.
        </p>
        <a
          class="underline underline-offset-1"
          href="https://www.dwd.de/DE/leistungen/gefahrenindizesthermisch/gefahrenindizesthermisch.html"
          >Mehr zum Thema finden Sie hier</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const gfi = computed(() => store.state.gfi);
    return {
      gfi,
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
}

th,
td {
  color: #fff;
  background: #ff5959;
  padding: 1em;
}
thead {
  border-bottom: 2px solid white;
}
</style>
