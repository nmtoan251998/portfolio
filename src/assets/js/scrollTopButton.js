document.addEventListener("DOMContentLoaded", function() {
    // current navbar
    const aboutEle = document.getElementById('about');
    
    // current position
    const aboutSectionYOffset = aboutEle.offsetTop;    

    // scrolltop
    const scrollTopBtn = document.querySelector('.btn__scrolltop');

    window.addEventListener('scroll', function() {
        if (this.scrollY >= aboutSectionYOffset)  {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    })

    scrollTopBtn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
})