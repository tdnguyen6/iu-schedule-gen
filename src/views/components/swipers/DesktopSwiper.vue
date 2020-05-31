<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(slide, index) in slidesContent" :key="index">
      <component :is="slidesType" />
    </swiper-slide>
    <div
      class="swiper-pagination swiper-pagination-bullets"
      slot="pagination"
    ></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
export default class DesktopSwiper extends Vue {
  @Prop() private slidesContent!: Vue[];
  @Prop() private slidesType!: string;

  private name = "swiper-example-3d-coverflow";
  private title = "3D Coverflow effect";
  swiperOption = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet(index: number, className: string) {
        return `<span class="${className} swiper-pagination-bullet-custom">${index +
          1}</span>`;
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
}
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.swiper {
  /deep/ .swiper-pagination-bullet-custom {
    $size: 20px;
    width: $size !important;
    height: $size !important;
    line-height: $size !important;
    text-align: center;
    color: $text-color;
    opacity: 0.7;
    background: rgba($text-color, 0.2);
    transition: all $transition-time-normal;

    &:hover {
      opacity: 1;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      color: $white;
      background: #007aff;
    }
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }
}
</style>
