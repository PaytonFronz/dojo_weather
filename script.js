// hiding pop up cookies notif when accept btn is clicked

var cookiesbanner = document.querySelector(".cookiesbanner");

function hide(.cookiesbanner) {
    cookiesbanner.classList.add("hide");
}



// temp changes when F is selected
var temphigh = document.querySelector(".temphigh")
function convTemp() {
    temphigh.innerHTML = "75°";
}

var temphigh = document.querySelector("temphigh");
temphigh.innerText = "New Title";

function pickTemp(element) {
    option ("You picked " + element.value);
}
