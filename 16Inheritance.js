/* 1. Prototypal inheritance
2. class and sub-class inheritance
3. oop and functional programming*/

// Prototypal inheritance:-
const shape={
    height:"10mm",
    width: "20mm"
}
let circle={
    radius:"5mm"
}

circle.__proto__=shape;//prototypal inheritance
console.log(circle.radius);
console.log(circle.height);
console.log(circle.width);



//Prototype keyword
function person(eye,age,name){
    this.name=name;
    this.eye=eye;
    this.age=age;
}
person.prototype.occupation='Doctor';// sobar bydefaultu choleasbe
let a = new person("black",18,"xyz");

console.log(a);//bydefault occupation ase na
console.log(a.occupation);//atai occupation asbe