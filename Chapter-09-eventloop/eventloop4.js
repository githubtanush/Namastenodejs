const fs = require("fs");
setImmediate (() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"),0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf8",()=>{
    console.log("File Reading callback");
})
process.nextTick(()=>{
    process.nextTick(()=> console.log("Inner Next Tick"));
    console.log("NextTick");
})
console.log("Last Line of the file !!!!");

/*
This is based on the event loop architecture
Last line of the file!!!

*/