// 1. Arrow Function:-
let a= ()=>{console.log("Hello World");}

//2.Default parameters
function b(a1=2){console.log(a);}
b();  // Print 2
b(3); // print 3

//3. let 
let c=2;
if(c){
    let c=4;
    console.log(c); // print 4
}
console.log(c);//print 2

// 4. const
//same as let as scoping and never change it's value;

// 5. Multiline String 
console.log(`this
is my
birthday`);

// 6. Template Strings
const d="hello ";
const e= `&{d} world`;
console.log(e); // print hello world

//7. Exponent operatore
let f=2**3;
// same as : math.pow(2,3);

//11. String function
include(); // if a substring availablethen return true
startWith();/endsWith() -> let firstName=Vinod;  console.log(`${firstName}`.startsWith('V'))//return true
repeat(); console.log(`${firstName}`.repeat(5))//print 5 time

//0.8 Rest Operator (use in parameters)
function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);
 
we can written as this using rest operator

function myFunction(... z) { }
let args = [0, 1, 2];
myFunction(args);


//8. Spread operator /Expand array
Example1: 

let a01=[1,2,3];
let a02=[4,5,6];
let a03=[...a01,...a02];
console.log(a03);// 1 2 3 4 5 6

Example2:
function myFunction(a,b,c) { }
let args = [0, 1, 2];
myFunction(...args);


//8.2 Object spread operator / Expand object literal
let a33 ={
    fn: "firstname",
    ln:"Lastname1"
}
let b33={
    ...a33,
    lastname:"lastname33",
    age:10
}
console.log(a33);// here print whole a obj
console.log(b33);// here print the firstname of a and others of b

//9. Destructing array
let [b1, b2]=[1,2];
console.log(b1);// 1 
console.log(b2);// 2
 
#we can also swap nums:-

let a77=77, b77=78;

[a77,b77]=[b77,a77];


//10. Destructing objects
let obj={
    a:10,
    b:20
};
let {a8,b8}=obj;
console.log(a8);// 10
console.log(b8);// 20
# here if we assign variables first and then destructuctre it then it should be always between First brackets. 


//12. Object Property assignment:- 
const a9=2;
const b9=5;
const obj2={a9,b9}
// before es6 --> obj={a:a9 , b:b9};
// after es6--> obj={a: 2, b:5}

//13. Object.assign():-

Example1:
let obja={a:5};
let objb={b:7};
let objc=Object.assign({},obja,objb);//First argument is where we need to assign
console.log(objc);//a:5, b:7

Example2:
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }



//14. Nested Object
let objx={
    a: 10,
    objy={
      c:22
    },
    b:25
}
console.log(objx);// we need to reasearch aboot it ,more


//15. object function assignment
let b77={
    a:10,
     b44(){
      console.log("HEY");
    }
}
b77.b44();//HEY




