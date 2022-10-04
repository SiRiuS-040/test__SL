
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
        let navList = document.querySelector('.navigation__list')
        let menuOpen = document.querySelector('.navigation__open')

        navList.classList.remove('active')
        menuOpen.classList.remove('active')
    }

    // клик по выбору системы
    if (evt.target && evt.target.closest('.order-form__input--system')) {
        console.log('клик по выбору системы');
        let target = evt.target.closest('.order-form__input--system')

        let parent = target.closest('.order-form__label--system')
        parent.classList.toggle('select-active')
    }


    if (evt.target && !evt.target.closest('.order-form__label--system')) {
        let mainSelectLabel = document.querySelector('.order-form__label--system');
        mainSelectLabel.classList.remove('select-active')
    }
})


document.addEventListener('change', function (evt) {
    //выбор системы
    if (evt.target && evt.target.classList.contains('system-select__radio-input')) {
        console.log('выбор системы');
        let target = evt.target
        let mainSelect = document.querySelector('.order-form__input--system');
        let parent = target.closest('.order-form__label--system')
        mainSelect.value = target.value
        parent.classList.remove('select-active')
    }

    // if (evt.target) {
    //     console.log(evt.target);
    //     // console.log('открыть меню');
    // }
})

document.addEventListener('input', function (evt) {
    // изменения range bar
    if (evt.target && evt.target.classList.contains('range-bar__input')) {
        let target = evt.target
        let setValue = document.querySelector('.range-bar__value-data')
        setValue.textContent = `${target.value} %`
    }
})

document.addEventListener('DOMContentLoaded', function (evt) {
    let rangeInput = document.querySelector('.range-bar__input')
    let setValue = document.querySelector('.range-bar__value-data')
    setValue.textContent = `${rangeInput.value} %`
})
