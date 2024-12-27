// Prevent us from attempting to use variables
// that are not declared
"use strict";


const x = 10;
x = 8;
console.log (x);
//Cannot redeclare block-scoped variable 'Age'.ts(2451)
const Age =40;
Age = 48;
console.log(Age);
//Cannot redeclare block-scoped variable 'Age'.ts(2451)
let y = 10;
y = 8;
console.log (y);

let Age =40;
Age = 48;
console.log(Age);


const Food = "noddles";
menu = "rice";
console.log (Food);


let food = "foofoo";
food = rice;
console.log (food);




//
With Let we can redeclare the varaiable instead of with const


