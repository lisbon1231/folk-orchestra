const controls = [...document.querySelectorAll('.modal-image')];
const modal = document.querySelector('.modal');
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
