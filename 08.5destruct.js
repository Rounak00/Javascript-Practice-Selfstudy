//Array destructureing
let a,b;
[a,b]=[10,20];
console.log(`a is ${a} & b is ${b}`);

let x,y,z;
[x,y,...z]=[101,102,103,104,105];
console.log(x,y);
console.log(z);
console.log(`z1 is ${z[0]}`)
console.log(`z2 is ${z[1]}`)
console.log(`z3 is ${z[2]}`)

//Object destructureing
let obj={
    a:10,
    b:20
};
let {a8,b8}=obj;
console.log(a8);// 10
console.log(b8);// 20



const lang = ['c','c++','java','js'];
[a,b,c,d] = lang;

console.log(a,b,c,d);