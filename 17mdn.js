//42.Objects from MDN docs
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

var class1 = {
    name: "",
    getUserName: function () {
        console.log(`user name is ${this.name}`);
    }
};
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
var result=Object.create(class1);
console.log(result);

class1.name="sumit kr das";
class1.getUserName();