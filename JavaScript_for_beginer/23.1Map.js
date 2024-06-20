Map->Collection of unique Data , Map is object Constructor (update new value or override new player)

let mymap=new Map([[-1,"RM-1"],[0,"RM0"]]);
mymap.set(1,"RM1");//always in key value paits
mymap.set(2,"RM2");
mymap.set(3,"RM3");

console.log(mymap);

// you can use for loop and there are many other methods and key word also
for(let [key,value] of mymap){
    console.log(`Value - ${value} and this key is-${key} `);
}

mymap.delete(2);//delete
console.log(mymap);

mymap.clear();//clear
console.log(mymap.get(-1));//return value of that index



Weak MAP-> only store obj and cant be iterated

let wm=new WeakMap();
let ob1={};
let ob2={};

wm.set(ob1,"private");
wm.set(ob2,"Private data");
