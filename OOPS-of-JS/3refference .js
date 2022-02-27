let a={value:0};
let b= a;
a.value=30;
console.log(b.value);
// ...............................................................................................


let num2={value:10};
function increase(n){
    n.value++;
}
increase(num2);
console.log(num2);

// object, methods and array are refference types