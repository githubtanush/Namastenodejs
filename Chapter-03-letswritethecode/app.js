require("../xyz")
//we want to import it manually for accessing its function
// const obj = require("./sum")
//also do destructuring instead of object
// const { x, calculateSum } = require("./calculate/sum")
// const { calculateMul } = require("./calculate/multiply")
//But for nested we can write like 
const { x, calculateSum, calculateMul} = require("../calculate")
//we can also write import export es modules
// import {x,calculateSum} from "./sum.js";

const data = require ("../data.json")
console.log(JSON.stringify(data))
var name = "Namaste Nodejs";
var a = 20;
var b = 10;
// obj.calculateSum(a,b);
// console.log(obj.x);
calculateSum(a,b);
calculateMul(a,b);
console.log(x);
console.log(globalThis === global)