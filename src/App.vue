<template lang="pug">
  #app
    Navigation
    b-container
      b-row
        b-col
          router-view
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss"></style>
