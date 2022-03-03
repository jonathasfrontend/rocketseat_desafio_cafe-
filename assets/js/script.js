const menuBuguer = document.getElementById('menu-buguer');
let list = document.querySelectorAll('.list');

menuBuguer.addEventListener('click', function(e) {
    var menu = document.getElementById('menu-nav-mobile');
    e.preventDefault();
    menuBuguer.classList.toggle('active');
    menu.classList.toggle('activeMenu');
})
