window.addEventListener('DOMContentLoaded', () => {
    const searchbar = document.body.querySelector('.searchbar');
    const input = document.body.querySelector('.form__input');
    if (!membersList || !input) return;

    const members = [...membersList.querySelectorAll('.member-item')]
        .map(el => ({
            element: el,
            name: el.dataset.name.toLowerCase(),
            role: el.dataset.role.toLowerCase(),
            instrument: el.dataset.instrument && el.dataset.instrument.toLowerCase()
        }));
    input.oninput = ev => {
        let { target: { value: search } } = ev;
        search = search.toLowerCase();
        ev.preventDefault();
        members.forEach(({ element, name, role, instrument }) => {
            element.classList.remove('hidden');
            if (!name.includes(search) && !role.includes(search) && (instrument ? !instrument.includes(search) : true))
                element.classList.add('hidden');
        });
    };
});
