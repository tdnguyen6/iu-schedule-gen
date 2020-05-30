<template>
  <div id="app">
    <WeekSchedule></WeekSchedule>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WeekSchedule from "@/views/components/WeekSchedule.vue";

@Component({
  components: {
    WeekSchedule
  }
})
export default class MyApp extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  padding: 0;
}
</style>
