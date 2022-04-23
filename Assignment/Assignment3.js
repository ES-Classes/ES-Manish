
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

