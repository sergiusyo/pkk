//СЛАЙДЕР
const swiper1 = new Swiper('.swiper1', {
    loop: true,
    rewind: true,
    slidesPerView: 1,
    autoplay: {
        delay: 1000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    a11y: {
        paginationBulletMessage: 'Тут название слайда {{index}}',
    }

});


const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    rewind: true,
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {

        320: {
            slidesPerView: 1,

        },

        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        769: {
            slidesPerView: 3,
            spaceBetween: 20,
        },



        979: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
})



//АККОРДИОН
$(function () {
    $(".accordion-container").accordion({
        heightStyle: 'content',
        collapsible: true,
        active: 0
    });
});




//DROPDOWN-ВЫПАДАШКА
document.querySelectorAll(".menu__button").forEach(button => {
    button.addEventListener('click', function (event) {
        document.querySelectorAll('.menu__item').forEach(item => {
            if (item.querySelector('.menu__button') !== button) {
                item.classList.remove('menu__item_open')
            }
        })
        event._isClick == true

        button.parentElement.classList.toggle('menu__item_open')
    })
})

document.body.addEventListener('click', function (event) {
    console.log(event.target.parentElement.classList.contains('menu__item_open'));

    if (
        event._isClick == true ||
        event.target.classList.contains('menu__button') == true ||
        event.target.classList.contains('dropdown-menu') == true
    ) return

    document.querySelectorAll('.menu__item').forEach(item => {
        item.classList.remove('menu__item_open')
    })
})



/*плавный скролл по якорям*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


//МЕНЮ-БУРГЕР
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function () {
        document.querySelector("header").classList.toggle("open")
    })
})


//КНОПКА НАВЕРХ
$('body').append('<div class="up-btn"></div>');
$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $('.up-btn').css({
            transform: 'scale(1)'
        });
    } else {
        $('.up-btn').css({
            transform: 'scale(0)'
        });
    }
});
$('.up-btn').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});


//МОДАЛЬНОЕ ОКНО
document.getElementById("open-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

// ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})



/*ВАЛИДАЦИЯ ФОРМЫ*/
let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);


const validation = new JustValidate('#form');

validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 30,
        },
    ])

    .addField('#email', [
        {
            rule: 'required',

        },
    ]);



//МАСКА ДЛЯ ВВОДА НОМЕРА ТЕЛЕФОНА
addField("#tel", [
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: 'Телефон*'
    },
    {
        validator: (value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Boolean(Number(phone) && phone.length === 10)
        },

    },
])