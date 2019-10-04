var openMapButton = document.querySelector(".map-link");
var mapWindow = document.querySelector("#map");
var closeMapButton = mapWindow.querySelector(".close");

openMapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
  closeMapButton.focus();
});

closeMapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
  openMapButton.focus();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapWindow.classList.contains("modal-show")) {
      mapWindow.classList.remove("modal-show");
    }
  }
});
