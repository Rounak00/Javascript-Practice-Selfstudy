3Stage of Promises: A promise is an object that may produce a single value some time in the future

  1.Pending
  2.Resolve
  3.Reject

//2Syntax are there promise obj and promise constructor

promise constructor;-
 
 const p= new Promise ( (resolve, reject)=>{  //Promise produce part
       setTimeout(()=>{
           let roll=[1,2,3,4,5];
           resolve(roll);
           reject("your msg")
       },2000)
 } ); //here it is executer function

 p.then((roll)=>{ //promise Consume
     console.log(roll);
 }).catch((c)=>{console.log(c)});

 #in produce part we will fetch the api and if it t is resolve then we send the value to then part or consume part
 # if its reject tjen in same way reject go to catch portion

  we can also return promise same as that 
  Example: 
     function getbio(id){   
      return new Promise((resolve, reject)=>{
        setTimeout((id)=>{
          let bio={
              name: "Rounak",
              age: 12
          }  
          resolve("Done")
          reject("not done");
        },2000,id)
      })
     }

     p.then((roll)=>{ 
        console.log(roll);
        getbio(id).then((i)=>{console.log(i)})
    }).catch((c)=>{console.log(c)});


    //we can also write consume portion like this
    
    p.then((roll)=>{ 
        console.log(roll);
        return getbio(id);
    }).then((i)=>{console.log(i)})
    .catch((c)=>{console.log(c)});