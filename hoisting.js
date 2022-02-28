//hoisting -  variable and function names can be used before declaring it
x = 3;
console.log (x);
var x;

x = 5;
var x;
console.log (x);

var x = 7
console.log(x)


//Hoisting is only possible with declaration but not the initialization
console.log (y); //y = undefined
y = 3;
var y;


/*
//let keyword
console.log(number);
let number = 1; //Error: Cannot access before initialization

*/

//Function hoisting

let num1 = 20,
num2 = 10;

let result = add(num1, num2);
console.log(result);

function add(a, b) {
  return a + b;
};
