// $(document).ready(function () {
//     $("#ex1").modal({
//         fadeDuration: 1000,
//         fadeDelay: 0.50,
//         showClose: false
//     });
// });


const afisha = document.querySelector('.afisha__afisha');
const afishaModal = document.querySelector('.modal');
const closeAfishaModalButton = afishaModal.querySelector('.modal__close-button')
const modalImage = afishaModal.querySelector('.modal__img')

afisha.addEventListener('click', () => {
    afishaModal.classList.add('modal_open')
})

afishaModal.addEventListener('click', e => {
    console.log('click, ', e.target)
    if(e.target !== modalImage ) {
        afishaModal.classList.remove('modal_open')
    }
})

// closeAfishaModalButton.addEventListener('click', () => {
//     afishaModal.classList.remove('modal_open')
// })