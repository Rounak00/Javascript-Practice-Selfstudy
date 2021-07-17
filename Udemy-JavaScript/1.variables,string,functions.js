// Declaration of variables
var firstNum=10;

// now there some rules of name like:-
//camel case = firstNum
//pascal case = FirstNum
//snake case = first_num

// in variable name we can use num,words, _ and $;
// now there some more rules like the name can not start with Number and name is case sensitive

//---------------------------------------------end---------------------------------------
//Java script numbers:-
let a=10;
let b= '10';
let c=5.9874;
/*Change num to string:*/ console.log(a.toString());
/*Change string to num(int):*/console.log(parseInt(b));
/*Change string to num(float):*/console.log(parseFloat(c));
/*toFixed() take float nums and round it to given position:*/ 
console.log(c.toFixed());// ans will be 6
console.log(c.toFixed(2));//ans will be 5.99
console.log(c.toFixed(3));//ans will be 5.988
//---------------------------------------------end---------------------------------------
//JAvaScript String:-
let a="HELLO WORLD WORLD";
a.length;//return length
a.indexOf('WORLD');//return index of w but first WORLD
a.lastIndexOf('WORLD');//return index of W but decond world
a.slice(0,4);//0 to 4 index elements are return (here only hello) here is (start , end index)
a.subString(0,5);// here is (start , length) and so return HELLO
a.toUpperCase(); // to lower case
a.toLowerCase();// for upper case
a.charAt(W);//return the position of w

let a1="this is my school";
let a2="hello,worlo,rounak";
a1.split(" ");//return array like this ["this","is","my","school"]
a2.split(",");// output will be ["hello", "world", "rounak"]  
//---------------------------------------------end---------------------------------------
//Null vs undefined
//Null is only for those variables that assign has no values
// undefine means variables that not assigned