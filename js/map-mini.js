var openMapButton = document.querySelector(".map-link"),
  mapWindow = document.querySelector("#map"),
  closeMapButton = mapWindow.querySelector(".close");
openMapButton.addEventListener("click", function (e) {
  e.preventDefault(), mapWindow.classList.add("modal-show"), closeMapButton.focus()
}), closeMapButton.addEventListener("click", function (e) {
  e.preventDefault(), mapWindow.classList.remove("modal-show"), openMapButton.focus()
}), window.addEventListener("keydown", function (e) {
  27 === e.keyCode && (e.preventDefault(), mapWindow.classList.contains("modal-show") && mapWindow.classList.remove("modal-show"))
});
