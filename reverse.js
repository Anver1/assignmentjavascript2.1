 var str = "hello this is sample"

 function stringWord(x=''){
       var str1 = x.split(' ')
       for (let i=0;i<str1.length; i++){
             let a =str1[i]
             str1[i]=a
             
             .split('').reverse().join('')
       }
       return str1.join(' ')
       }
       console.log(stringWord(str))