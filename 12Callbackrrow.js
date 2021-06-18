function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(isEven(3));

// .............arrow function/Fat Arrow Function.......................

var isOdd = (number) => {
    return (number % 2 != 0);
};
console.log(isOdd(3));

// .............callback function.......................
var isEvenNum = (num) => {
    return (num % 2 === 0);
}
//every means every single element
var result1 = [2, 4, 6, 8, 10].every(isEvenNum);
var result2 = [2, 3, 6, 8, 10].every(isEvenNum);
console.log(result1);
console.log(result2);

// .............callback function & arrow function shortcut.......................
var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(`Result is ${result}`);