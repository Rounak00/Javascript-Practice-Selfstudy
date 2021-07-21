//DOM means Document Object model..when the webpage is loaded the browser creates a document object model for the page..All the objects are arranged as tree structure...

//document means HTML Window er modhe mane page er modhe

document.write(); // for writ in page

// select html tags
document.getElementById('Id name')

document.getElementsByClassName('class name')
// sobkota class er akta array return kore

document.getElementsByTagName('class name')// by tag name
// sobkota tag er akta array return kore


document.querySelector();
document.querySelectorAll();
//work like css selector
// return arry if all and in single return first element
// we can give index to queryselectorall("selsector")[index]

//---------------------------------------------------end-----------------------------------------------------
//update:-(html/css)
// .innerhtml use for write sokmething inside HTML


//selectedElements.style.property-name="property";

//---------------------------------------------------end-----------------------------------------------------
//handling events:-
// we can write event like this-
let a= getElementById("btn");
a.onclick=function(){alert("clicked");}

// or we can do this
a.addEventListener("click",function(){alert("clicked");})


//we know others verywell
//---------------------------------------------------end-----------------------------------------------------
// remove and add class:-

a.classList.add("classname") //for add a class
a.classList.remove("classname") //for add a remove

//---------------------------------------------------end-----------------------------------------------------
//Style:-
//Selectitem.style.prperty //its is a kind a inline style

//windows.getComputedStyle(selectedElement).property //for css file style

// Events:-
//Form Events:- 1> change  2>focus  3>blur  4> submit
//Keyboards Events:- 1>keydown 2>keyup 3>keypress
//Mouse Events : -  1>mousedown 2>mouseup 3>click 4>dbclick 5>mouseover 6>mouseenter 7>mousemove


//---------------------------------------------------end----------------------------------------------------

//create, delete, update HTML Elements:-
var m=document.createElement('li');    // make  li tag 
document.createTextNode("hello"); // insert text in this li tag

// but we need to put that text inside that li and we know that text also a child of that tag so 
m.appendChild(document.createTextNode("hello"));

// and give an id to this li is :-
m.id="list3";

// there is a useful function ChildElementCount();
 // firstelementchild is also a inbuilt keyworld

/* for update :-*/ replaceChild(newListElement,firstElement);
/* for delete :-*/ removeChild(firstElement);
