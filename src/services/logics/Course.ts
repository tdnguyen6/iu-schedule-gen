/* eslint-disable */
import { Class } from "./Class";
import { Session } from "./Session";
import { Schedule } from './Schedule';

export class Course {
  title: string;
  credit: number;
  classList: Class[] = [];
  expand = false;

  constructor(title = "UNTITLED", credit = 1) {
    this.title = title;
    this.credit = credit;
  }

  static revive(rawCourse: {}): Course {
    // @ts-ignore
    const c: Course = new Course(rawCourse.title, rawCourse.credit);
    // @ts-ignore
    c.expand = rawCourse.expand;
    // @ts-ignore
    rawCourse.classList.forEach((rawClass) => {
      const _class: Class = new Class(c);
      _class.expand = rawClass.expand;
      // @ts-ignore
      getAllSessions(rawClass.schedule).forEach((session) => {
        session.class = _class;
        session.course = c;
        _class.schedule.addSession(session);
      });
      c.addClass(_class);
    });
    function getAllSessions(schedule: Schedule) {
      const clonedSessionByDay: { [key: string]: Session[] } = Object.assign(
        {},
        schedule.sessionByDay
      );
      return Object.values(clonedSessionByDay).flat(1);
    }
    return c;
  }

  addClass(c: Class): number {
    if (!this.classList.includes(c)) {
      this.classList.push(c);
      return 1;
    }
    return 0;
  }

  removeClass(c: Class) {
    this.classList = this.classList.filter((cl) => cl != c);
  }
}
