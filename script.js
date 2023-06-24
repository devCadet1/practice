// display date and time

const d = new Date();
document.getElementById("dateTime").innerHTML = d.toDateString()

// API integration

const apiKey = "adc68f9a746902618f465bc19a3cd475";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// 
const searchBtn = document.querySelector('.submit')
const searchBox = document.querySelector('.input')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`)


    var data = await response.json();
    console.log(data);

}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value)
})




