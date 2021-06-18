//normal string declare 
let a="Rounak";
let b="Mukherjee";
// ES5:-
console.log(a.length); // find the length of string
console.log(a.charAt(6)); // find the value of a particuler index
console.log(a.indexOf('R'));
console.log(a.lastIndexOf('R')); 
// indexof normal search  and lastindexof search the last element of string if there are duplicate elements
console.log(a.replace('R','r'));// replace particular element ("old", "new")
console.log(a.toUpperCase());// make upper case
console.log(a.toLowerCase());//Make lower case
console.log(a.concat(b));// concatinate two strings
console.log(a.slice(0,3));// show the elements of a particuler range, (start-index, how many you want)
console.log(a.substr(0,3));// same as slice but slice take value but it can't 
console.log(a.trim());// remove space of a string from begining and ending

//ES6

 console.log(a.startsWith('R')); //result in boolean if stribg start with this element
 console.log(a.endsWith('k'));  //result in boolean if stribg end with this element
 console.log(a.includes('Rou')); //result in boolean if stribg have this element
 console.log(a.repeat(2)); //print or repeat number of times