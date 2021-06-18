var maxval = Math.max(1,2,3,4,5,9);
console.log(maxval);

//* Rest Parameters in ES6 
//* ...this is called rest parameter
function sum(...inputs){
    console.log(...inputs);
    sumis=0;
    for(var i of inputs)
        sumis+=i;
    console.log(sumis);
}
sum(1,2,3,4,5,6);

//*learn Spread Operator form youtube
//Same as rest but use for array
let arr=[1 , 2 , 3];
function sam(a,b,c){
    console.log(a+b+c);
}
sam(...arr);
