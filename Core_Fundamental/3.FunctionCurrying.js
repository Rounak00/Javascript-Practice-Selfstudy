//Before currying you meed to know bind function and closures


let mul=function(x,y){
    console.log(x*y);
}

let multiplyByTwo=mul.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=mul.bind(this,3);
multiplyByThree(5);

........with a proper closure..............


let mult=function(x){
    return function(y){
        console.log(x*y);
    }
}
let m=multiply(2);
m(3)

/*
1. With bind method
2. second one using clodure
*/