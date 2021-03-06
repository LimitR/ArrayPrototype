# ArrayPrototype
```javascript
const { ArrayPrototype } = require("./index.js");
const x = ArrayPrototype.new();
x.add(1);
x.add(2);
x.add(3);
const y = x.new();
y.add(4);
y.add(5);
y.add(6);
console.log(x.get()); // [1, 2, 3]
console.log(y.get()); // [4, 5, 6]

x.add("test");

const z = y.new();

z.add("new value");
y.add("end");

console.log(x.get()); // [1, 2, 3, "test"]
console.log(y.get()); // [4, 5, 6, "end"]
console.log(z.get()); // ["new value"]


console.log(x.getPrototype()); // [1, 2, 3, "test"]
console.log(y.getPrototype()); // [1, 2, 3, "test", 4, 5, 6, "end"]
console.log(z.getPrototype()); // [1, 2, 3, "test", 4, 5, 6, "end", "new value"]
console.log(x.getAll()); // [1, 2, 3, "test", 4, 5, 6, "end", "new value"]

console.log(z.get()); // ["new value"]
console.log(z.get(1)); // [4, 5, 6, "end"]
console.log(z.get(2)); // [1, 2, 3, "test"]

const new_x = ArrayPrototype.new();

new_x.add("First value");
const new_y = new_x.new();
new_y.add("Some value");

console.log(new_y.getAll()); // [ 'First value', 'Some value' ]


```