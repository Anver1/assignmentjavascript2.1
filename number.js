 var num ;
 function numberCheck(num){
     switch(true)
     {
         
         case(num>0):
             console.log("positive");
             break;
             case(num<0):

         console.log("negative");
         break;

         case(num==0):
         console.log("equal");
         break;
     }
 }
numberCheck(-9);