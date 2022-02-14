const p= new Promise ( (resolve, reject)=>{  //Promise produce part
    setTimeout(()=>{
        let roll=[1,2,3,4,5];
        resolve(roll);
        reject("your msg")
    },2000)
} ); //here it is executer function


async function getdata(){
    try {
        const data= await p;
        console.log(data);
    }catch(error){
        console.log(`The error is: ${error}`)
    }
     

      //now here there is another function that returns promise then we will rigt this way -> const bio= await function(arg);
}
getdata();
