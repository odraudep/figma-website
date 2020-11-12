// hamburguer menu
const menuCheck = document.querySelector('#header-menu-checkbox')
const menuCont = document.querySelector('#header-menu_container')
const menuBg = document.querySelector('#menubg')

menuCheck.addEventListener('click', () => {
  if (menuCheck.checked) {
    menuCont.classList.add('header-menu')
    menuBg.classList.add('body_open_menu')
    document.body.classList.add('hidden')
  } else {
    menuCont.classList.remove('header-menu')
    menuBg.classList.remove('body_open_menu')
    document.body.classList.remove('hidden')
  }
})

menuBg.addEventListener('click', () => {
  menuCont.classList.remove('header-menu')
  menuBg.classList.remove('body_open_menu')

  menuCheck.checked = false
})

// scrool to top
const scroolToTopBtn = document.querySelector('#btntop')
const rootElement = document.documentElement

scroolToTopBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
