const html = document.querySelector('html');
const btnFocus = document.querySelector('.app__card-button--focus');
const btnShort = document.querySelector('.app__card-button--short');
const btnLong = document.querySelector('.app__card-button--long');
const timer = document.querySelector('#timer');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

const focusDuration = 1500;
const shortBreakDuration = 300;
const longBreakDuration = 900;


btnFocus.addEventListener('click', () => {
    changeContext('focus')
})

btnShort.addEventListener('click', () => {
    changeContext('short-break')


})

btnLong.addEventListener('click', () => {
    changeContext('long-break')


})

function changeContext(context) {
    const imagePath = `img/${context}.png`;
    console.log("Image path:", imagePath); // Verifica o caminho no console
    banner.setAttribute('src', imagePath);


    html.setAttribute('data-context', context)
    banner.setAttribute('src', `img/${context}.png`);
    switch (context) {
        case 'focus':
            title.innerHTML =
                `Optimize your productivity,<br>
            <strong class="app__title-strong">dive into what matters.</strong>`

            break;

        case 'short-break':
            title.innerHTML =
                `How about take a break? 
                <strong class="app__title-strong">Take a short break!</strong>`
            break;
        case 'long-break':
            title.innerHTML =
                `Time to rest! 
                    <strong class="app__title-strong">Make a long break!</strong>`
            break;
        default:
            break;
    }
}

timer.addEventListener('click', () => {

})