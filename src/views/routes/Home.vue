<template>
  <div class="home">
    <img alt="Vue logo" src="@/views/assets/logo.png" />
    <HelloWorld msg="This is IU schedule Generator" />
    <CustomSwiper :slidesContent="slides" slidesType="WeekSchedule" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/views/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
import CustomSwiper from "@/views/components/swipers/Swiper.vue";
import WeekSchedule from "@/views/components/WeekSchedule.vue";

@Component({
  components: {
    HelloWorld,
    CustomSwiper,
    WeekSchedule
  }
})
export default class Home extends Vue {
  private slides: Vue[] = [];
  constructor() {
    super();
    for (let i = 0; i < 70; i++) {
      this.slides.push(new WeekSchedule());
    }
  }
}
</script>

<style lang="scss" scope></style>
