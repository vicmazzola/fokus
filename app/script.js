const html = document.querySelector('html');
const btnFocus = document.querySelector('.app__card-button--focus');
const btnShort = document.querySelector('.app__card-button--short');
const btnLong = document.querySelector('.app__card-button--long');

btnFocus.addEventListener('click', () => {
    html.setAttribute('data-context', 'focus')
})

btnShort.addEventListener('click', () => {
    html.setAttribute('data-context', 'short-break')
})

btnLong.addEventListener('click', () => {
    html.setAttribute('data-context', 'long-break')
})