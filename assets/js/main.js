/***************************************************
==================== JS INDEX ======================
****************************************************
// Data js
// Search Bar Js
// Sticky js
// Mobile Menu Js
// Hamburger Menu Js
// Nice Select
// Type Js
// Fun Fact Js
// Video Js
// Rating Js
// Service Slider Js
// Portfolio Slider Js
// Brand Slider Js
// Thumb Slider 2 Js
// Hero Js
// Team Slider Js
// Project Slider Js
// Blog Slider Js
// Skillbar Js
// Popup Js
// Clone function Js
// Vertical effect Js
// Grid Js

****************************************************/

(function ($) {
   "use strict";

   // Data js
   $("[data-bg-image]").each(function () {
      var $this = $(this),
         $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
   });

   // Preloader js
   function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
         let startWidth = 0;
         const endWidth = current.dataset.size;
         const interval = setInterval(frame, 20);
         function frame() {
            if (startWidth >= endWidth) {
               clearInterval(interval);
            } else {
               startWidth++;
               current.style.width = `${endWidth}%`;
               current.firstElementChild.innerText = `${startWidth}%`;
            }
         }
      });
   }
   setTimeout(loading, 1000);
   $(window).on("load", function () {
      const preloader = $(".preloader");
      preloader.delay(600).fadeOut();
   });
   $(".preloader .tj-cancel-btn").on("click", function () {
      $(".preloader").fadeOut();
   });

   // Search Bar Js
   $(".header-search .search").on("click", function () {
      $(".search_popup").addClass("search-opened");
      $(".search-popup-overlay").addClass("search-popup-overlay-open");
   });
   $(".search_close_btn").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(".search-popup-overlay").removeClass("search-popup-overlay-open");
   });
   $(".search-popup-overlay").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(this).removeClass("search-popup-overlay-open");
   });

   // Sticky js
   $(window).scroll(function () {
      var Width = $(document).width();
      if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   // Mobile Menu Js
   $(".main-mobile-menu").meanmenu({
      meanMenuContainer: ".mobile_menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
   });
   $(".menu-bar").on("click", function () {
      $(".menu-bar").addClass("menu-bar-toggeled");
   });

   // Hamburger Menu Js
   $(".menu-bar").on("click", function () {
      $(".hamburger-area").addClass("opened");
      $(".body-overlay").addClass("opened");
   });
   $(".hamburger_close_btn").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });
   $(".body-overlay").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".offset_canvas").removeClass("show");
      $(".menu-bar").removeClass("menu-bar-toggeled");
   });

   // Nice Select
   if ($("select").length > 0) {
      $("select").niceSelect();
   }

   // Type Js
   if ($(".type-text .text").length > 0) {
      var typed = new Typed(".type-text .text", {
         strings: ["Services", "Factory", "Expert"],
         loop: true,
         typeSpeed: 100,
         startDelay: 0,
         backSpeed: 60,
         backDelay: 2000,
         showCursor: false,
         cursorChar: "",
         autoInsertCss: false,
      });
   }

   // Fun Fact Js
   if ($(".odometer").length > 0) {
      $(".odometer").waypoint(
         function () {
            var odo = $(".odometer");
            odo.each(function () {
               var countNumber = $(this).attr("data-count");
               $(this).html(countNumber);
            });
         },
         {
            offset: "80%",
            triggerOnce: true,
         }
      );
   }

   // Video Js
   var popupvideos = $(".popup-videos-button");
   if (popupvideos.length) {
      $(".popup-videos-button").magnificPopup({
         disableOn: 10,
         type: "iframe",
         mainClass: "mfp-fade",
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false,
      });
   }

   // Rating Js
   if ($(".fill-ratings span").length > 0) {
      var star_rating_width = $(".fill-ratings span").width();
      $(".star-ratings").width(star_rating_width);
   }

   // Service Slider Js
   if ($(".tj-service-slider").length > 0) {
      var service = new Swiper(".tj-service-slider", {
         slidesPerView: 3,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 8500,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Service Slider Js
   if ($(".tj-service-slider2").length > 0) {
      var service = new Swiper(".tj-service-slider2", {
         slidesPerView: 3,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 8500,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Portfolio Slider Js
   if ($(".tj-portfolio-slider").length > 0) {
      var portfolio = new Swiper(".tj-portfolio-slider", {
         slidesPerView: 4,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 2,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Brand Slider Js
   if ($(".tj-brand-slider").length > 0) {
      var brand = new Swiper(".tj-brand-slider", {
         slidesPerView: 5,
         spaceBetween: 100,
         loop: false,
         breakpoints: {
            320: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 50,
            },
            640: {
               slidesPerView: 3,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 50,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 5,
            },
         },
      });
   }

   // Testimonial Slider js
   if ($(".tj-testimonial-slider").length > 0) {
      var testimonial = new Swiper(".tj-testimonial-slider", {
         slidesPerView: 2,
         spaceBetween: 50,
         autoplay: {
            delay: 8500,
         },
         navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
         },
         loop: true,
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 2,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Thumb Slider 2 Js
   if ($(".testimonial-auother-slider").length > 0) {
      var testimonial_auothers = new Swiper(".testimonial-auother-slider", {
         spaceBetween: 0,
         slidesPerView: 1,
         allowTouchMove: false,
      });
   }
   if ($(".thumb-content-slider").length > 0) {
      var testimonial = new Swiper(".thumb-content-slider", {
         spaceBetween: 0,
         slidesPerView: 1,
         navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
         },
         thumbs: {
            swiper: testimonial_auothers,
         },
         loop: false,
      });
   }

   // Hero Js
   if ($(".hero-slider").length > 0) {
      var hero = new Swiper(".hero-slider", {
         speed: 3500,
         loop: true,
         slidesPerView: 1,
         autoplay: true,
         effect: "fade",
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
               return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
         },
      });
   }

   // Hero Js
   if ($(".hero-slider2").length > 0) {
      var hero = new Swiper(".hero-slider2", {
         speed: 3500,
         loop: true,
         slidesPerView: 1,
         autoplay: true,
         effect: "fade",
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
      });
   }

   // Team Slider Js
   if ($(".tj-team-slider").length > 0) {
      var team = new Swiper(".tj-team-slider", {
         slidesPerView: 4,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 1500,
         },
         navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 2,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Team Slider Js
   if ($(".tj-team-slider2").length > 0) {
      var team = new Swiper(".tj-team-slider2", {
         slidesPerView: 3,
         spaceBetween: 50,
         loop: true,
         autoplay: {
            delay: 1500,
         },
         navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Project Slider Js
   if ($(".tj-project-wrapper-slider").length > 0) {
      var project = new Swiper(".tj-project-wrapper-slider", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
      });
   }

   // Blog Slider Js
   if ($(".tj-blog-wrapper-slider").length > 0) {
      var blog = new Swiper(".tj-blog-wrapper-slider", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
      });
   }

   // Skillbar Js
   if ($(".skills").length > 0) {
      $(document).ready(function () {
         startAnimation();
         function startAnimation() {
            jQuery(".skills").each(function () {
               jQuery(this)
                  .find(".skillbar")
                  .animate(
                     {
                        width: jQuery(this).attr("data-percent"),
                     },
                     4000
                  );
            });
         }
      });
   }

   // Grid Js
   $(".grid").imagesLoaded(function () {
      var $grid = $(".grid").isotope({
         itemSelector: ".grid-item",
         percentPosition: true,
         masonry: {
            columnWidth: ".grid-item",
         },
      });
   });

   // Popup Js
   if ($(".popup-gallery").length > 0) {
      $(document).ready(function () {
         $(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            removalDelay: 300,
            mainClass: "mfp-fade",
            gallery: {
               enabled: true,
            },
         });
      });
   }

   // Clone function Js
   $.fn.duplicate = function (count, cloneEvents, callback) {
      var stack = [],
         el;
      while (count--) {
         el = this.clone(cloneEvents);
         callback && callback.call(el);
         stack.push(el.get()[0]);
      }
      return this.pushStack(stack);
   };

   // Vertical effect Js
   $("<div class='vertical-effect'></div>").duplicate(7).appendTo(".vertical-lines-wrapper");
})(jQuery);
