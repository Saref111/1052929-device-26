var contactUsOpenButton = document.querySelector(".contact-us-button");

var contactUsPopup = document.querySelector(".contact-us");
var contactUsCloseButton = contactUsPopup.querySelector(".close");

var contactUsForm = contactUsPopup.querySelector(".contact-us-form");
var nameInput = contactUsForm.querySelector("#author-name");
var emailInput = contactUsForm.querySelector("#author-email");
var messageInput = contactUsForm.querySelector("#author-text");

var isStorageSupport = true;
var storageEmail = "";
var storageName = "";

try {
  storageEmail = localStorage.getItem("email");
  storageName = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactUsOpenButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.add("modal-show");

  nameInput.focus();

  if (storageName) {
    nameInput.value = storageName;
    emailInput.focus();
  }

  if (storageEmail) {
    emailInput.value = storageEmail;
    nameInput.focus();
  }

  if (storageName !== "" && storageEmail) {
    messageInput.focus();
  }
});

contactUsCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactUsPopup.classList.remove("modal-show");
  contactUsPopup.classList.remove("modal-error");
  contactUsOpenButton.focus();
});

contactUsForm.addEventListener("submit", function (evt) {
  if (!emailInput.value) {
    evt.preventDefault();
    contactUsPopup.classList.remove("modal-error");
    contactUsPopup.offsetWidth = contactUsPopup.offsetWidth;
    contactUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", emailInput.value);

      if (nameInput) {
        localStorage.setItem("name", nameInput.value);
      }
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (contactUsPopup.classList.contains("modal-show")) {
      contactUsPopup.classList.remove("modal-show");
      contactUsPopup.classList.remove("modal-error");
    }
  }
})
