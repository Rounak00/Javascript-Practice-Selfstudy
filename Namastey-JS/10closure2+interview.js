//1. Easy Question :-
function x(){
    var v=7;
    setTimeout(function(){ // this function also a closure bcz it remember the refference of v
    console.log(v);
    },3000);
console.log("Hello");
}
x(); // now first print hello then after 3 sec print v


// 2. if need to print 1-5 per second then 
function y(){ 
for(var i=1;i<=5;i++ ){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
}
y(); // but it print only 6 5 time
// bcz see there it is a closure where i remember the refference of i
// bcz js not wait for anything so loop runs

// but we can solve it simply using let, bcz let is block scope (being block scope every time i is different refference)

// now if we need to do it using var then we need to create a closure
function y(){ 
    for(var i=1;i<=5;i++ ){
        function colsu(i){ 
           setTimeout(function(){
              console.log(i);
           }, i*1000);
        }
    colsu(i);
    }
}
    y();