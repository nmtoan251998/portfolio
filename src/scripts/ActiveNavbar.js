const pathname = window.location.pathname.match(/\/\w+/)[0];
const currentLocation = pathname.slice(1, pathname.length);

document.querySelectorAll('.right-list-link').forEach(item => {
    const navLinkPathname = item.pathname.match(/\/\w+/)[0];    
    const navLinkLocation = navLinkPathname.slice(1, navLinkPathname.length);    

    if (navLinkLocation == currentLocation) {
        item.classList.add('active-navbar');
    }
})