var array = ["sumit", "snehasis", "suman", "amit"];

for (i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
}

console.log("---------------After POP----------------------------------");
array.pop();
console.log(`${array}`);

console.log("-------------------After UNSHIFT(add element into the front)------------------------------");
array.unshift("unshift");
console.log(`${array}`);

console.log("---------------------RESULT----------------------------");
for (i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
}
console.log("-------------------After SHIFT(remove first array element)------------------------------");
array.shift();
console.log(`${array}`);

console.log("---------------------RESULT----------------------------");
for (i = 0; i < array.length; i++) {
    console.log(`${array[i]}`);
}
