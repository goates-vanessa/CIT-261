var firstTransform = document.getElementById("changeOne"); 
var secondTransform = document.getElementById("changeTwo");
var thirdTransform = document.getElementById("changeThree"); 

function firstbutton() {
    firstTransform.className = "transform transformOne";
}

function secondbutton(){
    secondTransform.className = "transform transformTwo";
}

function thirdbutton() {
    thirdTransform.className = "transform transformThree";
}

var firstTranslate = document.getElementById("changeFour");
var secondTranslate = document.getElementById("changeFive");
var thirdTranslate = document.getElementById("changeSix");

function fourthbutton() {
    firstTranslate.className = "translate translateOne showOne";
    secondTranslate.className = "translate translateTwo showTwo";
    thirdTranslate.className = "translate translateThree showThree"; 
}

var firstAnimation = document.getElementById("changeSeven");
var secondAnimation = document.getElementById("changeEight");

function fifthbutton() {
    firstAnimation.className="orbiting-circle"; 
    secondAnimation.className="morphing-circle";
}
function reset() {
    firstTransform.className = "transform";
    secondTransform.className = "transform";
    thirdTransform.className = "transform";
    firstTranslate.className = "translate translateOne";
    secondTranslate.className = "translate translateTwo";
    thirdTranslate.className = "translate translateThree";
    firstAnimation.className=""; 
    secondAnimation.className="";
}