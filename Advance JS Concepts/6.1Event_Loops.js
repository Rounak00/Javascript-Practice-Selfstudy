//The event loop is a constantly running process that monitors both the callback queue and the call stack.

Web Api: A web API is an application programming interface for either a web server or a web browser. It is super power 

/* **Web APIs:- [window]
   1. setTimeout: countdown type things;
   2. dom : document.something;
   3. fetch: goes and request a API call , return promises;
   4.local storage: memory storage;
   5. console : in browser where we run js;
   6. location: where we search urls; 
   */

WorkFlow:
 
ExecutionStack  ->  Web API -> CAllback Queue / Microtask Queue 




  // call back queue: -
   // where it store callback function first [callback function as exmple of inner function of setTimeout()]
   //event loops take onby one call back functios by order and put to call satck
   // micro task queue: fetch call back  function's promises mainly store & mutation observer only {mutation observer is The MutationObserver interface provides the ability to watch for changes being made to the DOM tree. }

   // now eventloop take data pf MQ first then CQ



   // now just bcz event loop always take microtask funcs first now if microtask promises create promises it self so CQ funcs cant run for a long time and thats known as starvation. [starvation of the task in the CQ]


   /*
   1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.  It's a very beautiful concept, and I've covered this in detail in the next episode of Namaste JavaScript. 🔥
Thank you so much for asking all these questions, Shruti. You're a gem. 💎
   */ 