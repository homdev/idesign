/*
  - File name       : script.js
  - Description     : This file includes all theme js functions.

**/
//= require_tree .
$( document ).on('turbolinks:load', function() {
console.log('log')

  'use strict';

  /* ===============================  Mouse effect  =============================== */

function mousecursor() {
  if ($("body")) {
      const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
      let n, i = 0,
          o = !1;
      window.onmousemove = function (s) {
          o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
      }, $("body").on("mouseenter", "a, #humburger, button, .gear, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
      }), $("body").on("mouseleave", "a, #humburger, .gear, .cursor-pointer", function () {
          $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
      }), e.style.visibility = "visible", t.style.visibility = "visible"
  }
};

$(function () {
  mousecursor();
});
  // LOADER
  $(window).on('load', function () {
    $('#loader_screen').fadeOut();
  });

  // PARALLAX
  $(document).ready(function () {
    var parallaxImage = $('.parallax-mirror .parallax-slider');
        parallaxImage.attr('alt', 'image');
  });

  // SECTIONS BAR
  $('#scrollspy_bar a').on('click', function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  // SCROLL SPY
  // vars
  $(document).ready(function () {
  $('body').scrollspy({
    target: '#scrollspy_bar',
    offset: 0
  });
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  })
})


  // Add class (navbar_open) to (<body></body>)
  $('#humburger').on('click', function () {
    // vars
    var nav_layer = $('.nav_layer'),
        item_1 = $('#item_1'),
        item_2 = $('#item_2'),
        item_3 = $('#item_3'),
        item_4 = $('#item_4'),
        item_5 = $('#item_5'),
        bar_1 = $('#bar_1'),
        bar_2 = $('#bar_2'),
        bar_3 = $('#bar_3');
        nav_layer.toggleClass('layer_act');

    // if condition
    if (nav_layer.hasClass('layer_act')) {
      nav_layer.removeClass('layer_up').addClass('layer_down');
      bar_1.removeClass('anim_out_bar_1').addClass('anim_bar_1');
      bar_2.removeClass('anim_out_bar_2').addClass('anim_bar_2');
      bar_3.removeClass('anim_out_bar_3').addClass('anim_bar_3');
      item_1.removeClass('anim_item_1').addClass('anim_out_item_1');
      item_2.removeClass('anim_item_2').addClass('anim_out_item_2');
      item_3.removeClass('anim_item_3').addClass('anim_out_item_3');
      item_4.removeClass('anim_item_4').addClass('anim_out_item_4');
      item_5.removeClass('anim_item_5').addClass('anim_out_item_5');
    } else {
      bar_1.removeClass('anim_bar_1').addClass('anim_out_bar_1');
      bar_2.removeClass('anim_bar_2').addClass('anim_out_bar_2');
      bar_3.removeClass('anim_bar_3').addClass('anim_out_bar_3');
      nav_layer.removeClass('layer_down').addClass('layer_up');
      item_1.removeClass('anim_out_item_1').addClass('anim_item_1');
      item_2.removeClass('anim_out_item_2').addClass('anim_item_2');
      item_3.removeClass('anim_out_item_3').addClass('anim_item_3');
      item_4.removeClass('anim_out_item_4').addClass('anim_item_4');
      item_5.removeClass('anim_out_item_5').addClass('anim_item_5');
    }
  });

  // Navigation Links
  $('#navigation a').on('click', function () {
    // vars
    var nav_layer = $('.nav_layer'),
        item_1 = $('#item_1'),
        item_2 = $('#item_2'),
        item_3 = $('#item_3'),
        item_4 = $('#item_4'),
        item_5 = $('#item_5'),
        bar_1 = $('#bar_1'),
        bar_2 = $('#bar_2'),
        bar_3 = $('#bar_3');
        nav_layer.toggleClass('layer_act');

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

    if (nav_layer.hasClass('layer_act') == false) {
      bar_1.removeClass('anim_bar_1').addClass('anim_out_bar_1');
      bar_2.removeClass('anim_bar_2').addClass('anim_out_bar_2');
      bar_3.removeClass('anim_bar_3').addClass('anim_out_bar_3');
      nav_layer.removeClass('layer_down').addClass('layer_up');
      item_1.removeClass('anim_out_item_1').addClass('anim_item_1');
      item_2.removeClass('anim_out_item_2').addClass('anim_item_2');
      item_3.removeClass('anim_out_item_3').addClass('anim_item_3');
      item_4.removeClass('anim_out_item_4').addClass('anim_item_4');
      item_5.removeClass('anim_out_item_5').addClass('anim_item_5');
    } else {
      return false;
    }
  });

  // SE IV SLIDER (#se_iv_slider)
  $('#se_iv_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    appendDots: $('#se_vi_slider_dots'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  // Create a custom attribute for gallery images
  $('.gallery_box').each(function () {
    // vars
    var bg_src = $(this).data('img-url');

    $(this).css('background', 'url(' + bg_src + ') center no-repeat');
  });

  // Change modal info
  $('.gallery_box .scale_btn').on('click', function () {
    // vars
    var bg_src = $(this).parent().data('img-url'),
        gallery_image = $('#gallery_modal').find('img'),
        box_title = $(this).parent().find('.info .title').text(),
        gallery_title = $('#gallery_modal').find('.title');
        gallery_image.attr('src', bg_src);
        gallery_title.text(box_title);

    $('#gallery_modal').fadeIn()
  });

  // dismiss (.gallery_modal)
  $('#dismiss_btn').on('click', function () {
    $(this).parents('#gallery_modal').fadeOut();
  });

  // COLOR BOX
  $('#color_box .gear').on('click', function () {
    $(this).parent().toggleClass('clicked');
  });
  $('#color_box .item').on('click', function () {
    var currentDataColor =  $(this).data('color');
    var blueColor     = '#0069ff',
        blueColor2    = '#4cbbb9',
        greenColor    = '#00EBB8',
        greenColor2   = '#a7e9af',
        yellowColor   = '#f4aa4b',
        yellowColor2  = '#ffffff';
    if (currentDataColor == 'blue') {
      $('body').get(0).style.setProperty('--co-1', blueColor);
      $('body').get(0).style.setProperty('--co-2', blueColor2);
    } else if (currentDataColor == 'yellow') {
      $('body').get(0).style.setProperty('--co-1', yellowColor);
      $('body').get(0).style.setProperty('--co-2', yellowColor2);
    } else if (currentDataColor == 'green') {
      $('body').get(0).style.setProperty('--co-1', greenColor);
      $('body').get(0).style.setProperty('--co-2', greenColor2);
    }
  });
  
  $('.se_iii .box p').animate({ scrollTop: $(document).height() }, 3000,  function() {
    $(this).animate({ scrollTop: 0 }, 3000);
 
});
 
});
$(document).ready(function() {
	const $cont = $('.cont');
	const $slider = $('.slider2');
	const $nav = $('.nav');
	const winW = $(window).width();
	const animSpd = 750; // Change also in CSS
	const distOfLetGo = winW * 0.2;
	let curSlide = 1;
	let animation = false;
	let autoScrollVar = true;
	let diff = 0;
	
	// Generating slides
	let arrCities = ['Amsterdam', 'Rome', 'New—York', 'Singapore', 'Prague']; // Change number of slides in CSS also
	let numOfCities = arrCities.length;
	let arrCitiesDivided = [];

	arrCities.map((city) => {
		let length = city.length;
		let letters = Math.floor(length / 4);
		let exp = new RegExp(".{1," + letters + "}", "g");
		
		arrCitiesDivided.push(city.match(exp));
	});
	
	let generateSlide = function(city) {
		let frag1 = $(document.createDocumentFragment());
		let frag2 = $(document.createDocumentFragment());
		const numSlide = arrCities.indexOf(arrCities[city]) + 1;
		const firstLetter = arrCitiesDivided[city][0].charAt(0);

		const $slide =
					$(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
							<div class="slide__text-wrapper slide--${numSlide}__text-wrapper"></div>
						</div>`);

		const letter = 
					$(`<div class="slide__letter slide--${numSlide}__letter">
							${firstLetter}
						</div>`);

		for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
			const text = 
						$(`<div class="slide__text slide__text--${i + 1}">
								${arrCitiesDivided[city][i]}
							</div>`);
			frag1.append(text);
		}

		const navSlide = $(`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`);
		frag2.append(navSlide);
		$nav.append(frag2);

		$slide.find(`.slide--${numSlide}__text-wrapper`).append(letter).append(frag1);
		$slider.append($slide);

		if (arrCities[city].length <= 4) {
			$('.slide--'+ numSlide).find('.slide__text').css("font-size", "12vw");
		}
	};

	for (let i = 0, length = numOfCities; i < length; i++) {
		generateSlide(i);
	}

	$('.nav__slide--1').addClass('nav-active');

	// Navigation
	function bullets(dir) {
		$('.nav__slide--' + curSlide).removeClass('nav-active');
		$('.nav__slide--' + dir).addClass('nav-active');
	}
	
	function timeout() {
		animation = false;
	}
	
	function pagination(direction) {
		animation = true;
		diff = 0;
		$slider.addClass('animation');
		$slider.css({
			'transform': 'translate3d(-' + ((curSlide - direction) * 100) + '%, 0, 0)'
		});
		
		$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
		});
		
		$slider.find('.slide__letter').css({
				'transform': 'translate3d(0, 0, 0)',
		});
		
		$slider.find('.slide__text').css({
			'transform': 'translate3d(0, 0, 0)'
		});
	}
	
	function navigateRight() {
		if (!autoScrollVar) return;
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
		bullets(curSlide + 1);
		curSlide++;
	}
	
	function navigateLeft() {
		if (curSlide <= 1) return;
		pagination(2);
		setTimeout(timeout, animSpd);
		bullets(curSlide - 1);
		curSlide--;
	}

	function toDefault() {
		pagination(1);
		setTimeout(timeout, animSpd);
	}
	
	// Events
	$(document).on('mousedown touchstart', '.slide', function(e) {
		if (animation) return;
		let target = +$(this).attr('data-target');
		let startX = e.pageX || e.originalEvent.touches[0].pageX;
		$slider.removeClass('animation');
		
		$(document).on('mousemove touchmove', function(e) {
			let x = e.pageX || e.originalEvent.touches[0].pageX;
			diff = startX - x;
			if (target === 1 && diff < 0 || target === numOfCities && diff > 0) return;
			
			$slider.css({
				'transform': 'translate3d(-' + ((curSlide - 1) * 100 + (diff / 30)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - 1) * 50 + (diff / 60)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__letter').css({
				'transform': 'translate3d(' +  (diff / 60) + 'vw, 0, 0)',
			});
			
			$slider.find('.slide__text').css({
				'transform': 'translate3d(' + (diff / 15) + 'px, 0, 0)'
			});
		})	
	})
	
	$(document).on('mouseup touchend', function(e) {
		$(document).off('mousemove touchmove');
		
		if (animation) return;
		
		if (diff >= distOfLetGo) {
			navigateRight();
		} else if (diff <= -distOfLetGo) {
			navigateLeft();
		} else {
			toDefault();
		}
	});
	
	$(document).on('click', '.nav__slide:not(.nav-active)', function() {
		let target = +$(this).attr('data-target');
		bullets(target);
		curSlide = target;
		pagination(1);
	});	
	
	$(document).on('click', '.side-nav', function() {
		let target = $(this).attr('data-target');
		
		if (target === 'right') navigateRight();
		if (target === 'left') navigateLeft();
	});
	
	$(document).on('keydown', function(e) {
		if (e.which === 39) navigateRight();
		if (e.which === 37) navigateLeft();
	});
	
	$(document).on('mousewheel DOMMouseScroll', function(e) {
		if (animation) return;
    let delta = e.originalEvent.wheelDelta;
		
    if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
	 	if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
  });
});