document.addEventListener('DOMContentLoaded', function () {

  function mainSlider(e) {
    const arrowLeft = document.querySelector('.custom-slide__arrow--prev');
    const arrowRight = document.querySelector('.custom-slide__arrow--next');
    var splide = new Splide('.main-slider', {
      type: 'loop',
      perPage: 1,
      pagination: false,
      autoplay: true,
      arrows: false,
    });
    const goToSlide = target => e => {
      splide.go(target);
    }
    const goBackSlide = target => e => {
      splide.go(target);
    }
    arrowRight.addEventListener('click', goToSlide('>'));
    arrowLeft.addEventListener('click', goBackSlide('<'));
    splide.mount();
  }
  mainSlider();

  function timer1() {
    var timerElement = document.querySelector(".timer");
    var timer = timerElement.textContent.split(":");
    var hours = parseInt(timer[0], 10);
    var minutes = parseInt(timer[1], 10);
    var seconds = parseInt(timer[2], 10);

    var interval = setInterval(function () {
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(interval);
          }
        }
      }
      timerElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    }, 1000);

    function pad(value) {
      return value < 10 ? "0" + value : value;
    }
  };
  timer1();

  function accordion() {
    const btn = document.querySelectorAll('.accordion__header');

    btn.forEach(item => {
      item.addEventListener('click', function () {
        let currentParent = this.closest('.accordion__header');
        currentParent.classList.toggle('active');
      });
    });

  };
  accordion();

  function openFooter() {
    const text = document.querySelector('.footer__info_text');
    const btn = document.querySelector('.footer__info_btn');

    btn.addEventListener('click', function () {
      if (text.classList.contains('show')) {
        btn.innerHTML = "Read more";
        text.classList.remove('show');
      } else {
        btn.innerHTML = "Read less";
        text.classList.add('show');
      }
    });

  };
  openFooter();

});
