
const btn=document.querySelector("#btn");
const tScreen=document.querySelector("#triggerdScreen") // debounce of every 400ms
const cScreen=document.querySelector("#counterScreen") // whenever pressed will increase

var tCounter=0;
var cCounter=0;

function debouncing(cb,d){
    let timer;

    return (...args)=>{
        if(timer)clearTimeout(timer);
        timer=setTimeout(()=>{   //setTimeout returns a unique ID
            cb();
            console.log(args[0],args[1]); // for showing arguments
        },d);
    }
}

const myDebouncedCode=debouncing(()=>{
       tScreen.innerHTML=++tCounter;
},800);

btn.addEventListener("click",()=>{
   cScreen.innerHTML=++cCounter;
   myDebouncedCode(2,3);
})
