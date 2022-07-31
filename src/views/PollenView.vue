<template>
  <div class="flex flex-row justify-around">
    <PollenMap />
    <PollenCard />
  </div>
</template>

<script>
import PollenMap from ".././components/PollenMap.vue";
import PollenCard from "../components/PollenCard.vue";

export default {
  components: {
    PollenMap,
    PollenCard,
  },
};
</script>
