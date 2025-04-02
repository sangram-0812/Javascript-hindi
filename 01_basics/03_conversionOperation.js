let score = 33
// console.log(typeof score); //number


let score1 = "33"
// console.log(typeof score1); //string

let score2 = "40"
let value = Number(score2)
// console.log(value); // 40
// console.log(typeof value); //number

let score3 = "40abcd"
let value2 = Number(score3)
// console.log(value2); // NaN
// console.log(typeof value2); // number

let score4 = "Sangram"
let value3 = Number(score4)
// console.log(value3); //NaN
// console.log(typeof value3); //number

let score5 = ""
let value4 = Number(score5)
// console.log(value4); //0
// console.log(typeof value4); //number

let score6 = null
let value5 = Number(score6)
// console.log(value5); //0
// console.log(typeof value5); //number

let score7 = undefined
let value6 = Number(score7)
// console.log(value6); //NaN
// console.log(typeof value6); //number

let score8 = true
let value7 = Number(score8)
// console.log(value7); //1
// console.log(typeof value7); //number


// "33" -> 33
// "33abc" -> NaN
// true -> 1 and false -> 0

let isLoggedIn = 1
let boolLoggedIn = Boolean(isLoggedIn)
//console.log(boolLoggedIn)

let isLoggedIn1 = "sangram"
let boolLoggedIn1= Boolean(isLoggedIn1)
//console.log(boolLoggedIn1)

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);



