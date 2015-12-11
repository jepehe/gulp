
let x = 1;
let y = 2;

console.log(`${x} + ${y} = ${x + y}`);

var s = new Set();

[2,3,5,4,5,2,2].map(x => s.add(x))

for (i of s) {console.log(i)}