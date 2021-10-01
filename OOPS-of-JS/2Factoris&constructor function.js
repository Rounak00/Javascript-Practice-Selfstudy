// if we make same type of objects each time then  we can use objects of function that calls factoris

function create(add, salary){
    return{
        address: add,
        salary, //if key and value is ame we can write only key

    };
}
const obj= create("bardhaman", 20);

// we can also make with constructor function
// constructor function

function Create (add, salary){   // here always name start with capital
   
    this.address=add;
    this.salary=salary;  // we can write function here also

}
const obj1= new Create("kol",10);

    
