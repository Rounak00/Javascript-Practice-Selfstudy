//ES5

let user = {
    id: 01,
    firstName: "Sumit",
    middleName: "Kumar",
    lastName: "Das",

    yourFullName: function () {
        return (`My full name is ${this.firstName} ${this.middleName} ${this.lastName}`);
    }
}
//this is bracket notation , very often use
console.log(user['firstName']);
//This is dot notation  
console.log(user.firstName);

//..............add a element into the object..............................

user.fullName = "Sumit Kumar Das";

console.log(user.fullName);

//..............print into the form of table..............................

console.table(user);

//..............function of the class..............................

console.log(user.yourFullName());


// create:-
   const person= new Object({name:'rounak',class:10 });//using new keyword


//prototypial inheritance   
   const person2= Object.create(person); // by default take same prperty of person if we dont change person 2

//delete:-
delete person.name;// delete like this



//ES6
// DEstructing of object
let {a1 , a2, a3} = user;
console.log(a1 , a2 , a3);


// Another Example of Destructing
const data={
    name:"sumit kr das",
    id:10,
    deg:"BCA",

    subjects:{
        first : "CPP",
        second : "DS",
    }
};
console.log(`name of the user is ${data.name}`);

var {name,id,deg,subjects} = data; //* this is called object Destructuring in js

console.log(`name of the user is ${name} and my hobby is ${subjects.first}`);

var {name:myName,id:myId,deg} = data; //* rename object Destructuring in js

console.log(`name of the user is ${myName}`);






// GETTER and SETTER:-
var a ={
    name:"Lambo",
    get gu(){      //get property
      console.log("2lakhs ");
    },
    set gui(carname){   //set property
      this.name=carname;
    }
};


// assign and spread operator:-
Object.assign(obj2,obj1);//obj2 obj1 er akta clone hoi jabe

obj2={...obj1};// es6 we use spread operator same as assign


//Instance of operator
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
