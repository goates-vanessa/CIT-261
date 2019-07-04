document.getElementById("exTwo").innerHTML = "My full name is:" + localStorage.getItem("user").fullName();

function showArray(){
    document.getElementById("length").innerHTML = localStorage.getItem("favorites").length; 
    document.getElementById("firstelement").innerHTML = localStorage.getItem("favorites")[0];
    document.getElementById("secondelement").innerHTML = localStorage.getItem("favorites")[1];
    document.getElementById("fourthelement").innerHTML = localStorage.getItem("favorites")[3];
}

document.getElementById("exOnea").innerHTML = localStorage.getItem("counter")["one"];

document.getElementById("exOneb").innerHTML = localStorage.counter["two"];

document.getElementById("exOnec").innerHTML = localStorage.counter["three"]; 