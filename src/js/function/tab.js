'use strict';

import $ from 'jquery'

export default function() {
  const $tab = $('.js-tab')
  const $panel = $('.js-panel')

  $tab.on('click', (e) => {
    e.preventDefault()

    let $target = $(e.currentTarget).children()
    let currentPanel = $(e.currentTarget).children().data('panel')

    /*
     * Tab
     */
    $tab.children().attr({
      'aria-selected': false,
      'tabIndex': '-1'
    })

    $target.attr({
      'aria-selected': true,
      'tabIndex': '0'
    })

    /*
     * Panel
     */
    $panel.attr('aria-hidden', true)
    $('#'+currentPanel).attr('aria-hidden', false)
  })
};