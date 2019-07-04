var person = {
    firstName: "Vanessa",
    lastName: "Goates", 
    age: 28
    };

document.getElementById("out").innerHTML = "My full name is:" + person.firstName + " " + person.lastName;

function Person(first, last, age, eye) {
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye; 
}
 var myFather = new Person("Tommy", "Moore", 56, "brown"); 
 var myMother = new Person("Cara", "Powell-Moore", 56, "green"); 
 var mySister = new Person("Sabrina", "Moore-Humphrey", 30, "green"); 
 var mySisterTwo = new Person("Tammie", "Moore", 17, "brown"); 
 var myHusband = new Person("Caleb", "Goates", 26, "blue"); 

 document.getElementById("father").innerHTML = "My father is " + myFather.age + "."; 
 document.getElementById("husband").innerHTML = "My husband is " + myHusband.age + "."; 

 function testLoad() {
     alert("Welcome, your page is loaded."); 
 }

 function touchFunction() {
     alert("Ouch!"); 
 }

 function Teacher(first, last, age, eye, subject){
     Person.call(this, first, last, age, eye);
     this.subject = subject; 
 }
 var mrGoates = new Teacher("Caleb", "Goates", 40, "blue", "Biology"); 
 document.getElementById("mikeGoates").innerHTML = "Mr. Goates teaches " +mrGoates.subject + "."; 

 var anArray = {"one": 1, "two": 2, "three": 3};
 var y = anArray["three"]; 
 document.getElementById("thisOne").innerHTML = y; 

  
var shoes =["heels", "tennis shoes", "sandals", "pumas"];

function showArray(){
    document.getElementById("length").innerHTML = shoes.length; 
    document.getElementById("firstelement").innerHTML = shoes[0];
    document.getElementById("secondelement").innerHTML = shoes[1];
    document.getElementById("fourthelement").innerHTML = shoes[3];
}


 localStorage.user = JSON.stringify(person); 
 localStorage.counter = JSON.stringify(anArray); 
 localStorage.favorites = JSON.stringify(shoes); 