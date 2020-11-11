const menuCheck = document.querySelector('#header-menu-checkbox')
const menuCont = document.querySelector('#header-menu_container')
const menuBg = document.querySelector('#menubg')

menuCheck.addEventListener('click', () => {
  if (menuCheck.checked) {
    menuCont.classList.add('header-menu')
    menuBg.classList.add('body_open_menu')
  } else {
    menuCont.classList.remove('header-menu')
    menuBg.classList.remove('body_open_menu')
  }
})

menuBg.addEventListener('click', () => {
    menuCont.classList.remove('header-menu')
    menuBg.classList.remove('body_open_menu')

    menuCheck.checked = false
})
