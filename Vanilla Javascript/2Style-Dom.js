// first we use normal style tht we can do in css and for that first select that elment
let ch=document.querySelector('h1');
 ch.style.backgroundColor='black';// always remove highfen and do camelcase


 //Classname:-
 ch.className; //return all name in class
 //if we want to change we can do something like ch.classname=" new classname" (if we want to add also previous with new one then write all names new and olde both)


 //ClassList:-(add,remove,item,replace,length,contains, toggles)
 ch.classList // return collection of lists
//  so we can select one only using a index

ch.classList.item(num)// same as index

ch.classList.add('classname')// add a class
ch.classList.remove('classname')// remove that class
// for multiple class add or remove simply use ','  (classname, classname);

ch.classList.replace('old class','new class')// for replace a class with old one to new one

ch.classList.length//return length
ch.classList.contains('classname')// return true false mainly check that class there or not

ch.classList.toggle(clasName)//in a particular event that class add and remove
