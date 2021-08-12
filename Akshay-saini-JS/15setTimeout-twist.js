// setTimeout have trust issues ,  as example if we enter 5000  thats not mean it wait for 5 seconds
// its all depends on call stack

console.log("Start");
setTimeout(function(){
    console.log("5 min func");
}, 5000);
console.log("End");
// now here if global function take 100 sec then that setTimeout cant run and so setTimeout print after 10 sec no natter it expir in 5 sec


// this problem also known as concurrency model


//setTimeout(function(){
//   console.log("5 min func");
//}, 0); -> it also need to go through the queue