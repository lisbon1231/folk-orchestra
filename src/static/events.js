const initSearchInput = () => {
    const eventsList = document.body.querySelector('.events-list');
    const input = document.body.querySelector('.form__input');
    if (!eventsList || !input) return;

    const events = [...eventsList.querySelectorAll('.event-preview')]
        .map(el => ({
            element: el,
            title: el.dataset.title.toLowerCase()
        }));
    input.oninput = ev => {
        let { target: { value: search } } = ev;
        search = search.toLowerCase();
        ev.preventDefault();
        events.forEach(({ element, title }) => {
            element.classList.remove('hidden');
            if (!title.includes(search))
                element.classList.add('hidden');
        });
    };
};

const initSort = () => {
    const btn = document.body.querySelector('.form__label_type_sort');
    const eventsList = document.body.querySelector('.events-list');
    if (!eventsList || !btn) return;

    let events = [...eventsList.querySelectorAll('.event-preview')];
    btn.onclick = () => {
        btn.classList.toggle('form__label_sort_up');
        events = events.reverse();
        [...eventsList.querySelectorAll('.event-preview')].forEach(e => e.remove());
        events.forEach(e => eventsList.appendChild(e));
    };
};

window.addEventListener('DOMContentLoaded', () => {
    initSearchInput();
    initSort();
});
