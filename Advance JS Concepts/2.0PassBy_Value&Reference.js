primitive variable = primitive variable //pass by value

object=object //pass by reference

.........pass by value ........
var a=5;
var b=a;
console.log(a); //5
console.log(b); //5
b=b+5;
console.log(a)//5
console.log(b);// 10
#not bother each other

..............pass by Reference......

const obf1={
    user: "Hello",
    num: 2

}
 const obj2=obj1;
 console.log(obj1.num);//2
 console.log(obj2.num);//2
 obj2.num=3;
 console.log(obj1.num);//3
 console.log(obj2.num);//3


 its also same if arr1=[1,2,3] and arr2=arr1; its also pass by Reference

 if we dont want that reference copy then we do 
 arr2=[].concat(arr1);


 ........Excercise..........

 let like= 100;

 const youtube={
     name:"Technical",
     subscriber: 2000
 }

 const thappa=(a,b)=>{
     a=200;
     b.subscriber=10000;
     console.log(a);//200
     console.log(b.subscriber);//10000
 }

 thappa(like,youtube);
 console.log(like);//100
 console.log(youtube.subscriber);//10000