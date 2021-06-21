var a = ["sumit", "snehasis", "suman", "amit"];
var b= ["Rounak" , "jit"];
for (i = 0; i < a.length; i++) {
    console.log(`${a[i]}`);
}


// ES5
console.log(a.length); // return the length of array
console.log(a.sort());// for sorting in ascending order
console.log(a.reverse()) ;// for sorting in descending oreder
console.log(a.indexOf("sumit"));// return the index number
console.log(a.concat(b));// for concatination two arrays
console.log(Array.isArray(a));// if the variable is array show true
// push and pop use for edit values from the END of the array
a.push("jit");
console.log(a.sort());
a.pop();
console.log(a.sort());
// unshift and shift use for edit values from the Begining of the array
a.unshift("Rm");
console.log(a.sort());
a.shift();
console.log(a.sort());    // here pop is shift and push is unshift


// ES6
//Destructering Array - only new feature
let [a1,a2]=b;
console.log(a1 , a2);

let [b1,b2,,,b3]=a;
console.log(b1,b2,b3);

//.............Fill........................
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.fill("s", 2, 8));

//....................filter..................

var array2 = [12, 13, 13, 14, 15];
const result=array2.filter((num)=> num != 15);
console.log(result);

// var isOdd = (number) => {
//     return (number % 2 != 0);
// };
// console.log(isOdd(3));

// // .............callback function.......................
// var isEvenNum = (num) => {
//     return (num % 2 === 0);
// }
// //every means every single element
// var result1 = [2, 4, 6, 8, 10].every(isEvenNum);
// var result2 = [2, 3, 6, 8, 10].every(isEvenNum);
// console.log(result1);
// console.log(result2);


//................Array swipe...............
// let a=[1,2,3];
// let b=[7,8,9,10];
// let temp;
// temp=a[3];
// a[3]=b[4];
// b[4]=temp;