//ES5

let user = {
    id: 01,
    firstName: "Sumit",
    middleName: "Kumar",
    lastName: "Das",

    yourFullName: function () {
        return (`My full name is ${this.firstName} ${this.middleName} ${this.lastName}`);
    }
};

console.log(user.firstName);

//..............add a element into the object..............................

user.fullName = "Sumit Kumar Das";

console.log(user.fullName);

//..............print into the form of table..............................

console.table(user);

//..............function of the class..............................

console.log(user.yourFullName());

//ES6
// DEstructing of object
let {a1 , a2, a3} = user;
console.log(a1 , a2 , a3);