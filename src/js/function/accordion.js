'use strict';

import $ from 'jquery'

function accordion() {
  const $accordionTitle = $('.js-accordion-title')

  $accordionTitle.on('click', (e) => {
    let $this = $(e.currentTarget)
    let state = $this.attr('aria-expanded') == 'false' ? true : false

    $this.attr('aria-expanded', state)
    $this.next().attr('aria-hidden', !state)
  })
};

const uiAccordion = { accordion };

export default uiAccordion;