var user = {
    id: 01,
    firstName: "Sumit",
    middleName: "Kumar",
    lastName: "Das",

    yourFullName: function () {
        return (`My full name is ${this.firstNamefirstName} ${this.middleName} ${this.lastName}`);
    }
};
console.log(user.yourFullName());