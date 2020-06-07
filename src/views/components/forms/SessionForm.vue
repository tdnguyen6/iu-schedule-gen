<template>
  <div class="session-form">
    <label for="session-instructor">Instructor</label>
    <input
      type="text"
      id="session-instructor"
      v-model.trim="content.instructor"
    />
    <label for="session-room">Room</label>
    <input type="text" id="session-room" v-model.trim="content.room" />
    <label for="session-type">Type</label>
    <select id="session-type" v-model="content.type">
      <option value="0">THEORY</option>
      <option value="1">LAB</option>
    </select>
    <label for="session-week-day">Week Day</label>
    <select id="session-week-day" v-model="content.weekDay">
      <option value="MON">Monday</option>
      <option value="TUE">Tuesday</option>
      <option value="WED">Wednesday</option>
      <option value="THU">Thursday</option>
      <option value="FRI">Friday</option>
      <option value="SAT">Saturday</option>
    </select>
    <label for="session-start-period">Start Period</label>
    <div>
      <select id="session-start-period" v-model.number="content.startPeriod">
        <option value="1">[1] 8:00 - 8:45</option>
        <option value="2">[2] 8:50 - 9:35</option>
        <option value="3">[3] 9:40 - 10:25</option>
        <option value="4">[4] 10:30 - 11:15</option>
        <option value="5">[5] 11:20 - 12:05</option>
        <option value="6">[6] 12:10 - 12:55</option>
        <option value="7">[7] 13:15 - 14:00</option>
        <option value="8">[8] 14:05 - 14:50</option>
        <option value="9">[9] 14:55 - 15:40</option>
        <option value="10">[10] 15:45 - 16:30</option>
      </select>
    </div>
    <label for="session-period-count">Period Count</label>
    <select id="session-period-count" v-model.number="content.periodCount">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Session } from "@/services/logics/Session";

@Component({
  components: {}
})
export default class SessionForm extends Vue {
  @Prop() content!: Session;
}
</script>

<style lang="scss" scoped>
.session-form {
  input,
  select,
  option {
    display: block;
    background: var(--shadow);
    border: none;
    border-bottom: 1px dashed var(--text-color);
    padding: 0.5rem;
    margin: 1rem 0;
  }
}
</style>
