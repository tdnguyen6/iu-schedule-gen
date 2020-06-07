let start = 4;
let count = 3;
let res = [...Array(count).keys()].map(x => x += start);
console.log(res);

let a = [1, 2, 3];
let b = [4, 2, 5, 6];

let intersect = a.some(x => b.includes(x));
console.log(intersect);