
// 1. Polyfill for Array.prototype.map

Array.prototype.myMap = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
};

// Example usage:
const arr = [1, 2, 3];
const mappedArr = arr.myMap(num => num * 2);
console.log(mappedArr); // [2, 4, 6]

// 2. Polyfill for Array.prototype.filter

Array.prototype.myFilter = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
};

// Example usage:
const filteredArr = arr.myFilter(num => num > 1);
console.log(filteredArr); // [2, 3]

// 3. Polyfill for Array.prototype.reduce
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};
// Example usage:
const sum = arr.myReduce((acc, num) => acc + num, 0);
console.log(sum); // 6
