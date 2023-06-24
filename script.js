// display date and time

const d = new Date();
document.getElementById("dateTime").innerHTML = d.toDateString()

// API integration

const API_URL  = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const API_KEY  = "adc68f9a746902618f465bc19a3cd475";


// 
const searchBtn = document.querySelector('.submit')
const searchBox = document.querySelector('.input')

async function checkWeather(city) {
    const response = await fetch(API_URL + city + `&appid=${API_KEY}`)
    var data = await response.json();
    console.log(data);

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value)
})




