let fileArr = [];

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

    // закрытие выбора системы
    if (evt.target && !evt.target.closest('.order-form__label--system')) {
        let mainSelectLabel = document.querySelector('.order-form__label--system');
        mainSelectLabel.classList.remove('select-active')
    }

    // прикрепить файл
    if (evt.target && evt.target.closest('.order-form__input-title')) {
        // console.log('прикрепить файл');
        let target = evt.target.closest('.order-form__input-title')
        let fileUpload = document.querySelector('.order-form__input--file')
        fileUpload.click();
    }

    // удалить файл
    if (evt.target && evt.target.closest('.order-form__input-file-delete')) {
        console.log('удалить файл');
        evt.preventDefault()

        let fileLabel = document.querySelector('.order-form__label--file')
        let fileNameTitle = document.querySelector('.order-form__input-file-name')
        let fileInput = document.querySelector('.order-form__input--file')

        fileLabel.classList.remove('uploaded')
        fileNameTitle.textContent = ''
        fileInput.value = ''
        fileArr = [];



        let target = evt.target.closest('.order-form__input-file-delete')

    }

})

function setFile(fileArr) {
    if (fileArr.length > 0) {
        console.log('файл загружен');
        let fileLabel = document.querySelector('.order-form__label--file')
        let fileNameTitle = document.querySelector('.order-form__input-file-name')
        fileLabel.classList.add('uploaded')
        fileNameTitle.textContent = fileArr[0].name
    } else {
        fileLabel.classList.remove('uploaded')
    }

}

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


    // загрузка файлов
    if (evt.target && evt.target.classList.contains('order-form__input--file')) {
        console.log('загрузка файлов');
        let target = evt.target


        fileArr = [];
        fileArr = Array.from(evt.target.files);

        setFile(fileArr)
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
