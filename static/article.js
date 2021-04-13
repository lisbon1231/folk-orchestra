const controls = [...document.querySelectorAll('.article__image')];
const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close-button')
const image = modal.querySelector('.modal__img')

controls.forEach(control => {
    control.addEventListener('click', () => {
        modal.classList.add('modal_open')
        image.src = control.src
    })
})


modal.addEventListener('click', e => {
    if(e.target !== image ) {
        modal.classList.remove('modal_open')
    }
})
