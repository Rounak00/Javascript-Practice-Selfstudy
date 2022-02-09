//Math objects

//ES5
Math.PI; //Return pie value
Math.sqrt(/*num*/);//Square root of number
Math.pow(/*num,power*/);// power operation of a umber
Math.abs(/*num*/);//ALways positive
Math.min(/*num1,num2,num3*/);//  show minimum number
Math.max(/*num1,num2,num3*/);//show the maximum
Math.random();//throw eandom number between 0-1
Math.round(/*num*/);//0.0-0.4 throw 0 & 0.5-0.9 throw 1
Math.ceil(/*num*/);//if there is decimal then turn into next num like 0.2,0.3,0.9 all turn 1.
Math.floor(/*num*/);// if decimal turn into prev or lower num like 0.1,0.9 turn into 0

//ES6
Math.trunc(/*num*/);// same as math.floor but it just show prev number not low
//Example:
console.log(Math.trunc(-6.5));
console.log(Math.floor(-6.5));
//floor shows -7 bcz its lower


Math.sign(/*num*/) ; // it shows positiove or negative and etc

/* positive = 1
   negative = -1
   0 = 0
   string / NAN = NAN */