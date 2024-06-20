// There is technically no class, they're both just functions. Any function can be invoked as a constructor with the keyword new and the prototype property of that function is used for the object to inherit methods from. "Class" is only used conceptually to describe oops

function user(){}

class course{}

console.log(typeof user);
console.log(typeof course);  //both are function

// But there is a fundamental difference is :_

const U=new user;
function user(){}

const C=new course;
class course{}

//here we cant access class before intialize but we can access function before intialize so class are not hoisted.

//by default in class all methods store in prototype