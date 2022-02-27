const person={
    fname:" ",
    lname:" ",
    get fullname(){
        return `${person.fname} , ${person.lname}`; //not 'this', only obj name
    },
    set fullname(v){
       const parts=v.split(' ');
       this.fname=parts[0];
       this.lname=parts[1];
    }
};

person.fullname="Rounak Mukherjee";
console.log(person.fullname);

//Getter access the properties and Setter change(mutate) them
