var value;
function checkk(value)
{
     let ans = '';
     switch( value%2){
         case 0:
              ans = "even";
        break;
        case 1:
            ans = "odd"
     }
     return ans;
 }
 console.log(checkk(15));