// Higher order Function:- 
// a function when it takes  a function as an  argument or return a function is known as higher order function;
function x(){
    console.log("Hello world");
}
function y(x){   // here y is higher order function  and here x is call back function
    x();
}

// now for inter view think there is a question of calculate area, ciameter , circumference of a circle  so in that case we need to write same code but we can use like this in interview
/*
const r=[4,2,7,9];

1. cosnt calculatearea= function(r){
    const out=[];
    for(int i=0;i<r.length;r++){
        out.push(math.PI * r[i] * r[i]);
    }
    return out;
} 
calculate area(r);

2.  const area= function (r){
    return math.pi * r[i] * r[i];
     }

     const calculate(r, logic){
         const out=[];
        for(int i=0;i<r.length;r++){
        out.push(logic(r[i]));
        }
        return out;
     }
    calculate(r, area);
    
    
    now here we need to use 2 bcz when there are many logics we just simplu use them by passing the,m
*/

// in more advance we can also use map :- r.map(area);