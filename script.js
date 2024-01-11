function refreshWeather(response) {
  console.log(response.data);
  let cityTemp = response.data.temperature.current;
  let cityTempdegrees = document.querySelector("#temp-degrees");
  cityTempdegrees.innerHTML = Math.round(cityTemp);
  //to make sure that the city name always shows up correctly instead of small or capital letters entered by the users
  //the two elements from funtion 'findCity' need to be changed - in this case for tracebility they were just deactivated with the //
  //they are copied to this funtion and then the 'cityName element on the second request is changed as shown below
  //basically it is changed to get the info from the API, which is always correct (input.value changed to response.data.city;)
  let cityName = document.querySelector(".city");
  cityName.innerHTML = response.data.city;
  //this way independently how the city name is written by the user it will always show up correctly
  //add weather description
  let desciptionWeather = document.querySelector("#description");
  desciptionWeather.innerHTML = response.data.condition.description;
}
function giveWeather(city) {
  let apiKey = `4c08634eb8b52t7acf769o96f5812f64`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function findCity(event) {
  event.preventDefault();
  let input = document.querySelector("#form-search-city");
  //let cityName = document.querySelector(".city");
  // cityName.innerHTML = input.value;
  giveWeather(input.value);
}

let searchCityform = document.querySelector("#search-form");
searchCityform.addEventListener("submit", findCity);

//by the functionality added below we do not need to have the city and weather details in the html. everytime that is refreashed it will just show the details from the city that is below in brackets
giveWeather("Basel");
