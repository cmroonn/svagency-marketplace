"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var interestPopupText = {
  0: {
    name: "Производитель",
    text: "Вы&nbsp;Производитель? Оставьте свои контакты и&nbsp;эксперт проведет для&nbsp;вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах и&nbsp;построению розничного сбыта"
  },
  1: {
    name: "Поставщик",
    text: "Вы&nbsp;Поставщик? Оставьте свои контакты и&nbsp;эксперт проведет для&nbsp;вас экспресс-консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
  },
  2: {
    name: "Дистрибьютор",
    text: "Вы дистрибьютор? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
  },
  3: {
    name: "Интернет-магазин",
    text: "Владеете интернет-магазином? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах и&nbsp;реформации вашего магазина"
  },
  4: {
    name: "Продаете в соц. сетях",
    text: "Вы продаете товары в соц. сетях? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
  },
  5: {
    name: "Продаете на авито",
    text: "Вы продаете товары на Авито? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
  },
  6: {
    name: "Владеете товаром",
    text: "Обладаете ликвидным товаром? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
  },
  7: {
    name: "Уже торгуете на маркетплейсах",
    text: "Уже торгуете на маркетплейсах? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию ваших продаж и&nbsp;увеличению прибыли"
  },
  8: {
    name: "Хотите торговать на маркетплейсах",
    text: "Хотите торгвать на маркетплейсах? Оставьте свои контакты и&nbsp;эксперт проведет для вас консультацию по&nbsp;развитию продаж на&nbsp;маркетплейсах"
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

  if (fields[0].value.length < 16) {
    fields[0].classList.add("error");
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
  document.getElementById("closeThanksPopup").addEventListener("click", function () {
    document.body.style.overflow = "unset";
    document.getElementById("thanks-popup").classList.remove("active");
  });
  document.getElementById("thanks-popup-button").addEventListener("click", function () {
    document.body.style.overflow = "unset";
    document.getElementById("thanks-popup").classList.remove("active");
  });
  var statSwiper = new Swiper("#statSwiper", {
    speed: 500,
    loop: true,
    spaceBetween: 100,
    infinite: true,
    effect: "fade",
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".stats__button-next",
      prevEl: ".stats__button-prev"
    }
  }); // statSwiper.on("transitionStart", async function (swiper) {
  //   let activeSlide = swiper.el.querySelector(".swiper-slide-active");
  //   let nextSlide = swiper.el.querySelector(".swiper-slide-next");
  //   activeSlide.classList.add("animate__animated", "animate__fadeOut");
  //   nextSlide.classList.add(
  //     "animate__animated",
  //     "animate__fadeIn",
  //     "animate__delay-1s"
  //   );
  //   activeSlide.addEventListener("animationend", () => {
  //     activeSlide.classList.remove("animate__animated", "animate__fadeOut");
  //   });
  //   nextSlide.addEventListener("animationend", () => {
  //     nextSlide.classList.remove(
  //       "animate__animated",
  //       "animate__fadeIn",
  //       "animate__delay-1s"
  //     );
  //   });
  // });

  var managerSwiper = new Swiper("#managerSwiper", {
    speed: 500,
    loop: true,
    spaceBetween: 100,
    infinite: true,
    effect: "fade",
    allowTouchMove: false,
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
      nameWrapper.innerHTML = interestPopupText[targetId].name;
      textWrapper.innerHTML = interestPopupText[targetId].text;
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
      nameWrapper.innerHTML = interestPopupText[currentId].name;
      textWrapper.innerHTML = interestPopupText[currentId].text;
      popup.dataset.current = currentId;
    } else {
      nameWrapper.innerHTML = interestPopupText[0].name;
      textWrapper.innerHTML = interestPopupText[0].text;
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
      nameWrapper.innerHTML = interestPopupText[currentId].name;
      textWrapper.innerHTML = interestPopupText[currentId].text;
      popup.dataset.current = currentId;
    } else {
      nameWrapper.innerHTML = interestPopupText[8].name;
      textWrapper.innerHTML = interestPopupText[8].text;
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
        scrub: 10
      },
      left: -1800,
      ease: "linear",
      duration: 3
    });
    gsap.to(".welcome-decor-1", {
      scrollTrigger: {
        trigger: ".welcome",
        scrub: 4
      },
      left: -1800,
      ease: "linear",
      duration: 5
    });
    gsap.to(".welcome-decor-2", {
      scrollTrigger: {
        trigger: ".welcome",
        scrub: 3
      },
      left: 0,
      ease: "linear",
      duration: 5
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
    var hand = document.querySelector(".offer__wrapper__form__hand");
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
    hand.addEventListener("click", function () {
      offerHand.play();
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
    var _btn2 = document.querySelector(".welcome__right-side__header__consult");

    _btn2.addEventListener("click", function (e) {
      e.preventDefault();
      openPopup("basic-popup");
    });
  }
  {
    var btns = document.querySelectorAll(".manager__reasons__item");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("basic-popup");
      });
    });
  }
  {
    var _btns = document.querySelectorAll(".steps__body__item");

    _btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("basic-popup");
      });
    });
  }
  {
    var _btns2 = document.querySelectorAll(".service__card");

    _btns2.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("basic-popup");
      });
    });
  } // Welcome form

  {
    var _btn3 = document.querySelector(".welcome__right-side__form__button");

    var form = document.getElementById("welcome-form");
    var thanks = document.querySelector(".welcome__right-side__thanks-window");

    _btn3.addEventListener("click", function (event) {
      event.preventDefault();
      var result = validation("welcome-form");

      if (result) {
        form.classList.remove("active");
        thanks.classList.add("active");
        form.querySelectorAll(".input-field").forEach(function (el) {
          return el.value = "";
        });
      }
    });

    var thanksBtn = document.getElementById("welcome-thanks-button");
    thanksBtn.addEventListener("click", function () {
      form.classList.add("active");
      thanks.classList.remove("active");
    });
  }
  {
    var _btns3 = document.querySelectorAll(".form-popup__form__submit");

    var thanksPopup = document.getElementById("thanks-popup");

    _btns3.forEach(function (btn) {
      var form = btn.closest("form");
      var overlay = btn.closest(".overlay");
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var result = validation(form);

        if (result) {
          overlay.classList.remove("active");
          thanksPopup.classList.add("active");
        }
      });
    });
  } // Offer form

  {
    var _btn4 = document.querySelector(".offer__wrapper__form__btn");

    var _form = document.getElementById("offer-form");

    var _thanks = document.querySelector(".offer__thanks");

    var bottomNode = document.querySelector(".offer__wrapper__bottom");

    var nameField = _form.querySelector('input[name="name"]');

    var phoneField = _form.querySelector('input[name="phone"]');

    _btn4.addEventListener("click", function (event) {
      event.preventDefault();
      var result = validation(_form);

      if (result) {
        _form.classList.remove("active");

        bottomNode.classList.remove("active");

        _thanks.classList.add("active");
      }
    });

    var offerThanksBtn = document.getElementById("offerThanksButton");
    offerThanksBtn.addEventListener("click", function () {
      _form.classList.add("active");

      bottomNode.classList.add("active");

      _thanks.classList.remove("active"); // nameField.value = "";
      // phoneField.value = "";

    });
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
  {
    var beeTween = gsap.to("#bee", {
      keyframes: [{
        x: 0,
        y: -12,
        duration: 0.8
      }, {
        x: 0,
        y: -25,
        duration: 1.2
      }, {
        x: 0,
        y: -12,
        duration: 0.8
      }, {
        x: 0,
        y: 5,
        duration: 1
      }, {
        x: 0,
        y: 0,
        duration: 0.5
      }],
      ease: "none",
      paused: true
    });
    var bee = document.getElementById("bee");
    bee.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return beeTween.restart();

            case 2:
              _context.next = 4;
              return beeTween.restart();

            case 4:
              _context.next = 6;
              return beeTween.restart();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  }
  {
    var tween = gsap.to(".offer__thanks__icon", {
      keyframes: [{
        x: 0,
        y: -5
      }, {
        x: 0,
        y: 0
      }],
      ease: "none",
      paused: true,
      duration: 0.6
    });

    var _hand = document.querySelector(".offer__thanks__icon");

    _hand.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return tween.restart();

            case 2:
              _context2.next = 4;
              return tween.restart();

            case 4:
              _context2.next = 6;
              return tween.restart();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  }
  {
    var _btns4 = document.querySelectorAll(".steps__head__toggle__btn");

    var wrappers = document.querySelectorAll(".steps__body");

    _btns4.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        _btns4.forEach(function (btn) {
          return btn.classList.remove("active");
        });

        btn.classList.add("active");
        var wrapper = document.getElementById(btn.dataset.id);
        wrappers.forEach(function (wrapper) {
          wrapper.classList.remove("active");
        });
        wrapper.classList.add("active");
      });
    });
  }
});