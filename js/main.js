const btn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')

btn.addEventListener('click', function(){
    nav.classList.toggle('menu-open')
})
