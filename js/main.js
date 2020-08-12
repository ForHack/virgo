$(function() {


	$('.banner__slider').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: 3000
    })

    $('.bestsellers__slider').slick({
        slidesToShow: 4,
        arrows: true,
        nextArrow: `<button type='button' class='slick-next'><svg xmlns="http://www.w3.org/2000/svg" width="26.91" height="8.073" viewBox="0 0 26.91 8.073">
        <g id="Стрелка" transform="translate(0 0)">
          <line id="Линия_8" data-name="Линия 8" x2="23.125" transform="translate(0 4.037)" />
          <path id="Многоугольник_1" data-name="Многоугольник 1" d="M4.037,0,8.073,6.094H0Z" transform="translate(26.91 0) rotate(90)" />
        </g>
      </svg>
      </button>`,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })

    $('.instagram__slider').slick({
        slidesToShow: 5,
        arrows: true,
        nextArrow: `<button type='button' class='slick-next'><svg xmlns="http://www.w3.org/2000/svg" width="26.91" height="8.073" viewBox="0 0 26.91 8.073">
        <g id="Стрелка" transform="translate(0 0)">
          <line id="Линия_8" data-name="Линия 8" x2="23.125" transform="translate(0 4.037)" />
          <path id="Многоугольник_1" data-name="Многоугольник 1" d="M4.037,0,8.073,6.094H0Z" transform="translate(26.91 0) rotate(90)" />
        </g>
      </svg>
      </button>`,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    })

    $('.production__slider').slick({
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        },
      ]
    })
   
   $('.footer__nav-title').on('click', function() {
    $('.footer__nav-wrap').toggleClass('expand')
    $(this).toggleClass('rotate')
   })

});


// Логин
const parent_original = document.querySelector('.header__btns');
const parent = document.querySelector('.header__nav');
const item = document.querySelector('.login');

window.addEventListener('resize', move);
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1200) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[0]);
			item.classList.remove('done');
		}
	}
}

move();

// Язык
const parent_original_lang = document.querySelector('.header__actions ');
const parent_lang = document.querySelector('.header__list');
const item_lang = document.querySelector('.header__langs');

window.addEventListener('resize', moveLanguage);
function moveLanguage(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1200) {
		if (!item_lang.classList.contains('done')) {
			parent_lang.insertBefore(item_lang, parent_lang.children[1]);
			item_lang.classList.add('done');
		}
	} else {
		if (item_lang.classList.contains('done')) {
			parent_original_lang.insertBefore(item_lang, parent_original_lang.children[1]);
			item_lang.classList.remove('done');
		}
	}
}

moveLanguage();

// Футер панель
const footer_parent_original = document.querySelector('.footer__form');
const footer_parent = document.querySelector('.footer__column-5');
const footer_item = document.querySelector('.footer__form-wrap');

window.addEventListener('resize', moveFooterBlock);
function moveFooterBlock(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1200) {
		if (!footer_item.classList.contains('done')) {
			footer_parent.insertBefore(footer_item, footer_parent.children[0]);
			footer_item.classList.add('done');
		}
	} else {
		if (footer_item.classList.contains('done')) {
			footer_parent_original.insertBefore(footer_item, footer_parent_original.children[0]);
			footer_item.classList.remove('done');
		}
	}
}


moveFooterBlock();