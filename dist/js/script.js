"use strict";

var interestPopupText = {
  0: {
    name: "Производитель",
    text: "Вы Производитель? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах и построению розничного сбыта"
  },
  1: {
    name: "Поставщик",
    text: "Вы Поставщик? Оставьте свои контакты и эксперт проведет для вас экспресс-консультацию по развитию продаж на маркетплейсах"
  },
  2: {
    name: "Дистрибьютор",
    text: "Вы дистрибьютор? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах"
  },
  3: {
    name: "Интернет-магазин",
    text: "Владеете интернет-магазином? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах и реформации вашего магазина"
  },
  4: {
    name: "Продаете в соц. сетях",
    text: "Вы продаете товары в соц. сетях? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах"
  },
  5: {
    name: "Продаете на авито",
    text: "Вы продаете товары на Авито? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах"
  },
  6: {
    name: "Владеете товаром",
    text: "Обладаете ликвидным товаром? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах"
  },
  7: {
    name: "Уже торгуете на маркетплейсах",
    text: "Уже торгуете на маркетплейсах? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию ваших продаж и увеличению прибыли"
  },
  8: {
    name: "Хотите торговать на маркетплейсах",
    text: "Хотите торгвать на маркетплейсах? Оставьте свои контакты и эксперт проведет для вас консультацию по развитию продаж на маркетплейсах"
  }
};

function openPopup(id) {
  var modal = document.getElementById(id);
  var body = document.body;
  body.style.overflow = "hidden";
  modal.classList.add("active");
}

function validation(formId) {
  var form = document.getElementById(formId) || formId;
  var fields = form.querySelectorAll("input[required]");
  console.log(fields);
  var result = [];
  fields.forEach(function (field) {
    field.classList.remove("error");

    if (field.value === "" || field.value === " ") {
      field.classList.add("error");
      result.push(false);
    }
  });

  if (fields[1].value.length < 16) {
    fields[1].classList.add("error");
    result.push(false);
  }

  if (result.length > 0) {
    return false;
  } else {
    return true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  {
    var overlays = document.querySelectorAll(".overlay");

    var _interestButtons = document.querySelectorAll(".interest__items__item");

    overlays.forEach(function (overlay) {
      overlay.addEventListener("click", function (event) {
        if (event.target.classList.contains("overlay")) {
          overlay.querySelectorAll("input").forEach(function (el) {
            return el.value = "";
          });
          overlay.classList.remove("active");
          document.body.style.overflow = "unset";

          _interestButtons.forEach(function (btn) {
            return btn.classList.remove("active");
          });
        }
      });
    });
  }
  document.getElementById("closePopup").addEventListener("click", function () {
    document.body.style.overflow = "unset";
    document.getElementById("basic-popup").classList.remove("active");
  });
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
  var managerSwiper = new Swiper("#managerSwiper", {
    speed: 500,
    loop: true,
    spaceBetween: 100,
    infinite: true,
    effect: "fade",
    slidesPerView: 1,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".manager__button-next",
      prevEl: ".manager__button-prev"
    },
    on: {
      slideChangeTransitionStart: function slideChangeTransitionStart(event) {
        console.log(event);
        var slide = event.el.querySelector(".swiper-slide-active");
        slide = slide.querySelector(".manager__personal__item");
        console.log(slide);
        var name = slide.dataset.name;
        var role = slide.dataset.role;
        var nameElement = document.getElementById("manager-name");
        var roleElement = document.getElementById("manager-role");
        nameElement.innerText = name;
        roleElement.innerText = role;
      }
    }
  });
  var interestButtons = document.querySelectorAll(".interest__items__item");
  interestButtons.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      var popup = document.getElementById("interest-popup");
      var target = event.target;
      var targetId = target.dataset.id; // interestButtons.forEach((btn) => btn.classList.remove("active"));
      // btn.classList.add("active");

      popup.dataset.current = targetId;
      var nameWrapper = document.getElementById("interest-popup-name"),
          textWrapper = document.getElementById("interest-popup-text");
      nameWrapper.innerText = interestPopupText[targetId].name;
      textWrapper.innerText = interestPopupText[targetId].text;
      openPopup("interest-popup");
    });
  });
  var interestNext = document.getElementById("interestNext");
  interestNext.addEventListener("click", function (e) {
    var popup = document.getElementById("interest-popup");
    var currentId = Number(popup.dataset.current);
    currentId += 1;
    var nameWrapper = document.getElementById("interest-popup-name"),
        textWrapper = document.getElementById("interest-popup-text");
    var length = Object.keys(interestPopupText).length;

    if (length - 1 >= currentId) {
      nameWrapper.innerText = interestPopupText[currentId].name;
      textWrapper.innerText = interestPopupText[currentId].text;
      popup.dataset.current = currentId;
    } else {
      nameWrapper.innerText = interestPopupText[0].name;
      textWrapper.innerText = interestPopupText[0].text;
      popup.dataset.current = 0;
    }
  });
  var interestPrev = document.getElementById("interestPrev");
  interestPrev.addEventListener("click", function (e) {
    var popup = document.getElementById("interest-popup");
    var currentId = Number(popup.dataset.current);
    currentId -= 1;
    var nameWrapper = document.getElementById("interest-popup-name"),
        textWrapper = document.getElementById("interest-popup-text");

    if (currentId !== -1) {
      nameWrapper.innerText = interestPopupText[currentId].name;
      textWrapper.innerText = interestPopupText[currentId].text;
      popup.dataset.current = currentId;
    } else {
      nameWrapper.innerText = interestPopupText[8].name;
      textWrapper.innerText = interestPopupText[8].text;
      popup.dataset.current = 8;
    }
  });
  var closeInterestBtn = document.getElementById("closeInterestPopup");
  closeInterestBtn.addEventListener("click", function () {
    document.getElementById("interest-popup").classList.remove("active");
    document.body.style.overflow = "unset";
    interestButtons.forEach(function (btn) {
      return btn.classList.remove("active");
    });
  });
  var phoneFields = document.querySelectorAll(".phone-mask");
  phoneFields.forEach(function (elem) {
    var mask = IMask(elem, {
      mask: "+{7}(000)000-00-00",
      lazy: true,
      placeholderChar: "_" //

    });
    elem.addEventListener("focus", function (ev) {
      mask.updateOptions({
        lazy: false
      });
    });
    elem.addEventListener("blur", function (ev) {
      mask.updateOptions({
        lazy: true
      });
    });
  });
  {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".interest-decor", {
      scrollTrigger: {
        trigger: ".interest",
        scrub: 3
      },
      left: -1800,
      ease: "linear",
      duration: 10
    });
    gsap.to(".service-decor-1", {
      scrollTrigger: {
        trigger: ".service",
        scrub: 0
      },
      rotate: -360,
      ease: "linear",
      duration: 5
    });
    gsap.to(".service-decor-2", {
      scrollTrigger: {
        trigger: ".service",
        scrub: 0
      },
      rotate: 720,
      ease: "linear",
      duration: 5
    });
    var managerArrow = gsap.to(".manager__info__btn", {
      scrollTrigger: {
        trigger: ".manager"
      },
      delay: 3,
      x: 15,
      animation: "tween",
      duration: 1,
      ease: "power5.out"
    });
    managerArrow.eventCallback("onComplete", function () {
      managerArrow.reverse();
    });
    var offerHand = gsap.to(".offer__wrapper__form__hand", {
      scrollTrigger: {
        trigger: ".offer"
      },
      delay: 3,
      x: 15,
      animation: "tween",
      duration: 1,
      ease: "power5.out"
    });
    offerHand.eventCallback("onComplete", function () {
      offerHand.reverse();
    });
  }
  {
    var btn = document.querySelector(".stats__bottom__btn");
    btn.addEventListener("click", function () {
      openPopup("basic-popup");
    });
  }
  {
    var _btn = document.querySelector(".manager__info__btn");

    _btn.addEventListener("click", function () {
      openPopup("basic-popup");
    });
  }
  {
    var btns = document.querySelectorAll(".manager__reasons__item__btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("basic-popup");
      });
    });
  } // Welcome form

  {
    var _btn2 = document.querySelector(".welcome__right-side__form__button");

    var form = document.getElementById("welcome-form");
    var thanks = document.querySelector(".welcome__right-side__thanks-window");

    _btn2.addEventListener("click", function (event) {
      event.preventDefault();
      var result = validation("welcome-form");

      if (result) {
        form.style.display = "none";
        thanks.style.display = "flex";
        form.querySelectorAll(".input-field").forEach(function (el) {
          return el.value = "";
        });
      }
    });

    var thanksBtn = document.getElementById("welcome-thanks-button");
    thanksBtn.addEventListener("click", function () {
      form.style.display = "flex";
      thanks.style.display = "none";
    });
  }
  {
    var _btns = document.querySelectorAll(".form-popup__form__submit");

    _btns.forEach(function (btn) {
      var form = btn.closest("form");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        validation(form);
      });
    });
  } // Welcome form

  {
    var _btn3 = document.querySelector(".offer__wrapper__form__btn");

    var _form = document.getElementById("offer-form"); // const thanks = document.querySelector(
    //   ".welcome__right-side__thanks-window"
    // );


    _btn3.addEventListener("click", function (event) {
      event.preventDefault();
      var result = validation(_form);

      if (result) {// form.style.display = "none";
        // thanks.style.display = "flex";
        // form.querySelectorAll(".input-field").forEach((el) => (el.value = ""));
      }
    }); // const thanksBtn = document.getElementById("welcome-thanks-button");
    // thanksBtn.addEventListener("click", function () {
    //   form.style.display = "flex";
    //   thanks.style.display = "none";
    // });

  }
  {
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        var _overlays = document.querySelectorAll(".overlay");

        _overlays.forEach(function (overlay) {
          return overlay.classList.remove("active");
        });

        document.body.style.overflow = "unset";
      }
    });
  }
});