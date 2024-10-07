1) How to use numbers and differrence btw decimal and integer 

console.clear()

var num1 = 10; //Integer
var num2 = 10.7; //Decimal Number

console.log(typeof(num1))
console.log(typeof(num2))

var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

//Substractiob
var diff =- num3 - num1;
console.log(diff);

//Multiplication
var mul = num3 * num1;
console.log(mul);

//Division
var div = num3/num1;
console.log(div);

var divByZero = num3/0;
console.log(divByZero);
console.log(typeof(divByZero));

var mulByString = num3 * 'A';
console.log(mulByString);    //gives Nan which means not a number
console.log(typeof(mulByString))

output :
          number
          number
          35.7
          -25
          150
          1.5
          Infinity
          number
          NaN
          number
