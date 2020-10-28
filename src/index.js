import './styles.css';
import menu from './menu.json';

import menuTemplate from '../templates/menu-cards.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

// menu

const menuItems = document.querySelector('.js-menu');
const body = document.querySelector('body');

const markup = menuTemplate(menu);

menuItems.insertAdjacentHTML('beforeend', markup);

// BODY THEME

const themeSwitchToggle = document.querySelector('.theme-switch__toggle');

themeSwitchToggle.addEventListener('change', onChangeSwitch);
themeSwitchToggle.addEventListener('change', setLocalStorage);
// document.addEventListener('themeLoaded', onGetThemeLocalStorage); 

function onChangeSwitch (evt) {
    if (themeSwitchToggle.checked){
        setDarkTheme()
    } else {        
        setLightTheme()
    }
}

function setDarkTheme() {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }

// Local Storage

// function onLocalStorage(evt) {
//     if (themeSwitchToggle.checked) {
//         localStorage.setItem('theme', Theme.DARK);
//     } else {
//         localStorage.setItem('theme', Theme.LIGHT);
//     }
// }
 
// function onGetThemeLocalStorage() {
//     const themeInLocalStrg = localStorage.getItem('theme');
//     if (themeInLocalStrg === Theme.DARK) {
//       body.classList.add(Theme.DARK);
//       themeSwitchToggle.checked = true;
//     }
//   } 

document.addEventListener('DOMContentLoaded', onSwitchToggleDrag);

function onSwitchElClick() {
  if (refs.switchEl.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setLocalStorage(event) {
  if (themeSwitchToggle.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function onSwitchToggleDrag() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    body.classList.add(Theme.DARK);
    themeSwitchToggle.checked = true;
  }
}

