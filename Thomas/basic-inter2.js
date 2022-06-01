//basic ex 1
var box = document.getElementsByClassName("separate");

const text = document.getElementsByClassName("input");

const lNval = document.getElementById("lName").value;

const fNval = document.getElementById("fName").value;

var age2 = document.getElementById("agee");

function getVal(){

const lNval = document.getElementById("lName").value;

const fNval = document.getElementById("fName").value;

const age = document.getElementById("agee").value;

console.log(age);

if (fNval.length>=5){box[0].style.color="green";}else{box[0].style.color="red";}

box[0].innerHTML = lNval+"\n"+fNval+"\n"+age+" yo";
};

age2.addEventListener("blur", getVal);

//onblur="getVal()"


//basic ex 2

const sel = document.getElementById("select");

// let value = sel.options[sel.selectedIndex].value;
// if (value = "IT"){box[0].style.backgroundColor="yellow"}
//     else
//     {box[0].style.backgroundColor="red"}

box[0].style.backgroundColor="yellow";

function onSelect(){

    var value = sel.options[sel.selectedIndex].value;
    
    if (value == "IT"){box[0].style.backgroundColor = "yellow"}
    else
    {box[0].style.backgroundColor="red"}
}

sel.addEventListener("change", onSelect);

//inter 2

var button = document.getElementById("clickMe");

var bgc = document.getElementById("back");  

function backgroundChange(){

    //für Graustufen immer die selbe Variable nehmen
    let farbe = Math.floor(Math.random()*256);

    let farbe2 = Math.floor(Math.random()*256);

    let farbe3 = Math.floor(Math.random()*256);

    bgc.style.backgroundColor = "rgb("+farbe+", "+farbe2+", "+farbe3+")";
}

button.addEventListener("mousedown", backgroundChange);
