// how js woeked:-
// 1. exicution context->
var x = 10 ;
function a(){ console.log("hello");}
a();
// now here exicution context have two parts variable component (vc) and memory component(mc). mc also known as thread of exicution. JS first run normally and copy all var and funcs in vc so first is x as undefined and func a.
// then when mc run and x intialize at 10 so it assign as 10 and then func a when call its run . now see if func also have variable then in mc anopthe context exicution made and exicute code and after done that content exicution removed.
//our real context exicution also remove after all exicution



//2. JS is synchronous single threaded language... synchronous means line by line


// 3. when that functions come there also a thing JS called call stack . its just work like a stack store exicution contexts and delete it
// call stack also known as - exicution context stack, program stack, control stack, runtime stack , machine stack.
