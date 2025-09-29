const fs = require("fs");
setImmediate(() => console.log("set Immediate"));
setTimeout(() => console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf8",() => {
    setTimeout(()=> console.log("2nd timeout"),0);
    process.nextTick(()=> console.log("2nd nextTick"));
    setImmediate(()=> console.log("2nd setImmediate"));
    console.log("File Reading Callback");
});
process.nextTick(() => console.log("next Tick"));
console.log("Last Line of the file !!!!");
