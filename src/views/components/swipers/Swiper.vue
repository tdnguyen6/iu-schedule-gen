<template>
  <div class="my-swiper-container">
    <MobileSwiper
      v-if="isMobile"
      :slidesContent="slidesContent"
      :slidesType="slidesType"
    />
    <DesktopSwiper
      v-else
      :slidesContent="slidesContent"
      :slidesType="slidesType"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MobileSwiper from "@/views/components/swipers/MobileSwiper.vue";
import DesktopSwiper from "@/views/components/swipers/DesktopSwiper.vue";

@Component({
  components: {
    MobileSwiper,
    DesktopSwiper
  }
})
export default class CustomSwiper extends Vue {
  @Prop() private slidesContent!: Vue[];
  @Prop() private slidesType!: string;

  private isMobile: boolean = window.innerWidth < 600;

  constructor() {
    super();
    this.onResize();
    window.addEventListener("resize", () => this.onResize());
  }

  onResize() {
    this.isMobile = window.innerWidth < 600;
  }
}
</script>

<style lang="scss">
.my-swiper-container {
  margin: 1rem auto;
}
</style>
