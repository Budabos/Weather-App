// Get the DOM element with the ID "about" and store it in the variable "aboutEl"
const aboutEl = document.getElementById("about");

// Get the DOM element with the class "model" and store it in the variable "modelEl"
const modelEl = document.querySelector(".model");

// Add a click event listener to the "aboutEl" element
aboutEl.addEventListener("click", () => {
    // When "aboutEl" is clicked, show the modal associated with "modelEl"
    modelEl.showModal();
});




// Define your API key and API URL
const apiKey = "05b0ecb5d9a854a2728535042c7b88f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");  

// Define an asynchronous function to check the weather
async function checkWeather(city) {
    // Send a GET request to the OpenWeatherMap API with your API key
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Parse the JSON response from the API
    let data = await response.json();

    // Log the weather data to the console
    console.log(data);

    
    // Update HTML elements with weather data received from the API response
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind").innerHTML = data.main.wind.speed + " km/h"; 
    
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})


// Call the checkWeather function to initiate the weather check
checkWeather();



/*const aboutEl = document.querySelector("#about");
const  modelEl = document.querySelectorAll(".model");

aboutEl.addEventListener("click", () =>{
    console.log("click")
    if(modelEl.style.display === "block"){
        modelEl.style.display = "none"

    }else{
        modelEl.style.display = "block"
    }
    
});*/



/*let myHeaders = new Headers();
myHeaders.append("X-Api-Key", "26eJIHt/sEgMl68YCYBiog==PB28IcPzdXc4Fe52");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.api-ninjas.com/v1/weather?city=London", requestOptions)
  .then(response => response.json())
  .then(result =>{
    let humidity =  result.humidity
    console.log(humidity)
  }) 
  .catch(error => console.log('error', error));*/

// function fetchWeather
  /*function fetchWeather(){
    fetch("https://api.api-ninjas.com/v1/weather?city=London",{
      method: "GET",
      headers: {
        "X-Api-Key": "26eJIHt/sEgMl68YCYBiog==PB28IcPzdXc4Fe52"
      } 

    })
    .then(res => res.json())
    .then(weather => weatherFunction(weather))
    .catch(error => console.log('error', error));
    
  }

   function weatherFunction(weather){
    console.log(weather)
    let content = weather.humidity

   }
   fetchWeather();*/
 
 



