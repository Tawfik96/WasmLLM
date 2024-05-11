
var modal = document.getElementById("myModal1");
var btn = document.getElementById("openModal1");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// // for clicking anywhere outside the boxxxx 
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
