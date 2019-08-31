document.addEventListener("DOMContentLoaded", function() {
    // current navbar
    const aboutEle = document.getElementById('about');
    const contactEle = document.getElementById('contact');
    const skillEle = document.getElementById('skills');
    const workEle = document.getElementById('works');
    const eduEle = document.getElementById('edu');
    
    // current position
    const aboutSectionYOffset = aboutEle.offsetTop;
    const contactSectionYOffset = contactEle.offsetTop;    
    const skillSectionYOffset = skillEle.offsetTop;
    const workSectionYOffset = workEle.offsetTop;
    const eduSectionYOffset = eduEle.offsetTop;

    const navItems = document.querySelectorAll('.nav__item');

    window.addEventListener('scroll', function() {
        if (this.pageYOffset >= aboutSectionYOffset-100 && this.pageYOffset < contactSectionYOffset-180)  {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__about').classList.add('current');
        } else if (this.pageYOffset >= contactSectionYOffset-180 && this.pageYOffset < skillSectionYOffset-50) {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__contact').classList.add('current');
        } else if (this.pageYOffset >= skillSectionYOffset-50 && this.pageYOffset < workSectionYOffset) {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__skills').classList.add('current');
        } else if (this.pageYOffset >= workSectionYOffset-20 && this.pageYOffset < eduSectionYOffset) {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__works').classList.add('current');
        } else if (this.pageYOffset >= eduSectionYOffset-180) {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__edu').classList.add('current');
        } else {
            navItems.forEach(item => {
                if(item.classList.contains('current')) {
                    item.classList.remove('current');
                }
            });

            document.querySelector('.nav__home').classList.add('current');
        }
    })
})