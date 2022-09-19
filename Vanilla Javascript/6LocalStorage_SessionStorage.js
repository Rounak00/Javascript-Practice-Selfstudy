//Local values  stay in the browser
//Session storage stay in the browser until you off the browser or that site

//localStorage
localStorage.setItem("name","Rounak"); //key - element
/*IF you run it in console => window.localStorage.name // returns Rounak*/
localStorage.getItem("Key");//return value
localStorage.clear();//clear localstorage
localStorage.removeItem("Key");// only remove that key-value pair

//If we need to store a array then it store in a from of string we need to store it like this => localStorage("key", JSON.stringify(array)); and when we get it we write => data=JSON.parse(localStorage.getItem("key"));

/*
JSON.Stringify = take object make it string
JSON.parse = take string make it object
*/ 
//Sessionstorage same as local storafe and have same functions
