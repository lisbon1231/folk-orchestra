
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

const fullDescriptionContainer = document.querySelector('.afisha__description-container')
const fullDescription = fullDescriptionContainer.querySelector('.afisha__full-description')
const fullDescriptionContent = fullDescription.querySelector('p')
const extendContentControl = fullDescriptionContainer.querySelector('.afisha__control')


if(shouldBeVisible(fullDescription, fullDescriptionContent)) {
    extendContentControl.addEventListener('click', () => {
        fullDescriptionContainer.classList.toggle('afisha__description-container_short')
        const textElement = extendContentControl.querySelector('.afisha__control-text')
        
        changeText(textElement, 'alternativeText')
    })
} else {
    document.querySelector('.afisha__description-controls').classList.add('afisha__description-controls_hidden')
}


function shouldBeVisible(container, content) {
    console.log(container,content)
    const computedStyles = window.getComputedStyle(container)
    const cleanHeight = container.clientHeight - parseInt(computedStyles.getPropertyValue("padding-top")) - parseInt(computedStyles.getPropertyValue("padding-bottom"))
    console.log(cleanHeight, content.clientHeight)
    
    return cleanHeight < content.clientHeight;
}

function changeText(elem, attr) {
    const newText = elem.getAttribute(attr)
    elem.setAttribute(attr, elem.textContent)
    elem.textContent = newText;
}

// closeAfishaModalButton.addEventListener('click', () => {
//     afishaModal.classList.remove('modal_open')
// })