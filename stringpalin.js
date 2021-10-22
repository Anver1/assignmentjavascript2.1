 var str = "aba"
 function stringPalin(str1){
     var str2 = str1.split('').reverse().join('')
     if(str1==str2){
         console.log("string is palin")
     }
     else{
         console.log("it is not")
     }
 }
 stringPalin(str)