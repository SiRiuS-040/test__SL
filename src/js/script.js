



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

    // if (evt.target) {

    //     console.log(evt.target);

    //     console.log('открыть меню');

    // }


})
