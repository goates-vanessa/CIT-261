
var z = JSON.parse(localStorage.getItem("user")); 
document.getElementById("exTwo").innerHTML = "My full name is:" + z.firstName + " " + z.lastName;

var y = JSON.parse(localStorage.getItem("favorites")); 
function showArray(){
    document.getElementById("length").innerHTML = y.length; 
    document.getElementById("firstelement").innerHTML = y[0];
    document.getElementById("secondelement").innerHTML = y[1];
    document.getElementById("fourthelement").innerHTML =y[2];
}

var x = JSON.parse(localStorage.getItem("counter")); 
document.getElementById("exOnea").innerHTML =x["one"];

document.getElementById("exOneb").innerHTML =x["two"];

document.getElementById("exOnec").innerHTML = x["three"]; 