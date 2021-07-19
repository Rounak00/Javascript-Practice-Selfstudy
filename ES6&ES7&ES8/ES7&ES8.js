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