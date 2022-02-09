window.open(); // new window open
Window.close(); // new window close
// in global scope variables are property in window and function will be method

console.log(this);// ekhane window print hobe..
// now if we console log in a object then oject print thats why we need to use this
// if we only write console.log(this) is a object thats mean that object print and we thats why we need dot notation
//now assume global have a=10 and in a function a=10 now if we write in fuction console.log(this.a) so print 20... bcz this point to window




const server={
    getdata: function(){console.log(this);}
}
const server2={
      name: conie,
}
server.getdata.call(server2);
// normally this dile server print hoto but ebare server 2 ptint hobe
const server={
    getdata: function(a,b){console.log(this); console.log(a+b)}
}
const server2={
      name: conie,
}
server.getdata.call(server2,1,2);// another example of call



// now apply also same but we need to pass arguments in a form of list
server.getdata.apply(server2,[1,2]);


// ind is like run the function but exicute when you want
const s = server.getdata.bind(server2,1,2);
console.log(s);



// callback
function a(callback){
    callback;
    console.log("Hello");
}
function b(){
    console.log('yo');
}
a(b);
//here b run first the a runs