// Dom always have a tree structure
//it  change read,write and manipulate dom

//so we get whole HTML page whose name is document and we get it in a Object form
// so example:-
const a=document;
console.log(a);


// First selectors:-

let b=document.getElementById('item1')
console.log(b); 
// so this is use to select a particular ID

let c=document.getElementsByTagName('head');
console.log(c); //always return a array type obj(known as collections)
// so this is use to select all particular Tags
//if we write something like that let c=document.getElementsByTagName('div')[2];// then its only return 2nd index means third position div


let d=document.getElementsByClassName('container');//it is also return collection
console.log(d);
//same like tagname we need tot intialize index for get a particular tag 
//NB: we can add two class anme together then it only search for those tags that use both class together


let e=document.querySelector('head')
let f=document.querySelectorAll('.items')
// use for both id,tag,and class name, and it selects on css so we need to use either normal tagname or '.' with class and id with '#'  ;
// if we use that dual class name again in a queryselector justlike previous then remove space and add '.' for class in every class anme
//basically we can do anything just like write css to select a particular thing example - <a href='/'> => (a[href='/']);

/*querySelector ()- only return first element and only one*/ 
/*querySelectorAll ()- retun all same thing in a collection style so we can also use index feature like previous
an example=
    article id that contains p*3 and we need to select 'p's
    queryselectorall('#article p');
     queryselectorall('#article p')[1];-for get 2nd p
    */ 

//2nd selectors
//properties:-
//  document - returns a html object
//  document.all - returns all html element in  collection
//for different sectios document.head(for head section), document.title(for title section)


//Get and set Dom values
/*
Get dom- 
   1. innerHTML
   2. innerText
   3. getAttribute
   4. getAttributeNode
   5. attributes
   */
  f.innerText;//return the text
  f.innerHTML;//return the HTML of that article
  f.getAttribute('id');//it returns only value of a particualr node's attribute
  f.getattributeNode('id')// it returns attribute name and value both

  f.attributes//it returns a list of all attributes and if we use indexing operator just like array index and select a index then returns attrabitue name and value togather
  // and if we want only value but in same process we can do this f.attributes[1].value; 
  // here in index operator without write indexnum we can write index element also only to get value ex-  f.attributes['class'].value; 
  

  /*
  Set dom:-
   1. innerHTML
   2. innerText
   3. setAttribute
   4. attributes
   5. .Value
   6. .name
   7. .removeAttribute
  */
 let ch=document.querySelector('h1');
 ch.innerText='hello hell'; // for only change the text

 ch.innerHTML='<h5>hello hell<h5/>' // take both tag and text and replace it with that html

 ch.setAttribute('attribute name ', 'value')// replace it with attribute

 ch.attributes[0].value="your value" // samethisng we can do in setattibutes also
 ch.attributes[0].name="your attribute" // it changes attribute name not vallue
 ch.removeAttribute('attribute name')// that attribute should be gone

