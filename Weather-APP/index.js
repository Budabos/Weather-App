//Creating event listener in about us button
const aboutEl = document.getElementById("about")
const  modelEl = document.querySelector(".model")

aboutEl.addEventListener("click", () => {
    modelEl.showModal();
}); 

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
 
 



