'use strict';

import $ from 'jquery'

const $inputRequired = $('.js-input-required');

const tooltip = '.js-tooptip',
      $tooltip = $(tooltip);

const $btnSubmit = $('#js-btn-submit');

const length = $inputRequired.length;

function form() {
  $btnSubmit.on('click', () => {
    let num = 0;

    $inputRequired.each((index, element) => {
      if($(element).val() == '') {
        num += 1;
        $(element).next(tooltip).attr('aria-hidden', false);
      }
      /*
       * 最後に送信するかを判断
       */
      if(index == length - 1) {
        if(num == 0) {
          $tooltip.each((index, element) => {
            $(element).attr('aria-hidden', true);
          })
        } else {
          return false;
        }
      }
    })
  })
}

const uiForm = { form };

export default uiForm;