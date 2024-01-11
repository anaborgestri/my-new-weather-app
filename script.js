function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let cityTemp = response.data.temperature.current;
  let cityTempdegrees = document.querySelector("#temp-degrees");
  cityTempdegrees.innerHTML = Math.round(cityTemp);
}
function giveWeather(city) {
  let apiKey = `4c08634eb8b52t7acf769o96f5812f64`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function findCity(event) {
  event.preventDefault();
  let input = document.querySelector("#form-search-city");
  let cityName = document.querySelector(".city");
  cityName.innerHTML = input.value;
  giveWeather(input.value);
}

let searchCityform = document.querySelector("#search-form");
searchCityform.addEventListener("submit", findCity);
