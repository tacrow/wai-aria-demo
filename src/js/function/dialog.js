'use strict';

import $ from 'jquery'

const $elemDialog = $('#js-dialog')
const $elemLayer = $('#js-layer')
const $btnDialogOpen = $('#js-btn-dialog-open')
const $btnDialogClose = $('#js-btn-dialog-close')

function dialog() {
  $btnDialogOpen.on('click', () => {
    $elemDialog.attr({
      'role': 'alertdialog',
      'tabindex': 0,
      'aria-hidden': false,
      'aria-labelledby': 'd-message'
    })
    $elemLayer.attr('aria-hidden', false)
  })
  $elemLayer.on('click', () => {
    $elemDialog.removeAttr('role aria-describedby tabindex').attr('aria-hidden', true)
    $elemLayer.attr('aria-hidden', true)
  })
  $btnDialogClose.on('click', () => {
    $elemDialog.removeAttr('role aria-describedby tabindex').attr('aria-hidden', true)
    $elemLayer.attr('aria-hidden', true)
  })
};

const uiDialog = { dialog };

export default uiDialog;