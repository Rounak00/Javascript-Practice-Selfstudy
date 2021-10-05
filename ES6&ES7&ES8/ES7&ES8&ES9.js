
//ES7
//includes:
let arr=[1,2,3,4,5];
console.log(arr.includes(8));
//its check element wheather it is there or not and return true false

//Exponential:(**)
console.log(2**2); //2 to the power 2






//ES8
//1. String-Prototype Padstart/padend(total length,textToAdd)
let a=" a";
console.log(a.padStart(10,"hi"));// first index theke suru hobe 10 ghor cholbe
console.log(a.padEnd(10,"hi"));// same as padstart but last theke hobe
// here length means , the total string length.toFixed.call. until its feel it repeat and store letters

//2.object.value()

let obj35={
    fs:"firstname",
    ls:"lastname",
    age:24,
    country:"India"
}
let a111=Object.value(obj35);
console.log(a111);
//its return a array of [values] like this

//Output:-
//["firstname","lastname",24,"India"]

//  3.object.entries()
let obj5={
    fs:"firstname",
    ls:"lastname",
    age:24,
    country:"India"
}
const entr=Object.entries(obj5);
console.log(entr);
//its return a array of [key,value] like this
//print the inside of whole obj
//Output:-
// ["fs","firstname"],
// ['ls','lastname'],
// ['age',24],
// ['country' , 'India']



//4.async function (i am not great with it...)


//5.Trailingcommas:-
let a7=[1,2,3, ,];
console.log(a7);
console.log(a7.length);


//ES9
//1. RegEx changes




//2.Rest and spread operator

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


//3.Asynchronous iteration