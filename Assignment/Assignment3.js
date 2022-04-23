/*
Arjun wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 10% if the bill value is between 50 and 300. If the value is different, the tip is 15%.
Your tasks:
1. Calculate the tip, depending on the bill value.
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example:
   “The bill was Rs. 200, the tip was Rs. 20, and the total is Rs. 220”

Test data:
-> Test for bill values 275, 40 and 430
*/

/*
function CalculateTip(n){   
    if(n>50 && n<300){
        return 0.1 * n;
    }
    else{
        return 0.15 *n;
    }
}
let n=400;
tip=CalculateTip(n);
total= n+tip;
console.log(`The bill was ${n} ,the tip was ${tip} , and the total is Rs ${total}`);
*/


//using arrow function
let CalculateTip =(n) => 
{
    
if(n>50 && n<300){
    var tip= 0.1 * n;
}
else{
    var tip = 0.15 *n;
}
total= n+tip;
console.log(`The bill was ${n} ,the tip was ${tip} , and the total is Rs ${total}`);
}

CalculateTip(200);
CalculateTip(275);
CalculateTip(40);
CalculateTip(430);

/*
OUTPUT:
The bill was 200 ,the tip was 20 , and the total is Rs 220
The bill was 275 ,the tip was 27.5 , and the total is Rs 302.5
The bill was 40 ,the tip was 6 , and the total is Rs 46
The bill was 430 ,the tip was 64.5 , and the total is Rs 494.5
*/






