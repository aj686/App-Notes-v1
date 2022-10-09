

showNotes();

// build Notes App with JS localStorage 

// button add, when user write note and save and add to the localStorage 
// define add button to html element by getting id 
let addBtn = document.getElementById('addBtn'); 

//button functionality when user clicked 
addBtn.addEventListener('click', function(e) {
    // define variable to store a notes by getting id 
    let addTxt = document.getElementById('addTxt');
    // getItem() method is to get the data string from localStorage and store to the notes
    let notes = localStorage.getItem('notes');

    //console.log(notes);

    if (notes == null) {
        notesObj = [];
    }
    else {
        // convert JSON string(text) into a javascript object
        // and store to the notesObj
        notesObj = JSON.parse(notes); 
    }
    //console.log(notesObj);

    // push() method of array JS to adds more element to the end of an array
    // and returns new length of the array 
    // add new note at the end of array
    notesObj.push(addTxt.value); // array
    
    // setItem() method is to store value in localStorage
    // setItem('key', 'value') - key is fetch the value attached to key
    // to store arrays or object, need to convert them to JSON string by
    // using JSON.stringify() method before passing to setItem()
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    
    showNotes();

});


// Function to show element(text) from localStorage
function showNotes() {
    // access element by key 
    let notes = localStorage.getItem("notes");

    // return zero if no element
    if (notes == null) {
        notesObj = [];
    }

    // detect element, then convert JSON string to JS Object and
    // store to the notesObj
    else {
        notesObj = JSON.parse(notes)
    }

    let html ="";

    // access every element with index number(identify the notes key-value pairs)
    // function (para1, para2)
    // element is text notes
    // index number as key for each element 
    notesObj.forEach(function(element, index) {
    //console.log(element);
        // use template literals & template interpolation 
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem";>
                    <div class="card-body" 
                        <h5 class="card-title">
                            Note ${index + 1}
                        </h5>
                        <p class="card-text">
                        ${element}
                        </p>

                        <button id = "${index}" onclick="deleteNote(this.id)"
                            class="btn btn-primary btn-sm">
                            Delete Note
                        </button>
                    </div>
                </div>`;
    });

    let noteElement = document.getElementById("notes");
    
    if(notesObj.length != 0) {
        noteElement.innerHTML = html;
    }
    else {
        noteElement.innerHTML = `Nothing to show!
        Use "Add a Note" section above to add notes`
    }
    
}


// function to detele a note
function deleteNote(index) {
    // get the data 
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    // splice() method for JS Array Object changes the content of an array by removing or 
    // replacing existing elements and/or adding new elements in place
    // splice(index, 1) - remove one item only
    // splice(start of index array, deleteCount by 1)
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();

}


