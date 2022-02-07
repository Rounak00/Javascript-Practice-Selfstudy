JS_code-> JS_Engine

In JS_Engine:-
     JS_code-> Parser (check line by line for error) -> AST(then it produce a Data structure called abstract syntax tree) -> MC (convert in machine code) -> Code Runs
  
     #V8 has a garbage collector call orinoco and it use M&S algo(Mark and sweep algo)
     
Execution context , Execution Stack:-
      
#for run Js code we need a environment and its called execution context. and our browser creates a defualt execution context.
 In default exicutioncontext variables and function that is not inside any function.
 A new execution context gets created everytime a function is executed.

and global object is known as WindowSessionStorage.

Execution stack known as calling stack and stack used to store all execution context.



#Execution context have three parts variable object , this variable, scope Chain .






Creation phase, Execution phase and hoising:-

#execution context have two phases createing and executing phase. In creating phase variable object, scope chain and this variable created. 
in eecution phase the code is run. 

#variable object: for each function a property is created in the variable obejct. Which is pointing to that function.
for each varible it set to undefined.  (these things are called hoisting)
Argument objects are created that were passed in to the function.



