<template>
  <div class="about">
    <Navbar />
    <h1>This is generator page</h1>
    <CustomSwiper :slidesContent="slides" slidesType="WeekSchedule" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomSwiper from "@/views/components/swipers/Swiper.vue";
import WeekSchedule from "@/views/components/schedules/WeekSchedule.vue";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";

@Component({
  components: {
    Navbar,
    CustomSwiper,
    WeekSchedule
  }
})
export default class Generator extends Vue {
  private slides: Vue[] = [];
  constructor() {
    super();
    for (let i = 0; i < 15; i++) {
      this.slides.push(new WeekSchedule());
    }
  }
}
</script>
