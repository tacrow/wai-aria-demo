'use strict';

import $ from 'jquery'

const elemDialog = document.querySelector('dialog')
const $btnDialogOpen = $('#js-btn-dialog-open')
const $btnDialogClose = $('#js-btn-dialog-close')

function dialog() {
  $btnDialogOpen.on('click', () => {
    elemDialog.showModal()
  })
  $btnDialogClose.on('click', () => {
    elemDialog.close()
  })
};

const uiDialog = { dialog };

export default uiDialog;