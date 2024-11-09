const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

     navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
     })
     navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
     })
      

const loginBtn = document.getElementById('login-btn')
const loginClose = document.getElementById('login-close')
const signupclose = document.getElementById('signup-close')

      loginBtn.addEventListener('click', () =>{
         login.classList.add('show-login')
         login1.classList.add('show-login1')
         })
      loginClose.addEventListener('click', () =>{
         login.classList.remove('show-login')
      })
      signupclose.addEventListener('click', () =>{
         login1.classList.remove('show-login1')
      })
      
      const login =document.querySelector('.login');
      const login1 =document.querySelector('.login1');
      const loginLink =document.querySelector('.login-link');
      const signupLink =document.querySelector('.signup-link');
      
               signupLink.addEventListener('click',() =>{
               login1.classList.add('active')
               login.classList.add('active1')
            })
               loginLink.addEventListener('click',() =>{
               login1.classList.remove('active')
               login.classList.remove('active1')
            })

            const navList= document.getElementById('nav-list')
            const navItem1= document.getElementById('nav-item1')
            const navItem2 = document.getElementById('nav-item2')
            const heading= document.getElementById('heading')
            const about = document.getElementById('about')
            
            
                  navItem2.addEventListener('click', () =>{
                     heading.classList.add('show-appear')
                     about.classList.add('show-appear1')
                     })
                  navItem1.addEventListener('click',() =>{
                  
                     heading.classList.remove('show-appear')
                     about.classList.remove('show-appear1')
                  })
       


const eyeicon = document.getElementById('eyeicon')
const password = document.getElementById('password')

      eyeicon.addEventListener('click', () =>{
         if(password.type == "password"){
            password.type = "text";
            eyeicon.src ="view.png"
         }
         else{
            password.type = "password";
            eyeicon.src = "hidden.png"
         }
      })


const eyeicon1 = document.getElementById('eyeicon1')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
      
            eyeicon1.addEventListener('click', () =>{
               if(password1.type == "password",
                  password2.type == "password"){
                  password2.type = "text"
                  password1.type = "text";
                  eyeicon1.src ="view.png"
               }
               else{
                  password2.type = "password"
                  password1.type = "password";
                  eyeicon1.src = "hidden.png"
               }
            })
