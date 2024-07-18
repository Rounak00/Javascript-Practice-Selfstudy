const btn=document.querySelector("#btn");
const tScreen=document.querySelector("#triggerdScreen") // debounce of every 400ms
const cScreen=document.querySelector("#counterScreen") // whenever pressed will increase

var tCounter=0;
var cCounter=0;

const throtling=(cb,d)=>{
   let last =0;

   return (...args)=>{
      let now=new Date().getTime();
      if(now-last<d)return;
      last=now;
      return cb(...args); // nothing happened if we dont write return here
   } 
}

const myThrotledCode=throtling((...args)=>{
       tScreen.innerHTML=++tCounter;
       console.log(args[0],args[1]);
},1000);

btn.addEventListener("click",()=>{
   cScreen.innerHTML=++cCounter;
   myThrotledCode(2,3);
})
