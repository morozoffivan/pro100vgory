document.addEventListener('DOMContentLoaded', ()=>{
    const navBtn = document.querySelector('.nav-btn'),
          nav = document.querySelector('nav'),
          navClose = document.querySelector('.btn-close');

    function hide() {
        nav.classList.toggle('hidden');
        navBtn.classList.toggle('hidden');
        navClose.classList.toggle('hidden');
    }

    navBtn.addEventListener('click', ()=>{
        hide();
    });
    navClose.addEventListener('click', ()=>{
        hide();
    });
    
})