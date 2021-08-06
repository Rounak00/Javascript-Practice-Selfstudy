// what is callback function:-[callback give us time for asynchronous][exampl: setTineout function]
/* when firstclass function take a function as an argument that particular function is callback function*/
//ex:
 function x(){

 }
 x(function y(){ }); // here this argument is callback function

 // in settimeout it is callback function
 setTimeout(function (){}, 1000);

// blocking main thread:-
// long functions take more time i9n js and it block mainthread thats why we use asynchronous features suchas callback functions . Example : setTimeout


//Event Listener:
// addEventListener("Event",Callback function(){});

//EX:- 
function attacheri(){
    let coun=0;
    btn.addEventListner("click", function xy(){
        console.log("Button clicked",++coun);
    })
}
attacheri(); // function XY forms a clouser and remember coun value
// why need to remove event listeners:-
// bcz evenlistener from cluser and we can't free up memory thats why
