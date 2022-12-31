const menuIcon=document.querySelector('.menu-icon');
const navBar=document.querySelector('.navbar');
menuIcon.onclick=function(){
    navBar.classList.toggle('close');
    menuIcon.classList.toggle('active');
}