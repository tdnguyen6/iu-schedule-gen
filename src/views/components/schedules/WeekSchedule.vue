<template>
  <div class="week-schedule">
    <table class="period-time">
      <thead>
        <tr>
          <th>Period</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>
            {{ i }}
            <br />
            {{ timeOfPeriod(i) }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="week-schedule-day-container">
      <div class="week-schedule-day" v-for="i in 6" :key="i">
        <DaySchedule
          :dayNum="i - 1"
          :sessionList="sessionListByDayNum(i - 1)"
        ></DaySchedule>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DaySchedule from "@/views/components/schedules/DaySchedule.vue";
import { schedule } from "@/services/logics/Demo";
import { WeekDay } from "@/services/logics/WeekDay";
import { Session } from "@/services/logics/Session";

@Component({
  components: {
    DaySchedule
  }
})
export default class WeekSchedule extends Vue {
  sessionListByDayNum(dayNum: number): Session[] {
    const dayName: string = WeekDay[dayNum];
    if (dayName in schedule.sessionByDay) {
      return schedule.sessionByDay[dayName];
    }
    return [];
  }

  private baseTime = new Date();
  timeOfPeriod(i: number): string {
    if (i < 7) {
      this.baseTime.setHours(8);
      this.baseTime.setMinutes(0);
    } else {
      this.baseTime.setHours(13);
      this.baseTime.setMinutes(15);
      i -= 6;
    }
    this.baseTime.setMinutes(this.baseTime.getMinutes() + 50 * (i - 1));
    const start = `${this.baseTime.getHours()}:${
      this.baseTime.getMinutes() < 10 ? "0" : ""
    }${this.baseTime.getMinutes()}`;
    this.baseTime.setMinutes(this.baseTime.getMinutes() + 45);
    const end = `${this.baseTime.getHours()}:${
      this.baseTime.getMinutes() < 10 ? "0" : ""
    }${this.baseTime.getMinutes()}`;
    return `${start}-${end}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.week-schedule {
  overflow: hidden;

  .week-schedule-day-container {
    display: flex;
    margin-left: 4.5rem;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
  }

  .period-time {
    position: absolute;
    text-align: center;
    &,
    tr {
      border: 1px solid black;
      border-collapse: collapse;
    }
    tbody {
      tr {
        height: 3rem;
        font-size: 0.75rem;
        font-weight: 500;
      }
    }
    th,
    td {
      padding: 0 0.2rem;
      width: 4.2rem;
      background: var(--schedule-free-bg);
    }
    th {
      font-weight: 700;
      background: var(--schedule-header);
    }
  }
}
</style>
