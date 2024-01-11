function findCity(event) {
  event.preventDefault();
  let input = document.querySelector("#form-search-city");
  let city = document.querySelector(".city");
  city.innerHTML = input.value;
}

let searchCityform = document.querySelector("#search-form");
searchCityform.addEventListener("submit", findCity);
