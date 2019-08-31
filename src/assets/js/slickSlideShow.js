document.addEventListener("DOMContentLoaded", function() {
    const FEImages = [    
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/javascript-icon_jtcjxj.svg",
            "title": "Javascript",
            "level": "5",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216207/portfolio/icon/html-icon_n8noau.svg",
            "title": "HTML",
            "level": "4",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/css-icon_fn1xzn.svg",
            "title": "CSS",
            "level": "5",
        },        
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/reactjs-icon_fqle9v.svg",
            "title": "React",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/bootstrap-icon_icpl6k.svg",
            "title": "Bootstrap",
            "level": "4",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/sass-lang-icon_fy1j3t.svg",
            "title": "Sass",
            "level": "4",
        },
    ]
    
    const BEImages = [
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/nodejs-icon_zvoh2h",
            "title": "Node.js",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/expressjs-icon_eb4l78",
            "title": "Express.js",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/rest-api-icon_mhahrw",
            "title": "API",
            "level": "5",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/graphql-icon_ynzsyd",
            "title": "GraphQL",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/test-icon_sbvkvc",
            "title": "Unit Test",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/socketio-icon_opelgs",
            "title": "Socket io",
            "level": "3",
        },    
    ]
    
    const DbImages = [    
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/mongodb-icon_pey8dl",
            "title": "MongoDb",
            "level": "4",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/firebase-icon_z34oqk",
            "title": "Firebase",
            "level": "3",
        },    
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/redis-icon_qm2cud",
            "title": "Redis",
            "level": "2",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/mysql-icon_crpgcy",
            "title": "Mysql",
            "level": "2",
        },
    ]
    
    const programmingLanguages = [
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/javascript-icon_jtcjxj",
            "title": "Javascript",
            "level": "5",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/typescript-icon_iye2lw",
            "title": "Typescript",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/python-icon_x3o4nk",
            "title": "Python",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/php-icon_wp940l",
            "title": "PHP",
            "level": "2",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/java-icon_cv13bv",
            "title": "Java",
            "level": "1",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/c-icon_kxhs6b",
            "title": "C",
            "level": "1",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/c_-icon_ifd7qi",
            "title": "C++",
            "level": "1",
        },
    ]
    
    const othersImages = [
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/git-icon_eligi0",
            "title": "Git",
            "level": "5",
        },    
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/npm-icon_d4jocz",
            "title": "NPM",
            "level": "3",
        },
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/linux-icon_mggtzg",
            "title": "Linux",
            "level": "3",
        },    
        {
            "img": "https://res.cloudinary.com/dxrg9mbke/image/upload/v1567216208/portfolio/icon/heroku-icon_jio3mm",
            "title": "Heroku",
            "level": "3",
        },
    ]
    
    const renderIcons = (data, container) => {
        _.forEach(data, (val, index) => {
            let imgSrc = `<img class="skills__icon" src=${val.img}>`;
            let imgTitle = `<p>${val.title}</p>`
            container.append(`
            <div 
                class="skills__icon-wrapper level-${val.level}" 
                title="level: ${val.level}">
                ${imgSrc} 
                ${imgTitle}
            </div>`);
        });    
    }
    
    const addEventToSlider = (containerClass) => {
        $(containerClass).slick({
            dots: true,        
            speed: 2000,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            variableWidth: true,
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
    
    /* Add slider event to elements with slick*/
    // BE
    renderIcons(BEImages, $('#be'));
    addEventToSlider('.skills__be');
    
    // FE
    renderIcons(FEImages, $('#fe'));
    addEventToSlider('.skills__fe');
    
    // DB
    renderIcons(DbImages, $('#db'));
    addEventToSlider('.skills__db');
    
    // Languages
    renderIcons(programmingLanguages, $('#cl'));
    addEventToSlider('.skills__cl');
    
    // OTHERS
    renderIcons(othersImages, $('#others'));
    addEventToSlider('.skills__others');
})