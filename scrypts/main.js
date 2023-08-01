let openEl = document.querySelector ('.window');
let wuEL = document.querySelector ('.window-u');


openEl.addEventListener('click', (ev) => {
    openEl.classList.toggle('window-opened');
    wuEL.classList.toggle('window-u-visible');
})