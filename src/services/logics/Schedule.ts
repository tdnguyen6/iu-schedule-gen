import { Session } from "./Session";
import { WeekDay } from "./WeekDay";

export class Schedule {
  sessionByDay: { [key: string]: Session[] } = {};

  addSession(session: Session): number {
    const dayName: string = WeekDay[session.weekDay];
    if (!(dayName in this.sessionByDay)) {
      const sessionList: Session[] = [];
      sessionList.push(session);
      this.sessionByDay[dayName] = sessionList;
      return 1;
    } else {
      if (!this.sessionByDay[dayName].includes(session)) {
        this.sessionByDay[dayName].push(session);
        return 2;
      }
      return 0;
    }
  }

  removeSession(session: Session): number {
    const dayName: string = WeekDay[session.weekDay];
    if (dayName in this.sessionByDay) {
      if (this.sessionByDay[dayName].includes(session)) {
        this.sessionByDay[dayName] = this.sessionByDay[dayName].filter(
          // eslint-disable-next-line
          (s) => s != session
        );
        return 1;
      }
      return 0;
    }
    return 0;
  }
}
