//taken from NAMAStey JS season 2 

/*3Stage of Promises: A promise is an object that may produce a single value some time in the future (use in async JS)

  1.Pending
  2.Resolve / fulfiled
  3.Reject

*/
//2Syntax are there promise obj and promise constructor

/*
promise constructor;-
 
 const p= new Promise ( (resolve, reject)=>{  //Promise produce part
       setTimeout(()=>{
           let roll=[1,2,3,4,5];
           resolve(roll);
           reject("your msg")
       },2000)
 } ); //here it is executer function

*/
 const cart =["Shoe","pants","kurta"];

 //1.
 //createOrder(cart); // orderID
 //proceedToPayment(orderID);
//   --- normal way


//2.
// createOrder(cart,function(orderId){
  //proceedToPayment(orderID);
 //});
 // using call back  but we can have inversion of control problem



const promise= createOrder(cart); //return us a object

promise.then(function(orderId){ // in 2 we are passing the function but here we are attaching it
  proceedToPayment(orderID);
 })

/*---------------------------------Real promise obj-------------------------- */
const GIT="https://api.github.com/Rounak00"

const user=fetch(GIT) //return promise
 
/*------------------------------Caompare normal callback and promise--------------------------------*/

createOrder(cart,function(orderID){
    proceedToPayment(orderID,function(paymentInfp){
        showOrderSummary(paymentInfp,function(){
               updateBalance();
         })
    })
})

createOrder(cart).then(function(orderID){return proceedToPayment(orderID)})
                 .then(function(paymentInfp){return showOrderSummary(paymentInfp)})
                 .then(function(paymentInfp){return updateBalance()}) 
                 //return so data flow to next [it can be a bug]
                 //if we use arrow function then its no need of return as only one line

/*--------------------------------------------------Promise chain----------------------------------- */
const cart=["kurta","brush","shoe"];
//take from previous example
const promise= createOrder(cart);

console.log(promise);// <pending> as we set time
promise
   .then(function(orderId){ 
     console.log(orderId); //after 5 sec it will return 
     return orderId;
    })
   .then(function(orderId){return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
      console.log(paymentInfo);
    })
   .catch(function (err){
    console.log(err.msg);
    })
//producer end
function createOrder(cart){
  const pr=new Promise(function(resolve,reject){
      //create order
      //validate cart
      //order id
      if(!validateCart(cart)){
          const err=new Error("Cart is not valid");
          reject(err);
      }
      const orderID="12345";//actually DB call that return
      if (orderID){
         setTimeout(function (){resolve(orderID);},5000)
      }
  }); //promise constructor give two arguments resolve and reject

  return pr;
}

function proceedToPayment(orderId){
     return new promise(function(resolve,reject){
        resolve("payment successful");
     })
}

function validateCart(cart){
  return true;   //for simplicity
}




/* ****  
1. In chaining we always have to return value so it goes from top to bottom
2. catch can handle any error on any of the top part not bottom  part
*/


/*----------------------------------------------------API promise------------------------------------  */

Promise.all() --> make parallel api calls , use to handle multiple api calls. take argument as a array of promise. 
Promise.all([p1,p2,p3]) // if all success return result of array and it will take max time of all calls. 
// if any reject then  it will through error imidiately

Promise.allSettled() --> if all get successfull same as .all();
//if some reject, it will wait for all promise to settled and return a array of result and errors.


 3. Promise.race = It will give the result of first settled promise.
                 In case of failure of the first settled promise it will return ERROR.
                  It will not wait for other promise to get settled.

4. Promise.any=   Same as Promise.race but it Waits only for first success result
                  If all the promises fails they the result would be AGGREGATED ERROR
                  Gives the list of all error

// Promise.all SUCCESS
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P2 SUCCESS"),1000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.all([p1,p2,p3]).then((res)=>{
  console.log(res)
});
// [ 'P1 SUCCESS', 'P2 SUCCESS', 'P3 SUCCESS' ]


// Promise.all FAILURE
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P2 FAILED"),1000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.all([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
// P2 FAILED

// Promise.allsettled SUCCESS
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P2 SUCCESS"),1000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
// 0:{status: 'fulfilled', value: 'P1 SUCCESS'}
// 1:{status: 'fulfilled', value: 'P2 SUCCESS'}
// 2:{status: 'fulfilled', value: 'P3 SUCCESS'}
// length:3
// Promise.allsettled FAILED
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P2 FAILED"),1000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),2000);
})
Promise.allSettled([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
// 0:{status: 'fulfilled', value: 'P1 SUCCESS'}
// 1:{status: 'rejected', value: 'P2 FAILED'}
// 2:{status: 'fulfilled', value: 'P3 SUCCESS'}
// length:3

// Promise.race SUCCESS
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),1000);
})
Promise.race([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
//P3 SUCCESS
// Promise.race FAILED
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.race([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
// P3 FAILED


// Promise.any SUCCESS
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P2 SUCCESS"),2000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P3 SUCCESS"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
//P3 SUCCESS


// Promise.any SUCCESS
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>resolve("P1 SUCCESS"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P2 FAILED"),2000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);
});
//P1 SUCCESS



// Promise.any FAILED
const p1=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P1 FAILED"),3000);
})
const p2=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P2 FAILED"),2000);
})
const p3=new Promise(function(resolve,reject){
  setTimeout(()=>reject("P3 FAILED"),1000);
})
Promise.any([p1,p2,p3]).then((res)=>{
  console.log(res);
})
.catch((err)=> {
  console.error(err);         //AggregateError: All promises were rejected
  console.log(err.errors);    //['P1 FAILED', 'P2 FAILED', 'P3 FAILED']
});


// PROMISE SETTLED
// RESOLVE--------SUCCESS-------------FULFILLED
// REJECT---------FAILURE-------------REJECTED
