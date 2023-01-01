//think you dont have a bind function and you need to exicute it by yourself so it is polyfill that we need to implement

let name={
    firstname:"Rounak",
    lastname:"Mukherjee",
   
}
let printn=(s)=>{
    console.log("s, " + this.firstname + " " + this.lastname);
}
let p=printn.bind(name,"hello");
p();
................Our Function.apply..................

Function.prototype.mybind=function(...args){
    let o=this;
   params=args.slice(1); //bcz args[0] is the obj
return function(...args2){//invoked times arguments
   
    o.apply(args[0],[...params,...args2]); //we can use call but for arguments those are array so we need apply() here
    //here this array destructing syntax actually concat both arays and make them one
}
}
let p=printn.mybind(name,"hello");
p("Good morning");