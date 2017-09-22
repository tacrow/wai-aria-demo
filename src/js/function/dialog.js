'use strict';

import $ from 'jquery'

const dialog = document.querySelector('dialog')
const $btnDialogOpen = $('#js-btn-dialog-open')
const $btnDialogClose = $('#js-btn-dialog-close')

function dialog() {
  $btnDialogOpen.on('click', () => {
    dialog.showModal()
  }, false)
  $btnDialogClose.on('click', () => {
    dialog.close()
  }, false)
};

const uiDialog = { dialog };

export default uiDialog;