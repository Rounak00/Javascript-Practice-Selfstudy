Set  -> Collection of unique Data , Set is object Constructor

var arr=[1,4,7,2,5,4];
let objSet=new Set(arr);
console.log(objSet);

objSet.add(value);//add value
objSet.delete(value);//delete value
objSet.clear();//clear
objSet.has();//check




//Weak Set -> we can store only object here but we cant iterate it
let ws=new WeakSet();
let ob1={};
let ob2={};
ws.add(ob1);
ws.add(ob2);

console.log(ws);

#Note-> All set Functions are available here but cant do iteration


