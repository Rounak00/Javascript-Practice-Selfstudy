// const uno=()=>{return "i am one"}

// const dou=()=>{setTimeout(() => {
//     return "i am two"  
// }, 3000);}

// const tres=()=>{return "i am three"}

// const callme=()=>{
//     let value1=uno();
//     console.log(value1);

//     let value2=dou();
//     console.log(value2);

//     let value3=tres();
//     console.log(value3);
// }
// callme(); /* its return 
//                         i am one
//                         undefined
//                         i am three
//                         */
const uno=()=>{return "i am one"}

const dou=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
                resolve ("i am two") }, 3000);
    })
}

const tres=()=>{return "i am three"}

const callme=async()=>{
    let value1=uno();
    console.log(value1);

    let value2=await dou();
    console.log(value2);

    let value3=tres();
    console.log(value3);
}
callme();


// ........................HandleAPI............

fetch('link') // then is for good and catch is for bad
.then((response)=>{return response.json();})
.then((data)=>{console.log(data.value);}) 
// we need to find value and in other hand use then for extract further

.catch()// for error