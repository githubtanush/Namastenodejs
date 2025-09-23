console.log("Sum Module executed...");
//by default a modules protects its variables and functions from leaking
// z = "hello world"; in ES6 modules you cannot write like that you must be write let/var 
// because it is a strict mode 
//another way ES Modules
// export let x = 50;
let x = 50;
// export 
function calculateSum(a,b){
    console.log(a + b);
}

//manually we have to export the function calculatesum;
// module.exports = calculateSum;
// and suppose if i not only want to access function also the variable as well as function then
// module.exports = {
//     // x : x,
//     //short hand notation 
//     //javascript itself assumes that it is x : x
//     x,
//     calculateSum,
//     // calculateSum : calculateSum,
// };

//we can also write like that because module.exports is a empty object
module.exports.x = x;
module.exports.calculateSum = calculateSum;