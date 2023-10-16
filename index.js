document.addEventListener('DOMContentLoaded', function() {
const searchBox=document.querySelector('.search input');
const searchButton=document.querySelector('.search button');

async function doNetworkCall(city){
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb21630d429e7810a95c400cba1bcc0f&units=metric`;
    try{
    const response = await fetch(URL);
    const data = await response.json();//Deserialization
    console.log(data);
    document.querySelector('.temp').innerHTML=data.main.temp;
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidityper').innerHTML=data.main.humidity + "%";
    document.querySelector('.windspeed').innerHTML=data.wind.speed + "k/h";

    }
    catch(err){
        throw err;
    }

}
searchButton.addEventListener('click', function () {
    const city = searchBox.value;
    doNetworkCall(city);
})
});


