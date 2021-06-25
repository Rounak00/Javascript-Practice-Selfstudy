//* 1.	Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True
//* 2.	Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

//* 3.	Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
//* 4.	Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
//* 5.	 Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

//Q1 --> Write a JavaScript function to check whether an `input` is an array or not.
function is_array(input) {
    return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Q2 --> Write a JavaScript function to clone an array.
function array_Clone(input) {
    cloned_array = input.slice(0);
    return cloned_array;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//Q3 --> Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(input, n = 1) {
    if (n < 1)
        return [];
    return input.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// Q4 --> Write a simple JavaScript program to join all elements of the following array into a string.
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(','));
console.log(myColor.join('-'));
console.log(myColor.join('+'));

// Q5 --> Write a JavaScript program to find the most frequent item of an array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function freq(input) {
    const count = {};
    input.forEach(e => count[e] ? count[e]++ : count[e] = 1);
    // console.log(count);
    let maxFreq = 0;
    let maxFreqEle;
    for (let key in count) {
        if (count[key] > maxFreq) {
            maxFreqEle = key;
            maxFreq = count[maxFreqEle];
        }
    }
    let output = maxFreqEle;
    for (let i = 0; i < maxFreq - 1; i++)
        output += ' ' + maxFreqEle;

    console.log(output);
}

freq(arr1);