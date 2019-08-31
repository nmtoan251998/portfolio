const eduLists = Array.from(document.querySelectorAll('.edu__item'));
const test = eduLists[0];

window.addEventListener('scroll', function() {     
    if (this.pageYOffset >= eduLists[0].offsetParent.offsetTop-200) {
        if (!eduLists[0].classList.contains('edu__item--active')) {
            eduLists[0].classList.add('edu__item--active');
        }
    }  

    if (this.pageYOffset >= eduLists[1].offsetParent.offsetTop-70) {
        if (!eduLists[1].classList.contains('edu__item--active')) {
            eduLists[1].classList.add('edu__item--active');
        }
    }
    
    if (this.pageYOffset >= eduLists[2].offsetParent.offsetTop+40) {
        if (!eduLists[2].classList.contains('edu__item--active')) {
            eduLists[2].classList.add('edu__item--active');
        }
    }

    if (this.pageYOffset >= eduLists[3].offsetParent.offsetTop+150) {
        if (!eduLists[3].classList.contains('edu__item--active')) {
            eduLists[3].classList.add('edu__item--active');
        }
    }

    if (this.pageYOffset >= eduLists[4].offsetParent.offsetTop+270) {
        if (!eduLists[4].classList.contains('edu__item--active')) {
            eduLists[4].classList.add('edu__item--active');
        }
    }

    if (this.pageYOffset >= eduLists[5].offsetParent.offsetTop+400) {
        if (!eduLists[5].classList.contains('edu__item--active')) {
            eduLists[5].classList.add('edu__item--active');
        }
    }
})