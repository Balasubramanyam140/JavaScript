1) tto finc the length using - .length()
2) to find particular index of any variable - .indexOf('VarName')
3) to find last index of var - .lastIndexOf('VarName')
4) to cut any word from sentence - .slice(pos_1 , pos_2) 

            console.clear()
            var myFirstString = "This is a string for JavaScript String function, JavaScript"
            //returns the length of the string
            console.log(myFirstString.length)
            
            //Find index of a string inside another string
            console.log(myFirstString.indexOf('javaScript'))
            console.log(myFirstString.indexOf('This'))
            
            //find last index of a string index another string
            console.log(myFirstString.lastIndexOf('JavaScript'))
            console.log(myFirstString.lastIndexOf('This'))
            
            //Get a part of our strinf slice(start, end)
            console.log(myFirstString.slice(0, 4))
            console.log(myFirstString.slice(10, 31))
            console.log(myFirstString.slice(-10))
            console.log(myFirstString.slice(5))
            
            //get sub string funcyion - PushSubscription(startPos, length)
            console.log(myFirstString.substr(0,4))
            console.log(myFirstString.substr(21,10))
            console.log(myFirstString.substr(21))

OUTPUT :

59
-1
0
49
0
This
string for JavaScript
JavaScript
is a string for JavaScript String function, JavaScript
This
JavaScript
JavaScript String function, JavaScript
