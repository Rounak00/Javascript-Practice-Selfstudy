// Classes, Object & Inheritance in JavaScript OOP

class Students{
    constructor(name,age,clas){
        this.StudentName = name;
        this.age = age;
        this.clas = clas;
    }
    biodata(){
        console.log("I'm Sumit");
    }
}

class players extends Students{

}

let obj1 = new players('sumit',12,"bca");

obj1.biodata();