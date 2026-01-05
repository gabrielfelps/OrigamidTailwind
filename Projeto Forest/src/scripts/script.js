import Today from './modules/weekday.js';

const day = document.querySelector('[data-day]');

const today = new Today(day);
today.init();
