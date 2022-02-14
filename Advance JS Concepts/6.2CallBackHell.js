/*Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone, hard to read, and hard to maintain code.*/


Example: 
   /*
     1. 2s Student roll no
     2. 2s 2nd name and age
     3. 2s gender 
    */

const getRollNo= ()=>{
      setTimeout( ()=>{
          console.log('API getting roll no');
          let roll=[1,2,3,4,5];
          console.log(roll);
          setTimeout((r)=>{
                const obj={
                    name:"Rounak",
                    age:5
                }
                console.log(`hey ${obj.name}, ${obj.age}`);

                setTimeout((n) => {
                    obj.gender= 'MAle';
                    console.log(`hey ${obj.gender}`);
                },2000,obj.name);
          },2000, roll[1])// here set timeout have 3rd para as argument and this argument go to fat arrow function as parameter
      },2000) 
}
getRollNo();
now this is call back hell bcz when code goes more complex we cant handle that complexity, bcz here everything connected with each other, to resolve it we use Promise