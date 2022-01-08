shownotes();

let addbtn = document.getElementById('addbtn'); //access button

addbtn.addEventListener('click', (e) => {
    let addtxt = document.getElementById('addtxt'); //access text area
    let addtit = document.getElementById('addtit'); //access text area
    let notes = localStorage.getItem('notes'); //access tag of id = note
    if (notes == null) {
        noteObj = [];    //set empty array
    } else {
        noteObj = JSON.parse(notes);  //if it not empty then acces all our note and parse 
    }

    noteObj.push([addtxt.value,addtit.value]);   //then add extra note
    localStorage.setItem('notes', JSON.stringify(noteObj));  //and again set note to the tag
    addtxt.value = "";
    addtit.value = "";
    console.log(noteObj);
    shownotes();

});

//Function to show element from local storage
function shownotes() {
    let notes =  localStorage.getItem('notes'); //access
    if (notes == null) {
        noteObj = []; //set
    }
    else {
        noteObj = JSON.parse(notes); //if it not empty then
    }
    let html = "";
    noteObj.map((element,index)=>{
       if(element != ''){
        html += `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <label class="my-2">Note ${index+1}</label>
            <p class="card-text">${element}<p/>
            <Button class="btn btn-outline-primary my-2" id="${index}" onclick = "deleteNode(this.id)"><i class="fas fa-trash-alt"></i></Button>
        </div>
    </div>`
       }
    })

    let notesElm = document.getElementById('notes');
    if(noteObj.length != 0){
        notesElm.innerHTML = html;
    } else{
        notesElm.innerHTML = 'Nothing to show'
    }  
}

//Function to delete node 
function deleteNode(index){
    console.log("I am deleting", index)
    let notes =  localStorage.getItem('notes'); //access
    if (notes == null) {
        noteObj = []; //set
    }
    else {
        noteObj = JSON.parse(notes); 
    }
    noteObj.splice(index,1)
    localStorage.setItem('notes', JSON.stringify(noteObj))
    shownotes();

}

//function to search note
