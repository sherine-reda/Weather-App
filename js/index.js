let searchInput = document.querySelector(".find-location #search");
let area = document.querySelector(".current-day .locatio");
let day1 = document.querySelector(".current-day .day");
let day2 = document.querySelector(".second-day .day");
let day3 = document.querySelector(".therid-day .day");
let date = document.querySelector(".current-day .date");
let day1Num = document.querySelector(".current-day .num");
let day2Num1 = document.querySelector(".second-day .num1");
let day2Num2 = document.querySelector(".second-day .num2");
let day3Num1 = document.querySelector(".therid-day .num1");
let day3Num2 = document.querySelector(".therid-day .num2");
let customDay1 = document.querySelector(".current-day .custom");
let customDay2 = document.querySelector(".second-day .custom");
let customDay3 = document.querySelector(".therid-day .custom");
let icon1 = document.querySelector(".current-day .forecast-icon");
let icon2 = document.querySelector(".second-day .forecast-icon");
let icon3 = document.querySelector(".therid-day .forecast-icon");

//forecast.forecastday[1].day.maxtemp_c/mintemp_c/condition.text/icon

async function getWeather(city) {
  let api = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ba50a24d6aa64f81be4194628231802&q=${city}&days=3`
  );
  let apiJson = await api.json();

  area.innerHTML = `<span>${apiJson.location.name}</span>`;
  day1Num.innerHTML = `${apiJson.current.temp_c}<sup>o</sup>C`;
  icon1.innerHTML = ` <img src=${apiJson.current.condition.icon} alt="" width="90">`;
  customDay1.innerHTML = apiJson.current.condition.text;
  icon2.innerHTML = ` <img src=${apiJson.forecast.forecastday[1].day.condition.icon} alt="" width="90">`;
  icon3.innerHTML = ` <img src=${apiJson.forecast.forecastday[2].day.condition.icon} alt="" width="90">`;
  day2Num1.innerHTML = `${apiJson.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`;
  day2Num2.innerHTML = `${apiJson.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>`;
  day3Num1.innerHTML = `${apiJson.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`;
  day3Num2.innerHTML = `${apiJson.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>`;
  customDay2.innerHTML = apiJson.forecast.forecastday[1].day.condition.text;
  customDay3.innerHTML = apiJson.forecast.forecastday[2].day.condition.text;

  console.log(apiJson);
}

getWeather("cairo");

searchInput.addEventListener("input", function (event) {
  getWeather(this.value);
});

function getday() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const options = { day: "numeric", month: "long" };
  const d = new Date();
  const nextDay = new Date(d);
  const nextNextDay = new Date(d);
  nextDay.setDate(d.getDate() + 1);
  nextNextDay.setDate(d.getDate() + 2);
  let day = weekday[d.getDay()];
  let Currentdate = d.toLocaleDateString("en-GB", options);
  let nextDayy = weekday[nextDay.getDay()];
  let nextNextDayy = weekday[nextNextDay.getDay()];

  let creatSpanDay = document.createElement("span");
  let creatSpanNextDay = document.createElement("span");
  let creatSpanNextNextDay = document.createElement("span");
  let creatSpanCurrentDatey = document.createElement("span");
  let creatTextDay = document.createTextNode(day);
  let creatTextNextDay = document.createTextNode(nextDayy);
  let creatTextNextNextDay = document.createTextNode(nextNextDayy);
  let creatTextCurrentDatey = document.createTextNode(Currentdate);

  creatSpanDay.append(creatTextDay);
  creatSpanNextDay.append(creatTextNextDay);
  creatSpanNextNextDay.append(creatTextNextNextDay);
  creatSpanCurrentDatey.append(creatTextCurrentDatey);
  

  day1.append(creatSpanDay);
  day2.append(creatSpanNextDay);
  day3.append(creatSpanNextNextDay);
  date.append(creatSpanCurrentDatey);
}
getday();
