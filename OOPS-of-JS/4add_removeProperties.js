let obj={
    salary: 20,
    date: 21,
    print() {
        console.log(this.salary);
    }
}

//add
obj.objofobj={address:"kolkata"};


// now assume you want to write obj-of-obj in that case its not work for special character ncz there is "-"
// so we use this:-
obj[`obj-of-obj`]={address: "bardhaman"};

// remove
delete obj.objofobj;
delete obj[`obj-of-obj`];

console.log(obj);