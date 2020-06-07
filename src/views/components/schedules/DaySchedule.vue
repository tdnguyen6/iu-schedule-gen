<template>
  <table class="day-schedule">
    <thead>
      <tr>
        <th>{{ dayName }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in 10" :key="i">
        <td
          v-if="startPeriods.includes(i)"
          :rowspan="infoByStartPeriods[i].periodCount"
          class="occupied"
          nowrap
        >
          {{ infoByStartPeriods[i].course.title }} -
          {{ sessionType(i) }}
          <br />
          {{ infoByStartPeriods[i].instructor }}
          <br />
          {{ infoByStartPeriods[i].room }}
        </td>
        <td v-else-if="!inPeriods.includes(i)"></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { WeekDay } from "@/services/logics/WeekDay";
import { Session } from "@/services/logics/Session";
import { SessionType } from "@/services/logics/Session";

@Component
export default class DaySchedule extends Vue {
  @Prop() private dayNum!: number;
  @Prop() private sessionList!: Session[];
  private dayName: string = WeekDay[this.dayNum];
  private startPeriods: number[] = [];
  private inPeriods: number[] = [];
  private infoByStartPeriods: { [key: number]: Session } = {};
  constructor() {
    super();
    this.sessionList.forEach(session => {
      this.startPeriods.push(+session.startPeriod);
      for (let i = 0; i < session.periodCount; i++) {
        this.inPeriods.push(i + session.startPeriod);
      }
      this.infoByStartPeriods[+session.startPeriod] = session;
    });
  }

  sessionType(i: number): string {
    return SessionType[this.infoByStartPeriods[i].type];
  }
}
</script>

<style lang="scss" scoped>
.day-schedule {
  &,
  tr {
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: var(--text-color);
    border-collapse: collapse;
    border-spacing: 0;
  }
  th,
  td {
    background: var(--schedule-free-bg);
    padding: 0 0.25rem;
    margin: 0;
  }

  tbody {
    tr {
      height: 3rem;
    }
  }

  th {
    font-weight: 700;
    background: var(--schedule-header);
  }

  .occupied {
    font-weight: 500;
    font-size: 0.75rem;
    background: var(--schedule-busy-bg);
    text-align: center;
  }
}
</style>
