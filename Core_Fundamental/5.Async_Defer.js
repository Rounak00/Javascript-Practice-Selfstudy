//For Better understand: https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html


// Normal script:
 line by line execution, HTML Persing (pause)-> script download-> script execute-> html Persing (resume)


// Async script:-
    Html persing-> script download-> HTML pause and script execute-> HTML resume
    
 
//Defer:
   HTML persing->script download ->when html persing end script executed
   
   

/*
Async-

Downloads in the background at a low priority (same as defer)
Can interrupt page rendering to execute
Executes as soon as possible and in no particular order


Defer-

Downloads in the background at a low priority (same as async)
Won't interrupt page rendering to execute
Executes in sequence just before the DOMContentLoaded event
*/   
