const fs = require("fs");
const a = 100;

setImmediate(() => console.log("set Immediate")); //Async
fs.readFile("./file.txt","utf8",() => { //Async
    console.log("File Reading callback");
});
setTimeout(() => console.log("Timer expired"),0);//Async
function printA(){
    console.log("a = ",a);
}
printA();//1st line execute by synchornous code
console.log("Last Line of the file"); //2nd line 

/*
100
Last line of the file

*/
