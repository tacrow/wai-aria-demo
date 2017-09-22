'use strict';

import $ from 'jquery'

function nav() {
  const $subNavTrigger = $('.js-sub-nav-trigger');
  const subNavList  = '.js-sub-nav-list',
        $subNavList = $(subNavList);

  $subNavTrigger.on({
    'mouseenter': (e) => {
      $(e.currentTarget).next(subNavList).attr('aria-hidden', false)
    },
    'mouseleave': (e) => {
      $(e.currentTarget).next(subNavList).attr('aria-hidden', true)
    }
  });

  $subNavList.on({
    'mouseenter': (e) => {
      $(e.currentTarget).attr('aria-hidden', false)
    },
    'mouseleave': (e) => {
      $(e.currentTarget).attr('aria-hidden', true)
    }
  });
};

const uiNav = { nav };

export default uiNav;