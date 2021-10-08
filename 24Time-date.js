const d= new Date();

console.log(d)
//There are  ways to create a new date object:

new Date()
new Date(year, month)
new Date(year, month, day)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

//in terms of month january is 0

console.log(d.getUTCFullYear())
console.log(d.getUTCMonth()+1)
console.log(d.getUTCDate())

//we can also set
d.setMonth(value)
d.setDate(value)
d.setFullYear(value);


///.................Time....................

d.getTime();//return in milliseconds
d.getHours();// return hour in 0-23
d.getSeconds()// return sec'



///........................setTimeout&clearTimeout..........
// setTimeout works only one time in particular time and in other hand setInterval it use repeatedly
let timeref=setTimeout(() => {function }, time);
clearInterval(timeref); //automatically exicute interval stop