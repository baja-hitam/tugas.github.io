let dropdown = document.querySelector('.dropdown');
let menu = document.querySelectorAll('.menu');
let caret = document.querySelector('.caret');
let [tab] = menu;

  dropdown.addEventListener('click', () => {
    tab.classList.toggle('menu-open');
    caret.classList.toggle('caret-close');
  })
