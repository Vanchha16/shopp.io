const btntoggle = document.getElementById('btntoggle')

const mobileNavbar = document.getElementById('mobile-navbar');

btntoggle.onclick = function(){
    mobileNavbar.classList.toggle('active');
}