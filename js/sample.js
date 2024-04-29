document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var animatedElements = document.querySelectorAll(".animated-element");

  function fadeInUp() {
    animatedElements.forEach(function (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (elementPosition < screenHeight * 0.9) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  }

  window.addEventListener("scroll", fadeInUp);
});

document.addEventListener("DOMContentLoaded", function () {
  var zoomElements = document.querySelectorAll(".zoom-in");

  function zoomIn() {
    zoomElements.forEach(function (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (elementPosition < screenHeight * 0.9) {
        element.classList.add("zoom-in");
      } else {
        element.classList.remove("zoom-in");
      }
    });
  }

  window.addEventListener("scroll", zoomIn);
});

document.addEventListener("DOMContentLoaded", function () {
  var slideInLeftElements = document.querySelectorAll(".slide-in-left");

  function slideInLeft() {
    slideInLeftElements.forEach(function (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (elementPosition < screenHeight * 0.9) {
        element.classList.add("slide-in-left");
      } else {
        element.classList.remove("slide-in-left");
      }
    });
  }

  window.addEventListener("scroll", slideInLeft);
});

document.addEventListener("DOMContentLoaded", function () {
  var slideInRightElements = document.querySelectorAll(".slide-in-right");

  function slideInRight() {
    slideInRightElements.forEach(function (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (elementPosition < screenHeight * 0.9) {
        element.classList.add("slide-in-right");
      } else {
        element.classList.remove("slide-in-right");
      }
    });
  }

  window.addEventListener("scroll", slideInRight);
});

document.addEventListener("DOMContentLoaded", function () {
  var zoomOutElements = document.querySelectorAll(".zoom-out");

  function zoomOut() {
    zoomOutElements.forEach(function (element) {
      var elementPosition = element.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;

      if (elementPosition < screenHeight * 0.9) {
        element.classList.add("zoom-out");
      } else {
        element.classList.remove("zoom-out");
      }
    });
  }

  window.addEventListener("scroll", zoomOut);
});
