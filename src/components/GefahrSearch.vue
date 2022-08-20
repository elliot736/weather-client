<template>
  <div>
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Eine Stadt auswählen:</label
    >

    <select class="select" v-model="selected" @change="onchange()">
      <option>Saarbrücken</option>
      <option>Mannheim</option>
      <option>Konstanz</option>
      <option>Düsseldorf</option>
      <option>List auf Sylt</option>
      <option>Nürnberg</option>
      <option>Norderney</option>
      <option>Erfurt</option>
      <option>Frankfurt/Main</option>
      <option>Cottbus</option>
      <option>Hamburg</option>
      <option>Weimar</option>
      <option>Freiburg</option>
      <option>Kiel</option>
      <option>Hannover</option>
      <option>Berlin</option>
      <option>Magdeburg</option>
      <option>München</option>
      <option>Stuttgart</option>
      <option>Leipzig</option>
      <option>Schwerin</option>
      <option>Sankt Peter-Ording</option>
      <option>Rostock</option>
      <option>Arkona</option>
      <option>Dresden</option>
      <option>Regensburg</option>
      <option>Köln/Bonn</option>
      <option>Osnabrück</option>
      <option>Kassel</option>
      <option>Würzburg</option>
      <option>Waren</option>
      <option>Ulm</option>
      <option>Bremen</option>
      <option>Wernigerode</option>
    </select>
  </div>
</template>

<script>
import store from "@/store";
import { computed, ref, onMounted } from "vue";
export default {
  setup() {
    const gfi = computed(() => store.state.gfi);
    const selected = ref();

    const onchange = () => {
      store.getters.getGFI(selected.value);
    };

    return {
      gfi,
      selected,
      onchange,
    };
  },
};
</script>

<style scoped>
.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 57px;
  padding: 10px 38px 10px 16px;
  background: #fff url("../assets/select-arrows.png") no-repeat right 7px center;
  background-size: 25px;
  transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
  border: 1px solid #ddd;
  border-radius: 3px;
}
.select:hover {
  border: 1px solid #999;
  cursor: pointer;
}
.select::after {
  content: "\f078";
  font-family: "FontAwesome";
  position: absolute;
  top: 13px;
  right: 10px;
  z-index: 5;
}
.select:focus {
  border: 1px solid #999;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  outline: none;
}
select::-ms-expand {
  display: none;
}
</style>
