const toggler = document.querySelector('.navBarToggler');
const sideBar = document.querySelector('.top');

toggler.onclick = function () {
    toggler.classList.toggle('openMenu');
    sideBar.classList.toggle('animate');
};

// let prevScrollpos = window.scrollY;
// window.addEventListener('scroll', function(){
//     let currentScrollPos  = window.scrollY;
//     if(prevScrollpos > currentScrollPos){
//         document.getElementById('nav').style.display = 'block';
//     } else {
//         document.getElementById('nav').style.display = 'none';
//     }
//     prevScrollpos = currentScrollPos;
// });