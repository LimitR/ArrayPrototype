const { ArrayPrototype } = require("./index.js")
const x = ArrayPrototype.new()
x.add(1)
x.add(2)
x.add(3)
const y = x.new()
y.add(4)
y.add(5)
y.add(6)
console.log(x.get());
x.add("test")
x.add("test2")
const z = y.new()
z.add("zzzz")
y.add("end")
console.log(y.getPrototype());
console.log(z.getPrototype());