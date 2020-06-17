/* eslint-disable */
import { Course } from "./Course";
import { Class } from "./Class";
import { Session, SessionType } from "./Session";
import { WeekDay } from "./WeekDay";

const dsa: Course = new Course("DSA", 4);
const wad: Course = new Course("WAD", 4);
const ca: Course = new Course("CA", 4);
const ooad: Course = new Course("OOAD", 4);
const pdbms: Course = new Course("PDBMS", 4);
const revo: Course = new Course("Revo", 3);
const hcm: Course = new Course("HCM", 2);

const dsa1: Class = new Class(dsa);
const dsa2: Class = new Class(dsa);
const dsa3: Class = new Class(dsa);
const dsa4: Class = new Class(dsa);

const wad1: Class = new Class(wad);
const wad2: Class = new Class(wad);

const ca1: Class = new Class(ca);
const ca2: Class = new Class(ca);
const ca3: Class = new Class(ca);
const ca4: Class = new Class(ca);

new Session(dsa1, WeekDay.WED, 1, 3, "L.T.Sach", "A2.205", SessionType.THEORY);
new Session(dsa1, WeekDay.WED, 7, 4, "N.Q.Phu", "LA1.606", SessionType.LAB);
new Session(dsa2, WeekDay.WED, 1, 3, "L.T.Sach", "A2.205", SessionType.THEORY);
new Session(dsa2, WeekDay.TUE, 7, 4, "N.Q.Phu", "LA1.606", SessionType.LAB);
new Session(dsa3, WeekDay.MON, 1, 3, "L.T.Sach", "A1.402", SessionType.THEORY);
new Session(dsa3, WeekDay.FRI, 7, 4, "P.Q.S.Lam", "LA1.606", SessionType.LAB);
new Session(dsa4, WeekDay.MON, 1, 3, "L.T.Sach", "A1.402", SessionType.THEORY);
new Session(dsa4, WeekDay.MON, 7, 4, "P.Q.S.Lam", "LA1.606", SessionType.LAB);

new Session(wad1, WeekDay.THU, 1, 3, "N.V.Sinh", "A2.310", SessionType.THEORY);
new Session(wad1, WeekDay.FRI, 1, 4, "P.Q.S.Lam", "LA1.607", SessionType.LAB);
new Session(wad2, WeekDay.WED, 1, 3, "N.V.Sinh", "A1.401", SessionType.THEORY);
new Session(wad2, WeekDay.TUE, 1, 4, "P.Q.S.Lam", "A1.606", SessionType.LAB);

new Session(ca1, WeekDay.THU, 1, 3, "N.M.Son", "A2.501", SessionType.THEORY);
new Session(ca1, WeekDay.THU, 7, 4, "N.M.Son", "LA1.608", SessionType.LAB);
new Session(ca2, WeekDay.THU, 7, 3, "L.H.Duong", "B.701", SessionType.THEORY);
new Session(ca2, WeekDay.WED, 1, 4, "L.T.Nga", "LA1.607", SessionType.LAB);
new Session(ca3, WeekDay.THU, 7, 3, "L.H.Duong", "B.701", SessionType.THEORY);
new Session(ca3, WeekDay.WED, 7, 4, "L.H.Duong", "LA1.607", SessionType.LAB);
new Session(ca4, WeekDay.THU, 1, 3, "N.M.Son", "A2.501", SessionType.THEORY);
new Session(ca4, WeekDay.TUE, 1, 4, "L.T.Nga", "LA1.608", SessionType.LAB);

const ooad1: Class = new Class(ooad);
const ooad2: Class = new Class(ooad);
const ooad3: Class = new Class(ooad);
const ooad4: Class = new Class(ooad);

new Session(ooad1, WeekDay.FRI, 1, 3, "D.T.H.Chau", "A2.301", SessionType.THEORY);
new Session(ooad1, WeekDay.SAT, 1, 4, "N.Q.Phu", "LA1.605", SessionType.LAB);
new Session(ooad2, WeekDay.TUE, 1, 3, "N.H.Quang", "A2.301", SessionType.THEORY);
new Session(ooad2, WeekDay.THU, 1, 4, "N.Q.Phu", "LA1.607", SessionType.LAB);
new Session(ooad3, WeekDay.TUE, 1, 3, "N.H.Quang", "A1.401", SessionType.THEORY);
new Session(ooad3, WeekDay.TUE, 7, 4, "N.H.Quang", "LA1.605", SessionType.LAB);
new Session(ooad4, WeekDay.FRI, 1, 3, "D.T.H.Chau", "A2.301", SessionType.THEORY);
new Session(ooad4, WeekDay.TUE, 1, 4, "D.T.H.Chau", "LA1.607", SessionType.LAB);

const pdbms1: Class = new Class(pdbms);
const pdbms2: Class = new Class(pdbms);
const pdbms3: Class = new Class(pdbms);
const pdbms4: Class = new Class(pdbms);
const pdbms5: Class = new Class(pdbms);

new Session(pdbms1, WeekDay.THU, 7, 3, "N.T.T.Loan", "A2.507", SessionType.THEORY);
new Session(pdbms1, WeekDay.TUE, 7, 4, "N.T.T.Loan", "LA1.607", SessionType.LAB);
new Session(pdbms2, WeekDay.FRI, 7, 3, "N.T.T.Loan", "A1.202", SessionType.THEORY);
new Session(pdbms2, WeekDay.FRI, 1, 4, "N.T.T.Loan", "LA1.608", SessionType.LAB);
new Session(pdbms3, WeekDay.THU, 7, 3, "N.T.T.Loan", "A2.507", SessionType.THEORY);
new Session(pdbms3, WeekDay.THU, 1, 4, "N.T.T.Loan", "LA1.608", SessionType.LAB);
new Session(pdbms4, WeekDay.FRI, 7, 3, "N.T.T.Loan", "A1.202", SessionType.THEORY);
new Session(pdbms4, WeekDay.MON, 1, 4, "P.Q.S.Lam", "LA1.605", SessionType.LAB);
new Session(pdbms5, WeekDay.MON, 7, 3, "N.T.T.Loan", "L206", SessionType.THEORY);
new Session(pdbms5, WeekDay.WED, 7, 4, "N.T.T.Loan", "LA1.605", SessionType.LAB);

const revo1: Class = new Class(revo);
const revo2: Class = new Class(revo);
const revo3: Class = new Class(revo);
const revo4: Class = new Class(revo);
const revo5: Class = new Class(revo);
const revo6: Class = new Class(revo);
const revo7: Class = new Class(revo);
const revo8: Class = new Class(revo);

new Session(revo1, WeekDay.SAT, 4, 3, "N.Q.Dinh", "A1.202", SessionType.THEORY);
new Session(revo2, WeekDay.FRI, 4, 3, "N.V.That", "A2.301", SessionType.THEORY);
new Session(revo3, WeekDay.FRI, 1, 3, "N.V.That", "A2.601", SessionType.THEORY);
new Session(revo4, WeekDay.THU, 7, 3, "P.T.C.Lai", "A1.201", SessionType.THEORY);
new Session(revo5, WeekDay.WED, 4, 3, "P.T.C.Lai", "A2.402", SessionType.THEORY);
new Session(revo6, WeekDay.MON, 7, 3, "P.T.C.Lai", "A1.401", SessionType.THEORY);
new Session(revo7, WeekDay.TUE, 4, 3, "P.T.C.Lai", "A1.401", SessionType.THEORY);
new Session(revo8, WeekDay.SAT, 7, 3, "N.Q.Dinh", "A1.402", SessionType.THEORY);

const hcm1: Class = new Class(hcm);
const hcm2: Class = new Class(hcm);
const hcm3: Class = new Class(hcm);
const hcm4: Class = new Class(hcm);
const hcm5: Class = new Class(hcm);
const hcm6: Class = new Class(hcm);

new Session(hcm1, WeekDay.TUE, 1, 2, "P.T.T.Huong", "A2.509", SessionType.THEORY);
new Session(hcm2, WeekDay.SAT, 4, 2, "N.P.An", "A1.402", SessionType.THEORY);
new Session(hcm3, WeekDay.WED, 4, 2, "N.P.An", "A2.302", SessionType.THEORY);
new Session(hcm4, WeekDay.MON, 1, 2, "T.T.Chau", "A1.202", SessionType.THEORY);
new Session(hcm5, WeekDay.FRI, 1, 2, "N.T.V.Ha", "A2.302", SessionType.THEORY);
new Session(hcm6, WeekDay.FRI, 4, 2, "N.T.V.Ha", "A1.202", SessionType.THEORY);
/* const schedule = new Schedule();
schedule.addSession(dsa1Theory);
schedule.addSession(dsa1Lab);
schedule.addSession(dsa2Theory);
schedule.addSession(dsa2Lab);
schedule.addSession(wad1Theory);
schedule.addSession(wad1Lab);
schedule.addSession(wad2Theory);
schedule.addSession(wad2Lab);

export { schedule }; */

import * as Flatted from "flatted";

let courses = [dsa, wad, ca, ooad, pdbms, revo, hcm];

courses = Flatted.parse(Flatted.stringify(courses));

console.log(Flatted.stringify(dsa));
export { courses };