const path = window.location.pathname;

if (path === '/') {
const getCheckbox = document.querySelectorAll(`input[type='checkbox']`);
const getTasks = document.querySelectorAll(`.task-name`);

getCheckbox.forEach((value, index) => {
    getCheckbox[index].addEventListener('change', () => {
        if(getCheckbox[index].checked) {
            getTasks[index].classList.add('checked');
        } else {
            getTasks[index].classList.remove('checked');
        };
    });
});

};