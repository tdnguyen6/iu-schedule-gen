<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in slidesContent" :key="index">
      <component :is="slidesType" :content="slide" />
    </swiper-slide>
    <div
      class="swiper-pagination swiper-pagination-bullets"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import WeekSchedule from "@/views/components/schedules/WeekSchedule.vue";

@Component({
  components: {
    Swiper,
    SwiperSlide,
    WeekSchedule
  }
})
export default class MobileSwiper extends Vue {
  @Prop() private slidesContent!: [];
  @Prop() private slidesType!: string;

  private name = "swiper-example-vertical";
  private title = "'Vertical slider";
  swiperOption = {
    // autoHeight: true,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
      // renderBullet(index: number, className: string) {
      //   return `<span class="${className} swiper-pagination-bullet-custom">${index +
      //     1}</span>`;
      // }
    }
  };
}
</script>

<style lang="scss" scoped>
// @import "../../assets/variables.scss";
.swiper {
  height: 32rem;
  .swiper-pagination {
    top: unset;
    left: 25%;
    width: 50%;
    background: var(--swiper-pagination-bg);
    padding: 0.25rem;
    border-radius: 1rem;
    font-weight: 700;
  }
}
</style>
