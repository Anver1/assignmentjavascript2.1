 var str = "how are you"
function countWords(s){

    var  totalwords=1
    for( let i=0; i<=s.length; i++)
    {
     if(s[i]==' '){
         totalwords++
     }
    }
    return totalwords;
}
console.log(countWords(str))