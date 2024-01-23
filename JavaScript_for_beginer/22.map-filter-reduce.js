const a=[2, 7, 5, 2];

// map() : use for transform the array means in double, triple or binary
// in other words get all elements one by one from array

function binary (x){
    return x.toString(2); // toString(2) retruns binary value why don't know , similar to 8 and 16 as well for octal and hexadecimal
}
let out2= a.map(binary);
let out= a.map((x)=>{
    return x*2;                          //we can also do this way , it is higherorder function
});
console.log(out);
console.log(out2);
// higherorder function is when a function inside of a function

//=-------------------------------------------------------end------------------------------------
//filter(): this use to filtering values like ,odd/even...
let out3= a.filter((x)=>{return x%2});
console.log(out3);

//=-------------------------------------------------------end------------------------------------
//reduce: sum of array or max of a array
// basically where we need to travers the whiole list and do something
// it takes two parameters 1. accumulator  2. current

let out5=a.reduce(function (acc , curr){
    acc=acc+curr;
    return acc;
}, 0); // 0 is for acc value
console.log(out5);


//-------------------------------------------end-------------------------------------------
  //FLATTEN ARRAY
            const arr=[[1,2],[3,4],[5,6]];
            let flatarr=arr.reduce((accumulator,ele)=>{
                return accumulator.concat(ele);
            })
            console.log(flatarr);
            //[ 1, 2, 3, 4, 5, 6 ]
//return always 1D array
