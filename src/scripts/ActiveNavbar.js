const navItems = document.querySelectorAll('.right-list-link');

if (window.location.pathname === '/') {
    navItems[0].classList.add('active-navbar');
} else {
    const pathname = window.location.pathname.match(/\/\w+/)[0];
    const currentLocation = pathname.slice(1, pathname.length);
    
    
    navItems.forEach(item => {
        const navLinkPathname = item.pathname.match(/\/\w+/)[0];    
        const navLinkLocation = navLinkPathname.slice(1, navLinkPathname.length);    
    
        if (navLinkLocation == currentLocation) {
            item.classList.add('active-navbar');
        }
    })
}