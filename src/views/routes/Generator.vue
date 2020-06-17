<template>
  <div class="generator">
    <div class="content-wrapper">
      <Navbar />
      <h3 class="page-header">
        <em>Found {{ slides.length }} suitable schedules</em>
      </h3>
      <CustomSwiper :slidesContent="slides" slidesType="WeekSchedule" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomSwiper from "@/views/components/swipers/Swiper.vue";
import WeekSchedule from "@/views/components/schedules/WeekSchedule.vue";
import Navbar from "@/views/components/auxiliaries/Navbar.vue";
import Footer from "@/views/components/auxiliaries/Footer.vue";
import { Generator } from "@/services/logics/Generator";
// import { courses } from "@/services/logics/Demo";
import { DataAccess } from "@/services/logics/DataAccess";
import { Schedule } from "@/services/logics/Schedule";

@Component({
  components: {
    Navbar,
    CustomSwiper,
    WeekSchedule,
    Footer
  }
})
export default class GeneratorView extends Vue {
  private slides: Schedule[];
  constructor() {
    super();
    this.slides = Generator.generate(DataAccess.courseList);
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
