import './scss/style.scss';

$('.collapse').collapse()

const init = () => {
    const myMap = new ymaps.Map("map", {
        center: [40.712904, -74.013509],
        zoom: 16
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(new ymaps.Placemark([40.712904, -74.013509], {
            balloonContent: ' <strong>there!</strong>'
        }));
};
ymaps.ready(init);


let popup = document.querySelector('.popup-form');
let btnOpen = document.querySelector('.btnPopup');
let blackout = document.querySelector('.blackout');
let btnClose = document.querySelector('.btn-cancel');
let body = document.querySelector('body');
let burgerBtn = document.querySelector('.burger-btn');
let menuToggle = document.getElementById('menu-toggle');
let burgerMenu = document.querySelector('.header-menu');
let openNav = document.querySelector('.nav');

btnOpen.addEventListener('click', openPopup);
blackout.addEventListener('click', closePopup);
btnClose.addEventListener('click', closePopup);
burgerBtn.addEventListener('click', openBurger);

function openBurger() {
    burgerMenu.classList.toggle('show');
    body.classList.toggle('fixed-page');
    openNav.classList.toggle('nav-open')
}

function openPopup() {
    popup.classList.toggle('open');
    body.classList.toggle('fixed-page');
}

function closePopup() {
    popup.classList.remove('open');
    body.classList.remove('fixed-page');
}

const form = document.querySelector('.popup-content')[0];
const email = document.getElementById('email');
const emailError = document.querySelector('#email + .error-email');
const phone = document.getElementById('tel');
const phoneError = document.querySelector('#tel + .error-tel');
const name = document.getElementById('name');
const nameError = document.querySelector('#name + .error-name');

if (email) {
    email.addEventListener('input', function (event) {
        if (email.validity.valid) {
            emailError.textContent = '';
            emailError.className = 'error-email';
            email.className = 'content-block__input';
        } else {
            showError();
        }
    })
}

form.addEventListener('submit', function (event) {

    if (!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'E-mail адресс должен быть корректным';
    }

    emailError.className = 'error-email active';
    email.className = 'content-block__input invalid';
}

email.onfocus = function() {
    emailError.classList.remove('active');
    email.classList.remove('invalid');
};



if (phone) {
    phone.addEventListener('input', function (event) {
        if (phone.validity.valid) {
            phoneError.textContent = '';
            phoneError.className = 'error-tel';
            phone.className = 'content-block__input';
        } else {
            errorPhone();
        }
    })
}

form.addEventListener('submit', function (event) {

    if (!phone.validity.valid) {
        errorPhone();
        event.preventDefault();
    }
});

function errorPhone() {
    if (phone.validity.patternMismatch ) {
        phoneError.textContent = 'Телефон должен быть корректным';
    }
    phoneError.className = 'error-tel active';
    phone.className = 'content-block__input invalid';
}

phone.onfocus = function() {
    phoneError.classList.remove('active');
    phone.classList.remove('invalid');
};

if (name) {
    name.addEventListener('input', function (event) {
        if (name.validity.valid) {
            nameError.textContent = '';
            nameError.className = 'error-name';
            name.className = 'content-block__input';
        } else {
            errorName();
        }
    })
}

form.addEventListener('submit', function (event) {

    if (!name.validity.valid) {
        errorName();
        event.preventDefault();
    }
});

function errorName() {
    if (name.validity.patternMismatch) {
        nameError.textContent = 'Введите ваше имя! Используйте Кириллицу. ';
    }
    nameError.className = 'error-name active';
    name.className = 'content-block__input';
}

name.onfocus = function() {
    nameError.classList.remove('active');
    name.classList.remove('invalid');
};


let elements = document.getElementsByClassName('input_tel');
    for (let i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
        mask: '+{7}(000)000-00-00',
    });
}