let dropdown = document.querySelector('.dropdown');
let menu = document.querySelectorAll('.menu');
let caret = document.querySelector('.caret');
let [tab] = menu;
const bodyHtml = document.getElementsByTagName('main')[0];

const menuDown = () => {
  tab.classList.toggle('menu-open');
  caret.classList.toggle('caret-close');
}

  dropdown.addEventListener('click', () => {
    menuDown();
  });

  bodyHtml.addEventListener('click', () => {
    listMenu = tab.classList.contains('menu-open');
    (!listMenu) ? "" : menuDown();
  });
