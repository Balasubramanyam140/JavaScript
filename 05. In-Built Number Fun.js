1. converting to float using parseFloat()
2, converting to Int using parseInt() 
3. convert to a fixed length of float using .toFixed()
console.clear();
var num1 = 10;
var num2 = 20.8;
//toString() number as input and returns a string
console.log(num1.toString())
console.log(num2.toString())

var strNum1 = "10";
var strNum2  = "11.6";
var strNum3 = "ABC";
//parseInt() string numeral as input and returns a number
console.log("Converting to Int using parseInt()");
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));  //Nan - not a number
//parseFloat() string numeral as an input and returns a float numer
console.log("Converting to float using parseFloat()");
console.log(parseFloat(strNum2))
console.log(parseFloat(strNum3));
//toFixed() takes floating number and rounds it off to given position
var strFloat = 97.9786577;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(10))


Output:
10
20.8
Converting to Int using parseInt()
10
11
NaN
10
20.8
Converting to Int using parseInt()
10
11
NaN
10
20.8
Converting to Int using parseInt()
10
11
NaN
Converting to float using parseFloat()
11.6
NaN
98
97.98
97.9786577000
