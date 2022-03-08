// Debouncing:
// Debouncing in JavaScript is a practice used to improve browser performance.

let counter=0;
const getData=()=>{ //fetching some api and get our data
 console.log("Fetching data" + counter++);
}




doSomeMagic=function(fn,d){
  return function(){
      let timer;
      let context=this,
      args=arguments;
      clearTimeout(timer);
      timer=setTimeout(()=>fn.apply(context,arguments), d);

  }
}


const better = doSomeMagic(getData,300) //only do some magic when the difference of time of between two key press events is greater than 300



//we use debouncing in search , scrooll event, slow loading

//Throttling:
//assumi a click button call a get datat event and each click it call again and again and we can reduce the rate using throtling
//basically its delay the second call with some set amount of time

const ex=()=>{console.log("expensive")} //on click it is called

const thro=function (expensive,limit){
    let flag= true;
return function(){
    if(flag){
        let context=this,args=arguments;
        expensive.apply(context,args);
         flag=false;
    setTimeout(()=>{
        flag=true;
    },limit)
}
}
}
const betterex = thro(ex,300);



//Debouncing VS Throttling:(https://youtu.be/tJhA0DrH5co)
//both are use to optimize over web app by limiting the exicution function calls

/*The major difference between debouncing and throttling is that debounce calls a function when a user hasn’t carried out an event in a specific amount of time, while throttle calls a function at intervals of a specified amount of time while the user is carrying out an event.  */

//Example1: search bar in a website

//Throttling when we typing (after first type) wait some time (ignore all keys that ṭime)and after certain time we can call agin, for debouncing is if the difference of two keywords is more than estimated time then it will run


//Example 2: track the user when he resize the browser
//Example 3: Shooting game scenario


/*Debouncing and throttling both are depend in which case we use ti there is no specific ans that which is better than another */