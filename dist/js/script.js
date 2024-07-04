(function ($) {
  "use strict";

  /*================================ Init Function on window load ==================================*/
  $(window).on("load", function () {
    preloaderInit();
    followCursor();
    initGSAP();
    accordionInit();
    stickyHeader();
  });

  /*=========== Follow Cursor ===========*/
  function followCursor() {
    var cursor = document.querySelector(".cursor"),
      cursorScale = document.querySelectorAll(".cursor-scale"),
      mouseX = 0,
      mouseY = 0;

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        left: mouseX,
        top: mouseY,
        duration: 0.3,
      });
    });

    window.addEventListener("mouseover", function (e) {
      gsap.set(cursor, {
        css: {
          opacity: 1,
        },
      });
    });

    cursorScale.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
      });

      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
      });
    });
  }

  /*=========== Preloader ===========*/
  function preloaderInit() {
    $(".preloader").remove();
  }

  /*=========== Slicknav ===========*/
  $("#menu").slicknav({
    closeOnClick: true,
  });

  /*=========== Sticky Header ===========*/
  function stickyHeader() {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      header.classList.toggle("stickyMenu", window.scrollY > 0);
    });
  }

  /*=========== One Page Scroll Site Navigation ===========*/
  $(".scroll").onePgaeNav({
    wrapper: "#onepage-nav",
  });

  $(".scroll-div").onePgaeNav({
    wrapper: "#onepage-nav-two",
  });

  /*=========== GSAP animation ===========*/
  gsap.defaults({ duration: 0.6 });

  const tl = gsap.timeline();
  tl.pause();
  tl.from(".large-menu a", {
    x: 15,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from(
    ".hero-content > *",
    {
      y: 100,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 0.05,
    },
    0
  );
  tl.from(".hero-content > h4 img", {
    x: -30,
    opacity: 0,
    ease: "expo.inOut",
  });

  const tl2 = gsap.timeline();
  tl2.pause();
  tl2.from(".hero-right-content", {
    rotation: 10,
    opacity: 0,
    ease: "power1.inOut",
  });
  tl2.from(
    ".hero-right-content > div",
    {
      scale: 0.9,
      opacity: 0,
      ease: "elastic.inOut",
    },
    0.5
  );
  tl2.from(".avatar", {
    opacity: 0,
    ease: "power1.inOut",
    // scale: 0.5,
    rotation: 2,
  });
  tl2.from(
    ".hero-right-content > img",
    {
      y: 5,
      opacity: 0,
      ease: "power2.inOut",
      stagger: 0.15,
    },
    0.5
  );
  tl2.from(
    [".hero-right-content a", ".hero-right-content p"],
    {
      x: 10,
      opacity: 0,
      rotation: 10,
      ease: "expo.inOut",
      stagger: 0.1,
    },
    1
  );

  function initGSAP() {
    if (window.innerWidth > 768) {
      tl.play();
      tl2.play();
    }
  }

  /*=========== Accordion ===========*/
  function accordionInit() {
    $(".accordion-header").on("click", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle();
      $(".accordion-header").not(this).removeClass("active").next().slideUp();
    });
  }

  /*=========== Magnific Popup ===========*/
  $(".play").magnificPopup({
    type: "iframe",
  });
})(jQuery);

// Swiper slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
