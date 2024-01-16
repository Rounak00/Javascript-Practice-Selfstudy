/* Same like Dynamic Programming here also we create a cache or array or object that will store our recent values, and return from there if it already came before */

let sum=0;
const calc =()=>{
  for(let i=1;i<=n;i++){ sum+=i;}
 return sum;
}
console.time(); //time func start
console.log(calc(5));
console.timeEnd(); // time func end

/*Output will be : 15 sec 
                 12 sec
                 18 sec*/ 

const memoize=(fun)=>{
  let cache={};
  return fun(...args){
      let n=args[0];
      if(n in cache){
         return cache[n];
      }
      else{
        let result=fun(n);
        cache[n]=result;
        return result;
      }
  }
}

   
console.time(); //time func start
const efficient= memoize(calc);
console.log(efficient(5));
console.timeEnd(); // time func end

