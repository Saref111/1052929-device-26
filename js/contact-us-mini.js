var contactUsOpenButton = document.querySelector(".contact-us-button"),
  contactUsPopup = document.querySelector(".contact-us"),
  contactUsCloseButton = contactUsPopup.querySelector(".close"),
  contactUsForm = contactUsPopup.querySelector(".contact-us-form"),
  nameInput = contactUsForm.querySelector("#author-name"),
  emailInput = contactUsForm.querySelector("#author-email"),
  messageInput = contactUsForm.querySelector("#author-text"),
  isStorageSupport = !0,
  storageEmail = "",
  storageName = "";
try {
  storageEmail = localStorage.getItem("email"), storageName = localStorage.getItem("name")
} catch (t) {
  isStorageSupport = !1
}
contactUsOpenButton.addEventListener("click", function (t) {
  t.preventDefault(), contactUsPopup.classList.add("modal-show"), nameInput.focus(), storageName && (nameInput.value = storageName, emailInput.focus()), storageEmail && (emailInput.value = storageEmail, nameInput.focus()), "" !== storageName && storageEmail && messageInput.focus()
}), contactUsCloseButton.addEventListener("click", function (t) {
  t.preventDefault(), contactUsPopup.classList.remove("modal-show"), contactUsPopup.classList.remove("modal-error"), contactUsOpenButton.focus()
}), contactUsForm.addEventListener("submit", function (t) {
  emailInput.value ? isStorageSupport && (localStorage.setItem("email", emailInput.value), nameInput && localStorage.setItem("name", nameInput.value)) : (t.preventDefault(), contactUsPopup.classList.remove("modal-error"), contactUsPopup.offsetWidth = contactUsPopup.offsetWidth, contactUsPopup.classList.add("modal-error"))
}), window.addEventListener("keydown", function (t) {
  27 === t.keyCode && (t.preventDefault(), contactUsPopup.classList.contains("modal-show") && (contactUsPopup.classList.remove("modal-show"), contactUsPopup.classList.remove("modal-error")))
});
