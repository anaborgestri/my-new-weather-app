function changeForecastDay() {
  // get the clock
  let forecastDaylyDetails = document.querySelector("li.forecastDaylyHours");
  let forecastWeeklyDetails = document.querySelector("li.forecastDays");

  // get the current value of the clock's display property
  let displaySettingHours = forecastDaylyDetails.style.display;
  let displaySettingDays = forecastWeeklyDetails.style.display;

  // also get the clock button, so we can change what it say

  // now toggle the clock and the button text, depending on current state
  if (displaySettingHours == "inline-block") {
    // clock is visible. hide it
    displaySettingDays = "none";
    // change button text button hover missing
  } else {
    // clock is hidden. show it
    displaySettingDays = "inline-block";
    // change button text button over
  }
}

let dailyForecastButton = document.querySelector(".daily-button");
dailyForecastButton.addEventListener("click", changeForecastDay);

function changeForecastWeek() {
  // get the clock
  let forecastDaylyDetails = document.querySelector("li.forecastDaylyHours");
  let forecastWeeklyDetails = document.querySelector("li.forecastDays");

  // get the current value of the clock's display property
  let displaySettingHours = forecastDaylyDetails.style.display;
  let displaySettingDays = forecastWeeklyDetails.style.display;

  // now toggle the clock and the button text, depending on current state
  if (displaySettingDays == "none") {
    // clock is visible. hide it
    displaySettingHours = "inline-block";
    // change button text button hover missing
  } else {
    // clock is hidden. show it
    displaySettingHours = "none";
    // change button text button over
  }
}
let weeklyForecastButton = document.querySelector(".weekly-button");
weeklyForecastButton.addEventListener("click", changeForecastWeek);
