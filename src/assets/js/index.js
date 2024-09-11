'use strict';

import pageAnchor from './utils/pageAnchor'
import smoothscroll from 'smoothscroll-polyfill'

window.addEventListener('DOMContentLoaded',() => {
  new Main();
});

class Main {
  constructor() {
    new pageAnchor();

    // polyfill
    smoothscroll.polyfill();
  }
}