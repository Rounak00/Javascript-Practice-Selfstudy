 JavaScript Runtime Environment for that we need JS Engibe , set of API that connect with outside environment, Eventloop, Callback queue , Microtask queue. 

 Browsers also have JavaScript Runtime Environment. (Node also have), Those APIs are also different or same in multiples devices or environment 


Names:-
 Microsoft Edge- Chakra
 Node/Chrome- V8
 Opera - carakan
 Mozilla_Firefox- SpiderMonkey

ECMAScript: ECMAScript (European Computer Manufacturers Association Script) is a scripting language based on JavaScript.  

First JS Engine : Spider Monkey by Brendan Eich (JS Inventor also)


Myths about JSEngine:
     Not a machine, its a piece of code thats right is low level code example V8 write in c++ 



JS Interpreted language or compile language? 

Interpreter starts executing the code line by line and compiler compileed full code and then executerd. compiler makes a optimize version of your code. 
Interpreter code is fast and compiler have more effeciency.
At first when inventor makes JS it was a interpreted language, but in present JS Engines use both Compiler and interpreter.


JSEngine Architecture: Code takes by input -> Parsing -> Compilation ->_Execution 
     Parsing:
       1. In parsing your code broken down into Tokens
       2. Then there is a Syntax parser that Convert that code in  AST (Abstract Syntax Tree) in JSON Format 
     Compilation:
       1. JS use both compiler and interpreter which is known as JIT compilation (Just In Time). Now ast goto Interpreter and and then it goto execution Stage. And in that case interpreter also take the help of compiler to make code compiler. After that Byte code send to the Execution Satge 
     Execution: 
       1. With out memory heap and callstack is main part here , and in memory heap all function and variables assigns value or space. 
       2. There is a garbage collector also.(Uses MArk and Sweep algo)
       3. teher are also some important things happened like inlining, copy elision and inline caching


V8's interpreter -> Ignition
V8's compiler -> Turbo Fan
V8's Garbage Collector -> Orinoco  (there is also oilpan and its use for different purpose)     

V8's Architecture-> 
      Src Code -> Parser -> AST -> Interpreter  to voth Bytecode and compiler and compiler to optimized machine coding and then Byte code
