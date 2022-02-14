
fetch(api).then((apidata)=>{console.log("apidata")}); //bcz here fetch return a promise and we can wirk with it using then

We can aslo use this way:-

fetch(api).then((apidata)=>{console.log("apidata");
                             return apidata.json();
                         }).then((actualdata)=>{console.log(actualdata)})
                         .catch((error)=>{console.log(error)});
