<template>
  <div class="session-form">
    <label for="session-instructor">Instructor</label>
    <div>
      <input type="text" id="session-instructor" v-model="session.instructor" />
    </div>
    <label for="session-room">Room</label>
    <div>
      <input type="text" id="session-room" v-model="session.room" />
    </div>
    <label for="session-type">Type</label>
    <div>
      <input type="text" id="session-type" v-model="session.type" />
    </div>
    <label for="session-week-day">Week Day</label>
    <div>
      <input type="text" id="session-week-day" v-model="session.weekDay" />
    </div>
    <label for="session-start-period">Start Period</label>
    <div>
      <input
        type="text"
        id="session-start-period"
        v-model="session.startPeriod"
      />
    </div>
    <label for="session-period-count">Period Count</label>
    <div>
      <input
        type="text"
        id="session-period-count"
        v-model="session.periodCount"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Session } from "@/services/logics/Session";

@Component({
  components: {}
})
export default class SessionForm extends Vue {
  @Prop() session!: Session;
}
</script>

<style lang="scss" scoped>
.session-form {
  input {
    background: var(--shadow);
    border: none;
    border-bottom: 1px dashed var(--text-color);
    padding: 0.5rem;
    margin: 1rem 0;
  }
}
</style>
