// in browser there are many things like :- (please watch next vid of namastey javascript{JS engine})
/*
>> JS Engine and its call stack, Web apis, Event loop, Call back queue/ task queue(CQ),  microtask queue(MQ)
*/

/* **Web APIs:- [wundow]
   1. setTimeout: countdown type things;
   2. dom : document.something;
   3. fetch: goes and request a API call , return promises;
   4.local storage: memory storage;
   5. console : in browser where we run js;
   6. location: where we search urls; 
   */

   // call back queue: -
   // where it store callback function first [callback function as exmple of inner function of setTimeout()]
   //event loops take onby one call back functios by order and put to call satck
   // micro task queue: fetch call back  function's promises mainly store & mutation observer only {mutation observer is The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. }

   // now eventloop take data pf MQ first then CQ



   // now just bcz event loop always take microtask funcs first now if microtask promises create promises it self so CQ funcs cant run for a long time and thats known as starvation. [starvation of the task in the CQ]