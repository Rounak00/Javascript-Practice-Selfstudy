class car{
    static price(){
        console.log(this);
    }
}

car.price();

//Static methods are soemthin for that we dont need a object. we mainly used it for utility functions

// normal variables and functions in class are known as instance variable and instance methods


//static variable
class Person { 
    static age = 0; 
     getAge() { return Person.age++; }
} 
const p=new Person();
console.log(Person.age); 
console.log(p.getAge());
console.log(p.getAge());

//Static Method
class Person { 
    static age = 0; 
     static getAge() { return this.age++; }
} 

console.log(Person.age); 
console.log(Person.getAge());
console.log(Person.getAge());
