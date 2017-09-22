'use strict';

import $ from 'jquery'

function hideDrawer(target, btn, layer) {
  target.attr('aria-hidden', true)
  btn.attr('aria-expanded', false)
  layer.attr('aria-hidden', true)
};

function showDrawer(target, btn, layer) {
  target.attr('aria-hidden', false)
  btn.attr('aria-expanded', true)
  layer.attr('aria-hidden', false)
};

const $drawer = $('#js-drawer')
const $btnDrawer = $('#js-btn-drawer')
const $blackLayer = $('#js-black-layer')

const drawer = () => {
  let switchFlg = false

  $btnDrawer.on('click', () => {
    switchFlg ? hideDrawer($drawer, $btnDrawer, $blackLayer) : showDrawer($drawer, $btnDrawer, $blackLayer);
    switchFlg = !switchFlg;
  })

  $blackLayer.on('click', () => {
    hideDrawer($drawer, $btnDrawer, $blackLayer)
    switchFlg = !switchFlg;
  })
};

const uiDrawer = { drawer };

export default uiDrawer;