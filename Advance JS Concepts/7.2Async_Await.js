we use async await for use with promises more comfortablely

async function always return promise, await use for calling a function that returns a promise, including web api functions. The keyword await makes javascript wait until that promise settle and return its result 

const p= new Promise ( (resolve, reject)=>{  //Promise produce part
    setTimeout(()=>{
        let roll=[1,2,3,4,5];
        resolve(roll);
        reject("your msg")
    },2000)
} ); //here it is executer function


async function getdata(){
      const data= await p;
      console.log(data);

      //now here there is another function that returns promise then we will rigt this way -> const bio= await function(arg);
}
getdata();


//Simple example of async-await function
async function H(){
    const p="Hello";
    return p;
}
console.log(H());

/*Result 
Promise {<fulfilled>: 'Hello'}
     [[Prototype]]: Promise
     [[PromiseState]] :  "fulfilled"
     [[PromiseResult]] : "Hello"
*/