//CAll():-

let name={
    firstname:"Rounak",
    lastname:"Mukherjee",
    printn:()=>{
        console.log(this.firstname + " " + this.lastname);
    }
}


let name2={
    firstname:"Ghost",
    lastname:"Leader",
    
}
//with using call() we can boeeowing function from one object to another object
name.printn.call(name2);

let name={
    firstname:"Rounak",
    lastname:"Mukherjee",
   
}
let printn=(s)=>{
    console.log("s, " + this.firstname + " " + this.lastname);
}

let name2={
    firstname:"Ghost",
    lastname:"Leader", 
}
printn.call(name2,"Hello");//second parameter is for arguments





//Apply():-
let printn=(s)=>{
    console.log("s, " + this.firstname + " " + this.lastname);
}
printn.call(name2,["hello"]); //seconf argument as a arraylist


//Bind():-// it returns a method that we call later, its use for bind a function to a object
let name={
    firstname:"Rounak",
    lastname:"Mukherjee",
}
let printn=(s)=>{
    console.log("s, " + this.firstname + " " + this.lastname);
}
let p=printn.bind(name2,"hello");
console.log(p);//return a function
p(); //invoked
//it is mainly used for we can bind and invoked it later

