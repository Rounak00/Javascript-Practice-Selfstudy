..............call () -method ..............
#It is predifinde, it is used where a object can use methods of another object. 

 const obj1={
     name:"Rounak",
     sc: 10,
     feature: function(){
         console.log(this.name);
     }

 }

 const obj2={
    name:"Bubka",
    sc: 20,
    feature: function(){
        console.log(this.sc);
    }
 }

 obj1.feature.call(obj2); //here its print onj2.name

Now think there that feature take arguments in that case line will be 
obj1.feature.call(obj2,argument);



 ....................Apply ().................
 #It is predifinde, it is similar to call method where call take argument seperatly and  apply take argument in term of array 

 const obj1={
    name:"Rounak",
    sc: 10,
    feature: function(arr1,arr2){
        console.log(this.name);
        console.log(arr1);
        console.log(arr2);
        
        
    }

}

const obj2={
   name:"Bubka",
   sc: 20,
   feature: function(){
       console.log(this.sc);
   }
}
obj1.feature.apply(obj2,[1,true]);

for finding the maximum now in maximum inbuilt function we can pass array using apply 
-> console.log(Math/max.apply(null,[1,2,4,7,8,4]));// return max and here null bcz out first argument is for object 




................Bind ().................. 
#It is predifinde, we can bind any obj with another common function 

 const obj={
     name:"Rounak",
     sc:10,
     feature: function(){
         console.log(this.name);
     }
 }
let ans=obj.feature.bind(obj); //here bind takes onject as first argument and then function and here also first obj parameter and then argument if you want
#if we dont use bind function then in output it dont print obj variables or values



Another Example: 

const objx={
    name:"Rounakx",
    sc:10,
    
}

const objy={
    name:"Rounaky",
    sc:10,
    
}
function feature(){
    console.log(this.name);
}
let ans=feature.bind(objx)
let ans=feature.bind(objy)