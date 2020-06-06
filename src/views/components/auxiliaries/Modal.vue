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
          <h3>Modal Title</h3>
          <button @click="control.toggle = !control.toggle">
            <font-awesome-icon :icon="['fas', 'times']" />
          </button>
        </div>
        <table class="real-modal-content">
          <tr v-for="item in modalContent" :key="item.id">
            <th>{{ Object.keys(item)[0] }}</th>
            <td>{{ Object.values(item)[0] }}</td>
          </tr>
        </table>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Modal extends Vue {
  @Prop() private modalTitle!: string;
  @Prop() private control!: {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() private modalContent!: { [key: string]: any }[];
  constructor() {
    super();
    this.modalContent = [
      {
        keyA: "A",
        id: 1
      },
      {
        keyB: "B",
        id: 2
      },
      {
        keyC: "C",
        id: 3
      },
      {
        keyD: "D",
        id: 4
      },
      {
        keyE: "Esfsaffffffffffffffffasdfasdfsf",
        id: 5
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.modal {
  .modal-overlay {
    color: var(--text-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--bg);
    opacity: 0.5;
    cursor: pointer;
    z-index: 98;
  }

  .real-modal {
    background: var(--modal-bg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--shadow);
    box-shadow: 4px 4px 4px var(--shadow);
    border-radius: 0.5rem;
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
