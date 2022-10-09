# App-Notes
Basic App Notes v1

Write code my basic skill HTML, CSS and JavaScript

Important notes I learnt: 
1. Boostrap as CSS Framework help me to write code less and eficiency 
2. Learn JavaScript object, JSON Format, Javascript Array and method 

JavaScript
1. Using localStorage JS for storing array data in index number (Web Storage API)
2. Web Storage API: 
  -> set of mechanisms that enables browsers to store key-value pairs
  -> key-value pairs represent storage object
  -> can be access these value using the getItem() method
  -> localStorage = data stored does not expired when browser closed
  -> sessionStorage = data will be clear when browser closed
 3. localStorage() property:
  -> saved data in SQLite file in a subfolderin the user’s profile. 
  -> localStorage can only store strings.
  -> open Application tab at devtool chrome
  
 4. localStorage work ? below is method 
 -> setItem(): Add key and value to localStorage
 -> getItem(): This is how you get items from localStorage
 -> removeItem(): Remove an item by key from localStorage
 -> clear(): Clear all localStorage
 -> key(): Passed a number to retrieve the key of a localStorage
 
 5. JSON 
  -> possible to store JavaScript objects as text.
  -> JSON.parse() -> JavaScript has a built in function for converting JSON 
     strings into JavaScript objects:

  -> JSON.stringify() -> JavaScript also has a built in function for 
     converting an object into a JSON string:
     
 6. splice(start, deleteCount) method for JS Array Object
  -> remove and replace the element by the index of an array 
 
 7. push() method for JS Array 
  -> adds one more element to the end of an array and return new length
  
  
  
  
 REFERENCES LINK:
 - https://dev.to/swarnaliroy94/array-splice-array-slice-ag
 - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 - https://blog.logrocket.com/localstorage-javascript-complete-guide/#whatislocalstorage
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 - https://www.geeksforgeeks.org/how-to-create-notes-taking-site-using-html-bootstrap-and-javascript/
