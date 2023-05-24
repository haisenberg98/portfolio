import { CountUp } from './dist/countUp.min.js';
import './dist/isotope.min.js';
import './dist/jquery.magnific-popup.min.js';

(function ($) {
  'use strict';

  var win = $(window);
  win.on('load', function () {
    //CountUp
    let countYear = new CountUp('countYear', 10, { enableScrollSpy: true });
    let countCustomers = new CountUp('countCustomers', 119, {
      enableScrollSpy: true,
    });
    let countCountDesignItems = new CountUp('countCountDesignItems', 245, {
      enableScrollSpy: true,
    });
    let countClients = new CountUp('countClients', 365, {
      enableScrollSpy: true,
    });

    if (!countYear.error) {
      countYear.start();
    } else {
      console.error(countYear.error);
    }
    if (!countCustomers.error) {
      countCustomers.start();
    } else {
      console.error(countCustomers.error);
    }
    if (!countCountDesignItems.error) {
      countCountDesignItems.start();
    } else {
      console.error(countCountDesignItems.error);
    }
    if (!countClients.error) {
      countClients.start();
    } else {
      console.error(countClients.error);
    }

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    //isotope masonry activation
    var $grid = $('.portfolio-list').isotope({
      itemSelector: '.portfolio-item',
      percentPosition: true,
      getSortData: {
        name: '.name',
        category: '[data-category]',
      },
      // layout mode options
      masonry: {
        columnWidth: '.portfolio-sizer',
      },
    });

    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      console.log(filterValue);
      $grid.isotope({
        filter: filterValue,
      });
    });
  });

  //portfolio magnific popup
  $('.portfolio-item-wrapper .overlay a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  //back to top button
  $('.back-to-top a').click(function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
})(jQuery);
