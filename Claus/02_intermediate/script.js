// Create a Javascript program that will make the Santa Clauses disappear on a click from the following 3x3 matrix. Only the clicked Santa Claus should disappear.

console.log("JS connected")

function removeItem(){
    this.style.opacity= "0";
    this.style.transition = "1s";
}

function addRemovePic(){
    
    var items = document.getElementsByClassName("pic");
    
    for ( let i in items ){
        items[i].addEventListener("click",removeItem);
    }
}