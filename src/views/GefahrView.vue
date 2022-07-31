<template>
  <div>
    <GefahrSearch />
    <GefahrCard />
  </div>
</template>

<script>
import GefahrSearch from "../components/GefahrSearch.vue";
import GefahrCard from "../components/GefahrCard.vue";
export default {
  components: { GefahrSearch, GefahrCard },
};
</script>

<style scoped></style>
