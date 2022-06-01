//dummy data
const datas=[
    {name:"Rounak",prof:"fornt_end developer",},
    {name:"Sumit",prof:"back_end developer",}
];

function getdata(){
    setTimeout(()=>{
        datas.forEach((data,index) => {
           console.log(data.name);
       });
    },1000);
}


function createdata(newdata){
    setTimeout(()=>{
        datas.push(newdata);
    },2000)
}
getdata();
createdata({name:"Shoyeb", prof:"PHP"});

// //now see here the problem is getdata only shows two names not three bcz it will exicute before create function as create function take 2sec.. if we reduce time then it will work fine.

// /*for resolve this problem we use asynchronus JS programs
// 1. Callback()
// 2. promise()
// 3. async await()
// */

// //Callback
function getdata(){
    setTimeout(()=>{
        datas.forEach((data,index) => {
           console.log(data.name);
       });
    },1000);
}


function createdata(newdata,callback){
   
        setTimeout(()=>{
            datas.push(newdata);
            callback();
            },2000)
    
}

createdata({name:"Shoyeb", prof:"PHP"},getdata);


// //promise
function getdata(){
    setTimeout(()=>{
        datas.forEach((data,index) => {
           console.log(data.name);
       });
    },1000);
}


function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error=false;
            if(!error){resolve();}
            else{reject("kuch sahi nehi hai");}
            },2000)
    })
}

createdata({name:"Shoyeb", prof:"PHP"}).then(getdata).catch(err=>{console.log(err);});

///Async Await (this function return a promise)
function getdata(){
    setTimeout(()=>{
        datas.forEach((data,index) => {
           console.log(data.name);
       });
    },1000);
}


function createdata(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata);
            let error=false;
            if(!error){resolve();}
            else{reject("kuch sahi nehi hai");}
            },2000)
    })
}

async function start(){
    await createdata({name:"Shoyeb",prof:"PHP"});
    getdata();
}
start();

//fetch  for APIs only

//fetch
fetch(api).then((apidata)=>{console.log("apidata")}); //bcz here fetch return a promise and we can wirk with it using then

We can aslo use this way:-

fetch(api).then((apidata)=>{
                             return apidata.json();
                         }).then((actualdata)=>{console.log(actualdata)})
                         .catch((error)=>{console.log(error)});





