const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobaile_menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelector('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.contaier');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  mobaile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
  var scroll_positon = window.scrollY;
  if (scroll_positon > 250){
    header.style.backroundColor = '#29323c';

  } else{
    header.style.backroundColor = 'transparent';
  }
});
menu_item.forEach((item) =>{
  item.addEventListener('click', () =>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
  })
  }
)