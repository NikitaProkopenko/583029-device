var contactUs = document.querySelector(".contact-us");
var modal = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close-button");
var form = modal.querySelector("form");
var login = modal.querySelector("[name=login]");
var email = modal.querySelector("[name=email]");
var message = modal.querySelector("[name=message]");

// Переменные карты

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".map-modal");
var mapClose = document.querySelector(".map-close-button");


contactUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-on");
    login.focus();
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-on");
});

form.addEventListener("submit", function(evt) {
    if (!login.value) {
        evt.preventDefault();
        login.classList.add("invalid");
    }
    if (!email.value) {
        evt.preventDefault();
        email.classList.add("invalid");
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
