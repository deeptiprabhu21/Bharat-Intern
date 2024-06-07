const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key = "9a81d8202b52b246f6da65489cdcc026";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
 const weather_data = await fetch(`${url}`).then(response => response.json());
if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
}
    console.log(weather_data);
}
    searchBtn.addEventListener('click', ()=>{
        checkWeather(inputBox.value);
});