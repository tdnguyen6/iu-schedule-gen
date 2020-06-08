<template>
  <div class="about">
    <Navbar />
    <h1>This is generator page</h1>
    <button @click="refresh()" class="refresh-btn">Refresh</button>
    <CustomSwiper :slidesContent="slides" slidesType="WeekSchedule" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomSwiper from "@/views/components/swipers/Swiper.vue";
import WeekSchedule from "@/views/components/schedules/WeekSchedule.vue";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import { Generator } from "@/services/logics/Generator";
import { courses } from "@/services/logics/Demo";
import { Schedule } from "@/services/logics/Schedule";

@Component({
  components: {
    Navbar,
    CustomSwiper,
    WeekSchedule
  }
})
export default class GeneratorView extends Vue {
  private slides: Schedule[];
  constructor() {
    super();
    this.slides = Generator.generate(courses);
  }

  refresh() {
    this.slides = Generator.generate(courses);
    console.log(this.slides);
    // this.$forceUpdate();
    // this.slides.shift();
    // const schedule: WeekSchedule = new WeekSchedule();
    // for (let i = 0; i < 6; i++) {
    //   console.log(schedule.sessionListByDayNum(i));
    // }
    // for (let i = 0; i < 15; i++) {
    //   this.slides.push(new WeekSchedule());
    // }
  }
}
</script>

<style lang="scss" scoped>
.refresh-btn {
  background: transparent;
  cursor: pointer;
  border: 1px dotted var(--text-color);
}
</style>
