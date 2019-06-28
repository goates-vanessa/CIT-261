var weatherRequest = new XMLHttpRequest(); 
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5386754&APPID=dcdf90f33eea221ba4b10f0f8bf8b295&units=imperial";
weatherRequest.open ('GET', apiURL, true);
weatherRequest.send (); 
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    
    document.getElementById("first-current").innerHTML = weatherData.weather[0].main;
    document.getElementById("first-temp").innerHTML = weatherData.main.temp; 
    }

var weatherRequest2 = new XMLHttpRequest(); 
var apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5295903&APPID=dcdf90f33eea221ba4b10f0f8bf8b295&units=imperial";
weatherRequest2.open ('GET', apiURL2, true);
weatherRequest2.send (); 
weatherRequest2.onload = function() {
    let weatherData = JSON.parse(weatherRequest2.responseText);
    console.log(weatherData);
        
    document.getElementById("second-current").innerHTML = weatherData.weather[0].main;
    document.getElementById("second-temp").innerHTML = weatherData.main.temp; 
        }
var weatherRequest3 = new XMLHttpRequest(); 
var apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=4644585&APPID=dcdf90f33eea221ba4b10f0f8bf8b295&units=imperial";
weatherRequest3.open ('GET', apiURL3, true);
weatherRequest3.send (); 
weatherRequest3.onload = function() {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    console.log(weatherData);
            
    document.getElementById("third-current").innerHTML = weatherData.weather[0].main;
    document.getElementById("third-temp").innerHTML = weatherData.main.temp; 
            }
var weatherRequest4 = new XMLHttpRequest(); 
var apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=dcdf90f33eea221ba4b10f0f8bf8b295&units=imperial";
weatherRequest4.open ('GET', apiURL4, true);
weatherRequest4.send (); 
weatherRequest4.onload = function() {
        let weatherData = JSON.parse(weatherRequest4.responseText);
        console.log(weatherData);
                        
        document.getElementById("fourth-current").innerHTML = weatherData.weather[0].main;
        document.getElementById("fourth-temp").innerHTML = weatherData.main.temp; 
                        }
                    
        