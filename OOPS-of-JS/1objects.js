// functions in object known as methods 
//variable in objects known as properties

//ex:-
let obj={
    address: "bardhaman",
    salary: 300,

    gatedetail:function (){      //arrow function not work here bcz it dont have this keyword.
     console.log(this.address);
    }
};
obj.gatedetail(); // this is knows as a encapsulation where we hide our data in object

