// 1. Object Create

function CreatePollyfill(sourceObj){
  const obj={};
  Object.setPrototypeOf(obj,sourceObj);
  return obj;
}
// Example usage:
const person = { greet: function() { return "Hello!"; } };
const newPerson = CreatePollyfill(person);
console.log(newPerson.greet()); // "Hello!"


// 2. New Function()

function myNew(callback,...args){
   const newObj={};

   Object.setPrototypeOf(newObj,myNew.prototype);
   Object.getPrototypeOf(newObj).constructor=callback;
   // we can directly do this instead of line 19 and 20   Object.setPrototypeOf(newObj, callback.prototype); // Set prototype
   
   const result= callback.apply(newObj,args); // done so this will point to newObj
   return result || newObj;
}

function person(){ this.name="Rounak"}

const P=new person();
console.log(P); // {name:"Rounak"}

const P1=myNew(person,1,2,3,4,5);
console.log(P1); // {name:"Rounak"}
