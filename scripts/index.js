// worked with Eric M.

// Implement the following functions to fulfill the tests!
function getLocationName(weather) {
  const city = new Map();
  const cityValues = Object.values(weather); // array of city values
  const cityName = document.querySelector("[data-city]");
  cityName.textContent = `city name: ${cityValues[11]}`;
  body.appendChild(cityName);
  console.log(cityValues);
  return cityValues[11]; //city name is in index 10
}

function getLocationCountry(weather) {
  console.log(weather);
  return weather.sys.country;
}
function getLocationLatitude(weather) {
  return weather.coord.lat;
}
function getLocationLongitude(weather) {
  return weather.coord.lon;
}
function getDescription(weather) {
  return weather.weather[0].description;
}
function getWindSpeed(weather) {
  const windSpeed = document.querySelector("[data-wind]");
  windSpeed.textContent = `wind speed: ${weather.wind.speed}`;
  body.appendChild(windSpeed);
  return weather.wind["speed"];
}
function getSunrise(weather) {
  return weather.sys["sunrise"];
}

function getLocationTemp(weather) {
  const cityTemp = document.querySelector("[data-temp]");
  cityTemp.textContent = `city temp: ${weather.main.temp}`;
  body.appendChild(cityTemp);
  return weather.main.temp;
}
const aHeading = document.createElement("h1");
const aDiv = document.createElement("div");
// aDiv.textContent = "This is the div you created!";
const body = document.querySelector("body");
body.appendChild(aDiv);

function returnURL(theWeather) {
  // console.log(weather.weather[0].icon); //log the name of the icon
  // const URL = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
  const URL = `http://openweathermap.org/img/w/${
    theWeather.weather[0].icon
  }.png`;
  return URL;
}
function showIcon(iconURL) {
  const weatherDiv = document.createElement("img");
  // weatherDiv.textContent = `weather icon will be displayed here: ${iconURL}`;
  weatherDiv.setAttribute("src", iconURL);
  body.appendChild(weatherDiv);
}

function showMap(weather) {
  const iFrameMap = document.querySelector("[data-map");
  const lat = getLocationLatitude(weather);
  const long = getLocationLongitude(weather);
  const mapURL = `http://maps.google.com/maps?q=${lat},${long}&z=15&output=embed`;
  iFrameMap.setAttribute("src", mapURL);
}

let theWeather;
const theURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Atlanta,%20US&appid=35df3ce6d5649c7521f37314c74e69cc";
fetch(theURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(theWeather) {
    console.log(`this logs theWeather: ${theWeather}`);
    console.log(theWeather);
    console.log(
      `this logs theWeather's icon location: ${theWeather.weather[0].icon}.png`
    );
    return theWeather;
  })
  .then(function(noReallyTheWeatherData) {
    getLocationName(noReallyTheWeatherData);
    getLocationTemp(noReallyTheWeatherData);
    getWindSpeed(noReallyTheWeatherData);
    showIcon(returnURL(noReallyTheWeatherData));
    showMap(noReallyTheWeatherData);
  });

// weather.weather.icon => "01d"
// http://openweathermap.org/img/w/10d.png
// interpolated: `http://opnweathermap.org/img/w/${weather.weather.icon}.png`

// const aDiv1 = document.getElementsByClassName("cityNameDiv");
// aDiv1.textContent = "city name goes here";
// city name located in atlWeather.name
// const cityName = document.querySelector("[data-city]");
// cityName.textContent = "city name goes here: ";
// body.appendChild(cityName);

// const aDiv2 = document.getElementsByClassName("temperatureDiv");
// aDiv2.textContent = "city temp goes here";
// const cityTemp = document.querySelector("[data-temp]");
// cityTemp.textContent = "city temp goes here: ";
// body.appendChild(cityTemp);

// const aDiv3 = document.getElementsByClassName("windSpeedDiv");
// aDiv3.textContent = "wind speed goes here";
// const windSpeed = document.querySelector("[data-wind]");
// windSpeed.textContent = "wind speed goes here: ";
// body.appendChild(windSpeed);

// Please ignore the following
try {
  module.exports = {
    getLocationName,
    getLocationCountry,
    getLocationLatitude,
    getLocationLongitude,
    getDescription,
    getWindSpeed,
    getSunrise
  };
} catch (e) {}
