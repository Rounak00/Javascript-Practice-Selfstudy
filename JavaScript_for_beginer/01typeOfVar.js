//We can use typeof() function to understand the datatype

let a=true;
let b = [1 ,2 , 3];
let c= 2;
let d=c/0;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));

//----------------------------------------------------------------
//const means unique
const userName="1234";
//userName="12345";
//we cannot change the value of const second time


var myName="sumit kumar das";
var id=01;
var email="sumit@gmail.com";
var password="1234";

//using baktik we desplay the value of all variables

console.log(`
    id: ${id}
    Your name:${myName}
    Email id:${email}
    Password:${password}
`);

//"let"- is also same like var but it use block scope
let bh=`Rounak`;
{
    console.log(` ${bh} `);
}

// function letTest() {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

