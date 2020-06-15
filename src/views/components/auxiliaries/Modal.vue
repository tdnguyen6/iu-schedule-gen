<template>
  <div class="modal">
    <transition name="fade">
      <div
        class="modal-overlay"
        v-if="control.toggle"
        @click="control.toggle = !control.toggle"
      ></div>
    </transition>
    <transition name="drop-n-fade">
      <div class="real-modal" v-if="control.toggle">
        <div class="real-modal-header">
          <h3 style="white-space: nowrap">{{ control.title }}</h3>
          <button @click="control.toggle = !control.toggle">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <div class="real-modal-content">
          <component :is="control.type" :content="control.content" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Course } from "@/services/logics/Course";
import { Session } from "@/services/logics/Session";
import CourseForm from "@/views/components/forms/CourseForm.vue";
import SessionForm from "@/views/components/forms/SessionForm.vue";
import OAuthButtons from "@/views/components/auxiliaries/OAuthButtons.vue";

export interface ModalControl {
  title: string;
  toggle: boolean;
  type: string;
  content: Course | Session | null;
}

@Component({
  components: {
    CourseForm,
    SessionForm,
    OAuthButtons
  }
})
export default class Modal extends Vue {
  @Prop() private modalTitle!: string;
  @Prop() private control!: {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  .modal-overlay {
    width: 100vw;
    height: 100vh;
    color: var(--text-color);
    position: absolute;
    background: var(--bg);
    opacity: 0.75;
    cursor: pointer;
    z-index: 98;
  }

  .real-modal {
    background: var(--modal-bg);
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    border: 1px dotted var(--text-color);
    box-shadow: 4px 4px 8px var(--shadow);
    z-index: 99;

    .real-modal-header {
      button {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
    }

    .real-modal-content {
      margin: 0 auto;
      width: 100%;
      text-align: left;
      padding: 0 1rem 1rem;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease-in-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .drop-n-fade-enter-active,
  .drop-n-fade-leave-active {
    transition: top 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  .drop-n-fade-enter,
  .drop-n-fade-leave-to {
    top: -25%;
    opacity: 0;
  }
}
</style>
