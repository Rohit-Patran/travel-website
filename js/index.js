let nav_burger = document.querySelector('.nav-burger');
let nav_links = document.querySelector('.nav-links');
let sigin_signup = document.querySelector('.signin-signup');

nav_burger.addEventListener('click',()=>{
    nav_links.classList.toggle('active');
    sigin_signup.classList.toggle('active');
});
    