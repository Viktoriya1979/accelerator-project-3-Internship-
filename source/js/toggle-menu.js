import { scrollController } from './utils.js';

const bodyElement = document.querySelector('.page__body');
const navMainElement = bodyElement.querySelector('.main-navigation');
const navButtonToggleElement = navMainElement.querySelector('.main-navigation__button-toggle');
const navLinkElements = navMainElement.querySelectorAll('.main-navigation__link');
const navSubmenuElements = navMainElement.querySelectorAll('.main-navigation__link--submenu');
const navSubmenuLinkElements = navMainElement.querySelectorAll('.main-navigation__submenu-link');

const onToggleMenuButton = () => {
  if (navMainElement.classList.contains('main-navigation--closed')) {
    setTimeout(() => {
      navMainElement.classList.remove('main-navigation--closed');
      navMainElement.classList.add('main-navigation--opened');
      navButtonToggleElement.classList.add('main-navigation__button-toggle--active', 'button--blue-bg');
      bodyElement.classList.add('page__body--lock-overlay');
    }, 200);
    scrollController.disabledScroll();
    document.body.addEventListener('click', onBodyClick);
  } else {
    setTimeout(() => {
      navMainElement.classList.remove('main-navigation--opened');
      navMainElement.classList.add('main-navigation--closed');
      navButtonToggleElement.classList.remove('main-navigation__button-toggle--active', 'button--blue-bg');
      bodyElement.classList.remove('page__body--lock-overlay');
      navSubmenuElements.forEach((submenu) => {
        submenu.classList.remove('main-navigation__link--submenu-opened');
      });
    }, 200);
    scrollController.enabledScroll();
    document.body.removeEventListener('click', onBodyClick);
  }
};

const onClickMenuLink = () => {
  setTimeout(() => {
    navMainElement.classList.remove('main-navigation--opened');
    navMainElement.classList.add('main-navigation--closed');
    navButtonToggleElement.classList.remove('main-navigation__button-toggle--active', 'button--blue-bg');
    bodyElement.classList.remove('page__body--lock-overlay');
    navSubmenuElements.forEach((submenu) => {
      submenu.classList.remove('main-navigation__link--submenu-opened');
    });
  }, 500);
  scrollController.enabledScroll();
};

let intervalId;

const toggleMenu = () => {
  navMainElement.classList.add('main-navigation--closed');
  navButtonToggleElement.addEventListener('click', () => {
    onToggleMenuButton();
  });

  navLinkElements.forEach((link) => {
    link.addEventListener('click', (event) => {
      const currentNavLinkElement = event.target;
      if (!currentNavLinkElement.classList.contains('main-navigation__link--submenu')) {
        onClickMenuLink();
        document.body.removeEventListener('click', onBodyClick);
      } else {
        if (!currentNavLinkElement.classList.contains('main-navigation__link--submenu-opened')) {
          intervalId = setTimeout(() => {
            currentNavLinkElement.classList.add('main-navigation__link--submenu-opened');
          }, 0);
        }

        if (currentNavLinkElement.classList.contains('main-navigation__link--submenu-opened')) {
          clearTimeout(intervalId);
          intervalId = setTimeout(() => {
            currentNavLinkElement.classList.remove('main-navigation__link--submenu-opened');
          }, 0);
        }
        navSubmenuLinkElements.forEach((submenuLink) => {
          submenuLink.addEventListener('click', () => {
            onClickMenuLink();
            document.body.removeEventListener('click', onBodyClick);
          });
        });
      }
    });
  });
};

function onBodyClick(event) {
  if (event.target.classList.contains('page__body')) {
    setTimeout(() => {
      navMainElement.classList.remove('main-navigation--opened');
      navMainElement.classList.add('main-navigation--closed');
      navButtonToggleElement.classList.remove('main-navigation__button-toggle--active', 'button--blue-bg');
      bodyElement.classList.remove('page__body--lock-overlay');
      navSubmenuElements.forEach((submenu) => {
        submenu.classList.remove('main-navigation__link--submenu-opened');
      });
    }, 200);
    scrollController.enabledScroll();
    document.body.removeEventListener('click', onBodyClick);
  }
}

export { toggleMenu };
