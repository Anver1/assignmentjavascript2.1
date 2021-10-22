  var str = "ram ram";
  var n
 function countWord(str1,n){
    
       var count =0
    for (let i=0; i<str1.length; i++)
    {


     if(str1[i]==n){
     count +=1
     }
  
 }
 return count


 }
console.log (countWord(str,"r"))
