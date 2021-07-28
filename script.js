// hiding pop up cookies notif when accept btn is clicked

function hide(element) {
    var cookiesNotif = document.querySelector(".cookiesbanner");
    cookiesNotif.classList.add("hide");
}

// change temp
function changeTemp(){
    var convTempHigh1 = document.querySelector(".temphigh1");
    var convTempHigh2 = document.querySelector(".temphigh2");
    var convTempHigh3 = document.querySelector(".temphigh3");
    var convTempHigh4 = document.querySelector(".temphigh4");
    var convTempLow1 = document.querySelector(".templow1");
    var convTempLow2 = document.querySelector(".templow2");
    var convTempLow3 = document.querySelector(".templow3");
    var convTempLow4 = document.querySelector(".templow4");
    convTempHigh1.innerHTML = "75°";
    convTempHigh2.innerHTML = "80°";
    convTempHigh3.innerHTML = "69°";
    convTempHigh4.innerHTML = "78°";
    convTempLow1.innerHTML = "65°";
    convTempLow2.innerHTML = "66°";
    convTempLow3.innerHTML = "61°";
    convTempLow4.innerHTML = "70°";
}
