const data={
    name:"sumit kr das",
    id:10,
    deg:"BCA",

    subjects:{
        first : "CPP",
        second : "DS",
    }
};
console.log(`name of the user is ${data.name}`);

var {name,id,deg,subjects} = data; //* this is called object Destructuring in js

console.log(`name of the user is ${name} and my hobby is ${subjects.first}`);

var {name:myName,id:myId,deg} = data; //* rename object Destructuring in js

console.log(`name of the user is ${myName}`);

