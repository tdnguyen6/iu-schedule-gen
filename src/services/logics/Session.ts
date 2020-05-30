import { Class } from "./Class";
import { WeekDay } from "./WeekDay";
import { Course } from "./Course";
export class Session {
  startPeriod: number;
  periodCount: number;
  instructor: string;
  weekDay: WeekDay;
  class: Class;
  course: Course;
  room: string;
  type: SessionType;

  constructor(
    c: Class,
    weekDay: WeekDay,
    start: number,
    count: number,
    instructor: string,
    room: string,
    type: SessionType
  ) {
    this.class = c;
    c.schedule.addSession(this);
    this.course = c.course;
    this.startPeriod = start;
    this.periodCount = count;
    this.instructor = instructor;
    this.weekDay = weekDay;
    this.room = room;
    this.type = type;
  }
}

export enum SessionType {
  THEORY,
  // eslint-disable-next-line
  LAB,
}
