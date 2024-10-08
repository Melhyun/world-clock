function update() {
  let sydney = document.querySelector("#sydney");
  let sydneyTimeElement = sydney.querySelector(".time");
  let sydneyDateElement = sydney.querySelector(".date");

  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let chicago = document.querySelector("#chicago");
  let chicagoTimeElement = chicago.querySelector(".time");
  let chicagoDateElement = chicago.querySelector(".date");

  let chicagoTime = moment().tz("America/Chicago");
  chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
update();
setInterval(update, 1000);
