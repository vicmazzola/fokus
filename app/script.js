const html = document.querySelector('html');
const btnFocus = document.querySelector('.app__card-button--focus');
const btnShort = document.querySelector('.app__card-button--short');
const btnLong = document.querySelector('.app__card-button--long');
const timer = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title')

const focusDuration = 1500;
const shortBreakDuration = 300;
const longBreakDuration = 900;


btnFocus.addEventListener('click', () => {
    html.setAttribute('data-context', 'focus')
    banner.setAttribute('src', '/img/foco.png')
})

btnShort.addEventListener('click', () => {
    html.setAttribute('data-context', 'short-break')
    banner.setAttribute('src', '/img/descanso-curto.png')

})

btnLong.addEventListener('click', () => {
    html.setAttribute('data-context', 'long-break')
    banner.setAttribute('src', '/img/descanso-longo.png')

})

timer.addEventListener('click', () => {

})