// Selectors
const submitBtn = document.querySelector(".submit");
const inputVal = document.querySelector(".number-input");
const baseMetric = document.querySelectorAll(".base-metric");
const metersToFeet = document.getElementById("meters-to-feet");
const feetToMeters = document.getElementById("feet-to-meters");
const litersToGallons = document.getElementById("liters-to-gallons");
const gallonsToLiters = document.getElementById("gallons-to-liters");
const kilosToPounds = document.getElementById("kg-to-lb");
const poundsToKilos = document.getElementById("lb-to-kg");

// Conversion Functions
const meterToFeet = length => (length * 3.281).toFixed(3);
const feetToMeter = length => (length / 3.281).toFixed(3);
const literToGallon = liters => (liters / 3.785).toFixed(3);
const gallonToLiter = gallons => (gallons * 3.785).toFixed(3);
const kiloToPound = kg => (kg * 2.205).toFixed(3);
const poundToKilo = lb => (lb / 2.205).toFixed(3);

const updateMetrics = inputVal => {
  for (let metric of baseMetric) {
    metric.textContent = inputVal;
  }
};

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  let num = inputVal.value;
  updateMetrics(num);
  metersToFeet.textContent = meterToFeet(num);
  feetToMeters.textContent = feetToMeter(num);
  litersToGallons.textContent = literToGallon(num);
  gallonsToLiters.textContent = gallonToLiter(num);
  kilosToPounds.textContent = kiloToPound(num);
  poundsToKilos.textContent = poundToKilo(num);
  inputVal.value = " ";
});
