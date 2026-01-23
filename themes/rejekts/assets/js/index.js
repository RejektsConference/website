(function () {
  const headerMenuButton = document.querySelector(".header__hamburger");
  const header = document.querySelector(".header");

  headerMenuButton.addEventListener("click", function () {
    header.classList.toggle("header--open");
  });
})();

(function () {
  const finalDate = Date.parse($(".timer").attr("datetime"));

  $(".timer__wrapper").countdown(finalDate, function (event) {
    $(".timer__days").html(event.strftime("%D"));
    $(".timer__hours").html(event.strftime("%H"));
    $(".timer__minutes").html(event.strftime("%M"));
    $(".timer__second").html(event.strftime("%S"));
  });
})();

(function () {

  const DESKTOP_SCREEN_WIDTH = 1024;

  let controller = new ScrollMagic.Controller();

  if ($('.home-page').length) {
    const sectionArray = document.querySelectorAll("#schedule, #sponsor, #conduct");

    sectionArray.forEach(section => {
      new ScrollMagic.Scene({
        triggerElement: "#" + section.getAttribute("id"),
        triggerHook: 0.5,
        duration: section.offsetHeight
      })
        .setClassToggle(
          `a[href="#${section.getAttribute("id")}"]`,
          "menu__link--active"
        )
        .addTo(controller);
    });

    //scrolling navigation onClick
    const menuLinkArray = document.querySelectorAll(".menu__link");

    menuLinkArray.forEach(link => {
      link.addEventListener("click", function (event) {
        const id = this.getAttribute("href").slice(1);

        const activeLink = document.querySelector(".menu__link--active");

        if (activeLink) {
          activeLink.classList.remove("menu__link--active");
        }

        this.classList.add("menu__link--active");

        if (id.length > 0) {
          event.preventDefault();

          const headerHeight = 100;
          const scrollingPosition =
            document.getElementById(id).offsetTop - headerHeight;

          $("body, html").animate(
            {
              scrollTop: scrollingPosition
            },
            1000
          );

          if ($(document).width() < DESKTOP_SCREEN_WIDTH) {
            $(".header").removeClass("header--open");
          }
        }
      });
    });

    // swiper speakers

    let mySwiperSpeakers = null;

    function initSwiper() {
      let screenWidth = $(window).width();
      if (screenWidth < DESKTOP_SCREEN_WIDTH && mySwiperSpeakers === null) {
        mySwiperSpeakers = new Swiper(".speakers__swiper-container", {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          observer: true,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets"
          }
        });
        $(".speakers__swiper-container .swiper-pagination").show();
      } else if (screenWidth >= DESKTOP_SCREEN_WIDTH && mySwiperSpeakers !== null) {
        mySwiperSpeakers.destroy();
        mySwiperSpeakers = null;
        $(".swiper-wrapper").removeAttr("style");
        $(".swiper-slide").removeAttr("style");
        $(".speakers__swiper-container .swiper-pagination").hide();
      }
    }

    initSwiper();

    $(window).on("resize", function () {
      initSwiper();
    });

    document.querySelector(".email").addEventListener("input", function () {
      document.querySelector(".venue__form--button").disabled = !this.validity.valid;
    });

  // mailchimp
  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = "EMAIL";
    ftypes[0] = "email";
  })(jQuery);
  var $mcj = jQuery.noConflict(true);
};

})();

// Popup logic

function popup(popupId, options={}) {
  const { delay=1000, cookieExpire=7, cookieName} = options;

  let modal = document.getElementById(popupId);
  let cookieDate = 0;

  if (cookieName) {
      cookieDate = localStorage.getItem(cookieName);
      if(cookieDate == undefined || cookieDate == null) {
          cookieDate = 0;
      }
  }

  if(cookieDate === 0 || ((new Date()).getTime() - cookieDate) / (1000 * 60 * 60 * 24) > cookieExpire) {
      setTimeout(() => {
          modal.style.display = "block";
          if (cookieExpire > 0) {
            localStorage.setItem(cookieName, (new Date()).getTime());
          }
      }, delay)

      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
  }
}

// Add popups inside this function

$(document).ready(function() {
  popup('podcastPopup', {
      delay: 3000,
      cookieExpire: 1,
      cookieName: 'podcast-popup',
  })
});
