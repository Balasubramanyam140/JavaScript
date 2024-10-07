1) How to use (') and (") between the sentence to print in output

console.clear()
var myFirstString = " I am Balu "

console.log(typeof(myFirstString))

var mySec = 'Full name is Balasubramanaym'
console.log(typeof(mySec))

//what if my string contains a dopuble quote
var doubleQuote = "This is a \"JavaScript\" string"
console.log(doubleQuote)

//what if my string contains a single quote
var sinQuote = 'This is a \'javascipt\''
console.log(sinQuote)

var doubleQuote2 = "This is a 'javascript' string"
var sinQuote2 = 'This is a "JavaScript" string'

console.log(sinQuote2)
console.log(doubleQuote2)

Output:
          
          string
          string
          This is a "JavaScript" string
          This is a 'javascipt'
          This is a "JavaScript" string
          This is a 'javascript' string
