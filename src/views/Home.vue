<template lang="pug">
  pre {{ questions }}
</template>

<script>
import service from "@/services";

export default {
  name: "home",
  data() {
    return {
      questions: []
    };
  },
  async mounted() {
    this.questions = await service.get("questions");
  }
};
</script>
