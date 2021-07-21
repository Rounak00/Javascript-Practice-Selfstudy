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

//spread
let arr3=[1,4,7,2];
function sum(x,y,z,w){
    return x+y+w+z;
}
let arr2=sum(...arr3);
console.log(arr2);

// we can also use spread in array
var a=[1,2,3,4];
console.log(...a);


//Same as rest but use for array
let arr=[1 , 2 , 3];
function sam(a,b,c){
    console.log(a+b+c);
}
sam(...arr);
