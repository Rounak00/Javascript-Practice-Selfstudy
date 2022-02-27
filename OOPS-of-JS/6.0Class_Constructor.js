// in class always constructor come
class student{
    constructor(name,age){
      this.age=age;
      this.name=name;
    }
    bio(){console.log("hello there");}
}
let obj1= new student("Rounak", 10);

// we can simply pass a class- obejct to another object simply use [] this sign{both are different class not same :-

class st{
  constructor(cls, age){
    this.cls=cls;
    this.age=age;
  }
  print(){
    console.log("Age is "+ this.age +" class is "+ this.cls);
  }
}
class bus{
  constructor(num, students){
    this.num=num;
    this.student=students;
  }
  show(){
    console.log(this.students);
  }
  addstudent(Student){
    this.student.push(Student);
  }
}
let st1 = new st(2,4);
let st2= new st(5,10);
st2.print();
let bus1=new bus(1,[st1,st2]);
console.log(bus1);
// if we want to add another object in this list
let st3=new st(6,11);
bus1.addstudent(st3);

console.log(bus1);

// those set and show functions in a class known as encapsulation



