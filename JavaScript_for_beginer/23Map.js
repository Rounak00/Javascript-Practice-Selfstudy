let mymap=new Map;
mymap.set(1,"RM0");//always in key value paits
mymap.set(2,"RM1");
mymap.set(3,"RM2");
console.log(mymap);

// you can use for loop and there are many other methods and key word also
for(let [key,value] of mymap){
    console.log(`Value - "${value} and this key is-${key} "`);
}

mymap.delete(2);
console.log(mymap);