import { Session } from "./Session";

export class Schedule {
  sessionByDay: { [key: string]: Session[] } = {};

  addSession(session: Session): number {
    if (!(session.weekDay in this.sessionByDay)) {
      const sessionList: Session[] = [];
      sessionList.push(session);
      this.sessionByDay[session.weekDay] = sessionList;
      return 1;
    } else {
      if (!this.sessionByDay[session.weekDay].includes(session)) {
        this.sessionByDay[session.weekDay].push(session);
        return 2;
      }
      return 0;
    }
  }

  removeSession(session: Session): number {
    if (session.weekDay in this.sessionByDay) {
      if (this.sessionByDay[session.weekDay].includes(session)) {
        // eslint-disable-next-line
        this.sessionByDay[session.weekDay] = this.sessionByDay[session.weekDay].filter(
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
