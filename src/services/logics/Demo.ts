/* eslint-disable */
import { Course } from "./Course";
import { Class } from "./Class";
import { Session, SessionType } from "./Session";
import { WeekDay } from "./WeekDay";
import { Schedule } from "./Schedule";

const dsa: Course = new Course("DSA", 4);
const wad: Course = new Course("WAD", 4);

const dsa1: Class = new Class(dsa);
const dsa2: Class = new Class(dsa);
const wad1: Class = new Class(wad);
const wad2: Class = new Class(wad);

const dsa1Theory: Session = new Session(
  dsa1,
  WeekDay.MON,
  1,
  3,
  "LTSach",
  "A1.402",
  SessionType.THEORY
);
const dsa1Lab: Session = new Session(
  dsa1,
  WeekDay.FRI,
  7,
  4,
  "PQSLam",
  "A1.607",
  SessionType.LAB
);

const dsa2Theory: Session = new Session(
  dsa2,
  WeekDay.WED,
  1,
  3,
  "LTSach",
  "A1.402",
  SessionType.THEORY
);
const dsa2Lab: Session = new Session(
  dsa2,
  WeekDay.MON,
  7,
  4,
  "PQSLam",
  "A1.606",
  SessionType.LAB
);

const wad1Theory: Session = new Session(
  wad1,
  WeekDay.TUE,
  1,
  3,
  "NVSinh",
  "A1.310",
  SessionType.THEORY
);
const wad1Lab: Session = new Session(
  wad1,
  WeekDay.THU,
  7,
  4,
  "PQSLam",
  "A1.605",
  SessionType.LAB
);

const wad2Theory: Session = new Session(
  wad2,
  WeekDay.FRI,
  1,
  3,
  "NVSinh",
  "A1.203",
  SessionType.THEORY
);
const wad2Lab: Session = new Session(
  wad2,
  WeekDay.SAT,
  7,
  1,
  "PQSLam",
  "A1.607",
  SessionType.LAB
);

const schedule = new Schedule();
schedule.addSession(dsa1Theory);
schedule.addSession(dsa1Lab);
schedule.addSession(dsa2Theory);
schedule.addSession(dsa2Lab);
schedule.addSession(wad1Theory);
schedule.addSession(wad1Lab);
schedule.addSession(wad2Theory);
schedule.addSession(wad2Lab);

export { schedule };

let courses = [
  dsa,
  wad
];

export { courses };
