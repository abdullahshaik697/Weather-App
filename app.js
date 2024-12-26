let cityInput = document.querySelector("#cityInput");
let searchButton = document.querySelector("#searchButton");

let cityNameDiv = document.querySelector("#cityNameDiv")
let countryName = document.querySelector("#countryName")
let temperature = document.querySelector("#temperature")
let feelsLike = document.querySelector("#feelsLike")
let windSpeed = document.querySelector("#windSpeed")
let humidity = document.querySelector("#humidity")


let API_KEY = "0cdc90b45923991663d8dd5e99bff0f0";

searchButton.addEventListener("click",async ()=>{
    try{
        
        let cityName = cityInput.value.trim()
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        var response = await fetch(url);
        let data = await response.json();
        console.log(data)

        cityNameDiv.innerHTML = data.name;
        countryName.innerHTML = data.sys.country;

        temperature.innerHTML = data.main.temp;
        feelsLike.innerHTML   = data.main.feels_like;
        windSpeed.innerHTML   = data.wind.speed;
        humidity.innerHTML    = data.main.humidity;

    
    
    }catch(e){
        
        console.log(e)
    }
    
})