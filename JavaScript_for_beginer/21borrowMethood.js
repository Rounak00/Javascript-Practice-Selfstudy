const person1 = {
    name: "John",
    age: 15,
    displayAge: function(){
        console.log("He is " + this.age + " years old");
    }
};
person1.displayAge(); /*Output: He is 15 years old*/

const person2 = {
    name: "Mike",
    age: 20
};

/*Using the call() method*/
person1.displayAge.call(person2); //Output: He is 20 years old 

/*Using the bind() method*/
person1.displayAge.bind(person2); //Output: He is 20 years old

/*Using the apply() method*/ 
person1.displayAge.apply(person2); //Output: He is 20 years old 
