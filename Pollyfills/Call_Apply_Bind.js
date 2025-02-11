//Pollyfill for CALL

Function.prototype.MyCall(context={},...args){
  if(typeOf this !== "function"){ throw("Error, Its not a Function")}
  context.fn-this;
  context.fn(...args)
}


//Pollyfill for Apply
Function.prototype.MyApply(context={},args){
  if(typeOf this !== "function"){ throw("Error, Its not a Function")}
  if(Array.isArray(args) !== true){ throw("Error, Its not a Array")}
  context.fn-this;
  context.fn(...args)
}

//Pollyfill for Bind
Function.prototype.MyBind(context={},...args){
  if(typeOf this !== "function"){ throw("Error, Its not a Function")}
  context.fn-this;
  return function(...newargs){
      return context.fn(...args,...newargs);
  }
}
