/* Events:-
    1. Mouse- 
       onclick
       onmouseout	
       onmousedown	
       onmouseup	
       onmousemove	

    2. Keyboard-
        onkeydown 
        onkeyup   

    3. Windows-
        onload
        unload	
        resize	
    
    4. From events -
         onfocus	
	     onsubmit
	     onblur	
	     onchange    */

// we can add events in html tag as attribute or also in js simply select that tag and then use '.'and that event name and simply define function

// after that there is addEventListener that is same as using event listener use in js, but sytax is kind a 
 .addEventListener('Event name',()=>{});

//  there is a third event that called captureing

 //Event Bubbling:-
    //  think there is a structre like gp the p and then c... now if every div have a event and if we select c then first c run then p and then gp


//Event capturing:-
    //use for terminate event bubbling 
    // here nothing but the addeventlistener's third parameter is boolean value which is true and in that case first gp run the p then c

//Remove events:-
.removeEventListener('Event name',()=>{});// same as add



