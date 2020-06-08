/* eslint-disable */
const fastCartesian = require("fast-cartesian");
const { performance } = require("perf_hooks");

const list = [
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
  ["red", "blue", "green"],
  ["circle", "square", "rectangle"],
];

function performanceOf_performance(f, arg, tries = 10) {
  sum = 0;
  for (let i = 0; i < tries; i++) {
    const t0 = performance.now();
    f(arg);
    const t1 = performance.now();
    sum += t1 - t0;
    console.log(`Try ${i + 1}: ${t1 - t0}`);
  }
  return sum / tries;
}

function performanceOf_consoleTime(f, arg, tries = 10) {
  for (let i = 0; i < tries; i++) {
    console.time(`Try ${i + 1}`);
    f(arg);
    console.timeEnd(`Try ${i + 1}`);
  }
}


function myCartesian(list) {
  function getTupleByIndex(list, index) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      let curLen = list[i].length;
      let curEl = list[i][index % curLen];
      res.push(curEl);
      index = Math.round(index / curLen);
    }
    return res;
  }
  let res = [];
  let len = 1;
  list.forEach(sublist => len *= sublist.length);
  for (let i = 0; i < len; i++) {
    res.push(getTupleByIndex(list, i));
  }
  
  return res;
}

const res = performanceOf_performance(fastCartesian, list, 100);

console.log(res);