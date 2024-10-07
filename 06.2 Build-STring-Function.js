1) .toUpperCase()
2) .toLowerCase()
3) .concat()
4) .trim()
5) .charAt(' ')

              console.clear()
              var exampleString = "This is a JavaScript "
              
              //toUpperCase() - converts string to upper case
              console.log(exampleString.toUpperCase())
              
              //toLowerCase() - converts to lower case
              console.log(exampleString.toLowerCase())
              
              //concat - it merges two or more strings
              var firName = "Bonu"
              var lastName = "Balasubramanyam"
              console.log(exampleString.concat(firName))
              console.log(exampleString.concat(' ',firName,' ', lastName))
              
              //we can alse use '*' to concat two or more strings
              console.log(firName+' '+ lastName+' '+ exampleString)
              
              //trim() - It removes extra spaces
              var extraSPaceString = '         myString      '
              console.log(extraSPaceString.trim())
              
              var extraSPaceString2 = '          My string      '
              console.log(extraSPaceString2.trim())
              
              //charAt() -> this takes a postion as an arg and returns the character at that position
              var charAtExampleString = 'This is my test string'
              console.log(charAtExampleString.charAt(5))
              console.log(charAtExampleString.charAt(11))
              
              //split () splits our string on tje basis of the arguments
              
              var sampleString = "This is my Sample String"
              console.log(sampleString.split(' '))
              
              var sampleString2 = "This,is,my,sample,string"
              console.log(sampleString2.split(','))
              
              var sampleString3 ="This is awesome"
              console.log(sampleString3.split())

Output :
            
            THIS IS A JAVASCRIPT 
            this is a javascript 
            This is a JavaScript Bonu
            This is a JavaScript  Bonu Balasubramanyam
            Bonu Balasubramanyam This is a JavaScript 
            myString
            My string
            i
            t
            [ 'This', 'is', 'my', 'Sample', 'String' ]
            [ 'This', 'is', 'my', 'sample', 'string' ]
            [ 'This is awesome' ]
