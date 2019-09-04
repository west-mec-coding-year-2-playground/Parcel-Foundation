//node_modules/foundation-sites/scss/foundation.scss

import '../scss/app.scss';

import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import {Foundation} from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
// import './lib/foundation-explicit-pieces';


$(document).foundation();


import data from '../../../src/data/nav.yml/';
console.log(data);
