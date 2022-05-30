// Write your own unit tests here!
var modeCheck = require("./calculateMode");

console.log(modeCheck.calculateMode([1,2,3,4,4,4,5]) === 4);
console.log(modeCheck.calculateMode([45,8,23,99,23,3,4,1,34]) === 23);
console.log(modeCheck.calculateMode(["w","a","w","d"]) === "w");
console.log(modeCheck.calculateMode(["box", "fox", "mox", "fox", "fox", "lox"]) === "fox");
console.log(modeCheck.calculateMode(["cat", 5, "red", "cat", 5, 6, "cat"]) === "cat");