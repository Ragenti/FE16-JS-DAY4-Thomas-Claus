
function createTask(){
    let newTask1 = document.getElementById("demo1").value;
    let newTask2 = document.getElementById("demo2").value;
    let newTask3 = document.getElementById("demo3").value;
    // we select the input from the id and .value will take the value from the input

    document.getElementById("list").innerHTML += 
    `<li>${newTask1} </li>
    <li>${newTask2} </li>
    <li>${newTask3} </li>`;

    addRemoveToList();

}

document.getElementById("create").addEventListener("click",createTask);

function removeItem(){

    this.style.opacity= "0";
    this.style.transition = "1s";
    setTimeout(()=>{this.remove();},1000);

}


function addRemoveToList(){

    var items = document.getElementsByTagName("li");
    for ( let i in items ){

        items[i].addEventListener("click",removeItem);

    }

}

const nameInput = document.querySelectorAll(".form-control")

const validateInput = (e) => {
    if(e.target.value.length < 5) {
        e.target.style.color = "red"
    } else {
        e.target.style.color = "green"
    }
}

nameInput.forEach(element => {
    element.addEventListener("input", validateInput);
});

const profSelect = document.querySelectorAll(".form-control")

document.getElementById("it").addEventListener("click", colorDiv)

function colorDiv() {
    items.sytle.color = "red";
}

//ex 2

var box = document.getElementById("list");
const sel = document.getElementById("select");

// let value = sel.options[sel.selectedIndex].value;
// if (value = "IT"){box[0].style.backgroundColor="yellow"}
//     else
//     {box[0].style.backgroundColor="red"}

box[0].style.backgroundColor="yellow";

function onSelect(){

    var value = sel.options[sel.selectedIndex].value;
    
    if (value == "IT"){box.style.backgroundColor = "yellow"}
    else
    {box[0].style.backgroundColor="red"}
}

sel.addEventListener("change", onSelect);