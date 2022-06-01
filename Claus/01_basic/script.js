/* Ex 1

Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.

If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red. */

var fNameInput = document.getElementById("fname");
const lNameInput = document.querySelector("#lname");
const ageInput = document.querySelector("#age");
const errorMessage = document.querySelector("#error-message");
// errorMessage.style.display = "none";

const btnAdd = document.querySelector(".add-info");
const infoContainer = document.querySelector("#txtOutput");
const infoList = ["Claus", "Bauxi", "Ernsti"];

btnAdd.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("works");
    infoList.push("fNameInput")
    printInfo();

});



const printInfo = function () {
    infoContainer.innerHTML = "";
    infoList.forEach(function (item) {
        infoContainer.innerHTML += `<li class="list-group-item">${item}</li>`;
    });
};

printInfo();

// const validateInput = function (e) {
//     console.log(e.target.value);
// };