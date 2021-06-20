// video no 40 and before
//This is the functional way to createing the Object
var User=function(firstName,courseCount){
    this.firstName = firstName;//this is the another type of defineing a object
    this.courseCount = courseCount;
    this.getCourseCount=function(){
        console.log(`course count is: ${this.courseCount}`);
    };
};

var result= new User("sumit",12);
console.log(result);

User.prototype.getFirstName=function(){
    console.log(`my first name is ${this.firstName}`);
};
result.getFirstName();
