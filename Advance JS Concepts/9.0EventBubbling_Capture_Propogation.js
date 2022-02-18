//Event Bubbling & Capturing
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object(Provided the handler is initialized). 

capturing is opposite of bubbling its parent - child and for achieve that we need to do .addEventListener("click",()=>{},true); the last parameter is for enable capturing

//Stop Propogation, Immediate Propogation 
For Stop Propogation .addEventListener("click",(event)=>{event.stopPropogation()})

Immidiate Propogation is think we have two eventlistener for same button and you want to stop in firstthen we use Immidiate Propogation .addEventListener("click",(event)=>{event.stopImmidiatePropogation()})


//Prevent Default
for stop of some predifned tag's action like anchor always open a window, button is clickable like those.
          -> .addEventListener("click",(event)=>{event.preventDefault})