document.querySelector('.header__burger').addEventListener('click',()=>{
   document.querySelector('.header__burger').classList.toggle('active')
   document.querySelector('.nav').classList.toggle('active')
   document.querySelector('body').classList.toggle('lock')
})