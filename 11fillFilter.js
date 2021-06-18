var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.fill("s", 2, 8));

//....................filter..................

var array2 = [12, 13, 13, 14, 15];
const result=array2.filter((num)=> num != 15);
console.log(result);