//adjust the function to take paraemters

function updateSliderValue(slider_id, value_id) {
  var slider = document.getElementById(slider_id);
  var output = document.getElementById(value_id);
  output.textContent = parseFloat(slider.value).toFixed(3); // Display the value rounded to three decimal places
}

document.getElementById("submit_training").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "upload.html";
});
