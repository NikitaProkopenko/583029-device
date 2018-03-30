var contactUs = document.querySelector(".contact-us");
var modal = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close-button");
var form = modal.querySelector("form");
var login = modal.querySelector("[name=login]");
var email = modal.querySelector("[name=email]");
var message = modal.querySelector("[name=message]");
var isStorageSupportLogin = true;
var isStorageSupportEmail = true;
var storageLogin = "";
var storageEmail = "";

// Переменные карты

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".map-modal");
var mapClose = document.querySelector(".map-close-button");

try {
    storageLogin = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupportEmail = false;
}

contactUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-on");

    if (storageLogin && !storageEmail) {
        login.value = storageLogin;
    } else {
        email.focus();
    }

    if (!storageLogin && storageEmail) {
        email.value = storageEmail;
    } else {
        login.focus();
    }

    if (storageLogin && storageEmail) {
        login.value = storageLogin;
        email.value = storageEmail
    } else {
        message.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-on");
});

form.addEventListener("submit", function(evt) {
    if (!login.value) {
        evt.preventDefault();
        login.classList.add("invalid");
    } else if (!email.value) {
        evt.preventDefault();
        email.classList.add("invalid");
    } else {
        if (isStorageSupportLogin) {
            localStorage.setItem("login", login.value);
        }
        if (isStorageSupportEmail) {
            localStorage.setItem("email", email.value);
        }
    }
});

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-on");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-on");
});
