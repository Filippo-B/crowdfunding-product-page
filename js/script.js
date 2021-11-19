// const MicroModal = require('micromodal'); // commonjs module

/* ========================== § DOM ELEMENTS === */
const bookmarkBtn = document.getElementById('bookmark-btn');

const headerNavContainer = document.getElementById('header-nav-container');
const hamburgerBtn = document.getElementById('hamburger-btn');
const headerNav = document.getElementById('header-nav');
const modalCloseBtn = document.getElementsByClassName('modal__close');

const pledgeEl = document.getElementsByClassName('pledge--check');
const pledgeCheckbox = document.getElementsByClassName('pledge__checkbox');
/* ========================== § BOOKMARK BUTTON === */
bookmarkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookmarkBtn.classList.toggle('bookmarked');
});

/* ========================== § HEADER NAV === */
hamburgerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  headerNavContainer.classList.toggle('open');

  headerNav.classList.toggle('focus-in');
});

/* ========================== § MODAL === */
// eslint-disable-next-line no-undef
MicroModal.init({
  disableScroll: true,
});

// CLOSE BTN
modalCloseBtn.array.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

// EXPAND
function makeInactive() {
  Array.from(pledgeEl).forEach((pledge) => {
    pledge.classList.remove('checked');
  });
}

function makeActive(checkbox) {
  checkbox.closest('.pledge--check').classList.add('checked');
}
