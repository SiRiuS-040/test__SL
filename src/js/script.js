



document.addEventListener('click', function (evt) {
    //открыть меню
    if (evt.target && evt.target.closest('.navigation__open')) {
        console.log('открыть меню');
        let target = evt.target.closest('.navigation__open')
        let navList = document.querySelector('.navigation__list')
        target.classList.toggle('active')
        if (target.classList.contains('active')) {
            navList.classList.add('active')
        } else {
            navList.classList.remove('active')
        }
    }

    // прикрепить файл
    if (evt.target && evt.target.closest('.order-form__label--file')) {
        console.log('прикрепить файл');
        let target = evt.target.closest('.order-form__label--file')

        let fileUpload = document.querySelector('.order-form__input--file')
        fileUpload.click();
    }

    // клик по списку в меню
    if (evt.target && evt.target.closest('.navigation__link')) {
        console.log('клик по списку в меню');
        let target = evt.target.closest('.navigation__link')

        let navList = document.querySelector('.navigation__list')
        let menuOpen = document.querySelector('.navigation__open')

        navList.classList.remove('active')
        menuOpen.classList.remove('active')

    }


    // if (evt.target) {
    //     console.log(evt.target);
    //     console.log('открыть меню');
    // }
})

document.addEventListener('input', function (evt) {
    // изменения range bar
    if (evt.target && evt.target.classList.contains('range-bar__input')) {
        let target = evt.target
        let setValue = document.querySelector('.range-bar__value-data')
        setValue.textContent = `${target.value} %`
    }

    // if (evt.target) {
    //     console.log(evt.target);
    //     console.log('открыть меню');
    // }
})

document.addEventListener('DOMContentLoaded', function (evt) {
    let rangeInput = document.querySelector('.range-bar__input')
    let setValue = document.querySelector('.range-bar__value-data')
    setValue.textContent = `${rangeInput.value} %`
})
