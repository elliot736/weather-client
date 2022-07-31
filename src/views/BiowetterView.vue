<template>
  <div class="flex flex-col justify-around">
    <BiowetterSearchingBar />
    <BiowetterCard />
  </div>
</template>

<script>
import BiowetterSearchingBar from ".././components/BiowetterSearchingBar.vue";
import BiowetterCard from ".././components/BiowetterCard.vue";

export default {
  components: {
    BiowetterSearchingBar,
    BiowetterCard,
  },
};
</script>
