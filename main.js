const touristDestinations = [
    { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
    { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
    { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
    { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
    { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
    { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
    { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
    { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
    { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
    { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
    { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
    { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
    { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
    { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
    { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
    { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
    { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
    { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
    { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
    { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
    { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
    { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
    { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
    { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6832 },
    { name: "Faisalabad", latitude: 31.4504, longitude: 73.135 },
    { name: "Gujranwala", latitude: 32.1877, longitude: 74.1945 },
    { name: "Sialkot", latitude: 32.4945, longitude: 74.5229 },
    { name: "Gilgit", latitude: 35.9208, longitude: 74.3141 },
    { name: "Ziarat", latitude: 30.3816, longitude: 67.7253 },
    { name: "Gwadar", latitude: 25.1266, longitude: 62.322 },
    { name: "Mohenjo-daro", latitude: 27.329, longitude: 68.1389 },
    { name: "Rohtas Fort", latitude: 32.9654, longitude: 73.5789 },
];


const dropDown = document.querySelector('#citySelect');
const showTemp = document.querySelector('h1');
const weatherType = document.querySelector('h2');
const feelsLike = document.querySelector('h3');
const icon = document.querySelector('img');

dropDown.addEventListener('change', function(){
    console.log(touristDestinations[this.value].name);

    fetchWeather(touristDestinations[this.value].latitude, touristDestinations[this.value].longitude, displayWeather);
});



function fetchWeather(latitude, longitude, callback){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c153479685c47f1b34a83591f3b1acbe`)
    .then((resolve) => resolve.json())
    .then((data) => callback(data));
}

function displayWeather(info){
    console.log(info);
    console.log(info.main.temp - 273.15);

    showTemp.innerText = `${(info.main.temp - 273.15).toFixed(1)}°C`;
    weatherType.innerText = info.weather[0].description;
    feelsLike.innerText = `Feels like ${(info.main.feels_like - 273.15).toFixed(1)}°C`
    icon.src = `http://openweathermap.org/img/w/${info.weather[0].icon}.png`;
}