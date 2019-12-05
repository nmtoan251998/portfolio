const navItems = document.querySelectorAll('.right-list-link');

if (window.location.pathname === '/portfolio/') {
    navItems[0].classList.add('active-navbar');
} else {
    navItems.forEach(item => {
        const currentLocation = window.location.href;
        const navLinkLocation = item.href;

        if (navLinkLocation == currentLocation) {
            item.classList.add('active-navbar');
        }
    })
}