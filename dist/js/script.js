"use strict";

function openPopup(id) {
  var modal = document.getElementById(id);
  var body = document.body;
  body.style.overflow = "hidden";
  modal.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  {
    var overlays = document.querySelectorAll(".overlay");
    overlays.forEach(function (overlay) {
      overlay.addEventListener("click", function (event) {
        if (event.target.classList.contains("overlay")) {
          overlay.classList.remove("active");
          document.body.style.overflow = "unset";
        }
      });
    });
  }
  var statSwiper = new Swiper("#statSwiper", {
    speed: 500,
    loop: true,
    spaceBetween: 100,
    infinite: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".stats__button-next",
      prevEl: ".stats__button-prev"
    }
  });
});