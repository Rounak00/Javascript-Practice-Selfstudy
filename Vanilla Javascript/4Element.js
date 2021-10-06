//1. Parentelement and parentnode:-
//It is use to find the parent element 
let p=document.querySelector('.item').parentElement;
// parentNode also same the basic difference is if we select htmls parent then parentnode returns document and parentelement returns null


//2. Children and childnodes:-
// it returns colletion
let ch=document.querySelector('.item').children;
// we can use index property also here

// let ch=document.querySelector('.item').childNodes;
// // it returns collection also but with element and tag all togather ... like 
//  1> 'text'
//  2> 'p'
//  3>  'text'
//NB: its also count comment also, if we comment something in our document



//3. firstChild, firstElementChild, lastChild, lastElementChild

// firstchild and lastchild returns last or first thing means if text also last then that text

// other hand firstElementChild,lastElementChild gives the element 



//4. nextSibling, nextElementSibling, previousSibling, previousElementSibling

//same like 3rd feature 
// and next and previous sibling simple select previous or next element in same order


//5.  appendChild, createElement, createTextNode, createComment:

 let tag= document.createElement('tagname') //use for create a tag
  let text=document.createTextNode("text") // use for write your text
  createComment("Comment")//create comments
  tag.appendChild('text')// so it makes tag and text inside the tag


//6. InsertBefore:-

   parent.insertBefore(where, what);


//7. InsertAdjacent:-
     /*
      insertAdjacentHTML
      insertAdjacentElement 
      insertAdjacentText

      positios: beforebigin,afterbegin,beforeend,afterend
     */
    let el=document.querySelector('')
    let h2=document.createElement('h2');
    let tx=document.createTextNode("Hey i am new here")
    h2.appendchild(tx);
   //think there is a box so we can write it as 
      Box.insertAdjacentElement('position', h2);

//    now where we make that element if we write like this let h2='<h2>Hey i am new here<h2/>'   then in adjacent we use 'insertAdjacentHTML'


//other hand simply adjacent text use for only text and we need to use onlt text not combination of text and html




//8. Replace and removechild:-      

   parent.replaceChild('new','old');
   parent.removeChild('name');
