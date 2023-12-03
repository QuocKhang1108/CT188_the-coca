const toggleBtn = document.querySelector('.header-nav__bars')
const toggleBtnIcon = document.querySelector('.header-nav__bars i')
const dropDownMenu = document.querySelector('.dropdown_nav')

toggleBtn.onclick = function(){
dropDownMenu.classList.toggle('open')
const isOpen = dropDownMenu.classList.contains('open')

     toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
}
    