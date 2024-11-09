burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logout= document.querySelector('.logout')
navList= document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
       logout.classList.toggle('v-class')
       navList.classList.toggle('v-class')
       navbar.classList.toggle('h-nav')
       
})