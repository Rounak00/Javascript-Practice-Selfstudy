// BOM means Browser Object Model.window object is supported by all browsers it represents the window browser..All global JavaScript objects, functions, and variables automatically become members of the window object

// browser object model:-
// Window => 1.Document 2.History 3.Location 4.Screen 5.Navigator  
 
window.document.getElementById() -> document.getElementById() 
window.alert() -> alert() 
// bcz bydefault sob windower modhe pore tai ar lekha hoina
// there are some function under window is :-
window.innerHeight / window.innerWidth // return the height and width of window
setTimeout();
setInterval();
open(); // open a new tab
close(); //close tab
alert(); //only for show 
confirm(); //ok or cancel
prompt(); // give some value and then ok/cancel
// we know all of them...

//---------------------------------------------------------------end-------------------------------------

//    Screen   &   Navigator Object:-
//screen: holds the information of browser screen.
window.screen / screen - show full object.
 
screen.width // returns the width of screen not window
screen.availWidth// retunrs availabel screen
screen.height//same as width
screen.availHeight//same as availwidth
// height / width show for full screen means taskbar everything
//avail only show for browser take size



//Navigator:contain the information about the browser when  your aplication is running
window.Navigator / navigator - show full navigator object 

navigator.userAgent//version of browser (as a string we need to parse it online)
navigator.online // return application run or not
//---------------------------------------------------------------end-------------------------------------

// history and location object:-
//History: this object give us an array of urls that user visited
window.history / history // return history object

// it give us two function ->
window.history.back();  //it load the previous page that user visited
winodw.history.forward(); //it load the next page that user visited 


//Location : get the detail of current page address. it can also redirect the browser to a new page in the same broser tab.
window.location /location // return the location object


window.location.href // returns current page address
window.location.host // returns  page host  IP
window.location.hostname // returns page host name
window.location.pathname  // give us value of the page (ex: /index.html) 
window.location.search // the append search
window.location.assign('url') // jump to this url page
