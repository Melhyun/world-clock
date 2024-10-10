function update() {
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyTimeElement = sydney.querySelector(".time");
    let sydneyDateElement = sydney.querySelector(".date");

    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let chicago = document.querySelector("#chicago");
  if (chicago) {
    let chicagoTimeElement = chicago.querySelector(".time");
    let chicagoDateElement = chicago.querySelector(".date");

    let chicagoTime = moment().tz("America/Chicago");
    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cleanCity = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector(".container");
  cityElement.innerHTML = `<div class="city">
        <h2>${cleanCity}</h2>

        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;
}

update();
setInterval(update, 1000);

let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCity);
