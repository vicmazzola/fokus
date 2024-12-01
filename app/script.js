const html = document.querySelector('html');
const btnFocus = document.querySelector('.app__card-button--focus');
const btnShort = document.querySelector('.app__card-button--short');
const btnLong = document.querySelector('.app__card-button--long');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const btnStartPause = document.querySelector('#start-pause');

const soundFocusInput = document.querySelector('#toggle-music');
const song = new Audio('/sounds/luna-rise-part-one.mp3')

const soundBeep = new Audio('/sounds/beep.mp3')
const soundPlay = new Audio('/sounds/play.wav')
const soundPause = new Audio('/sounds/pause.mp3')



let timeInSeconds = 5;
let intervalId = null

song.loop = true;

soundFocusInput.addEventListener('change', () => {
    if (song.paused) {
        song.play()
    } else {
        song.pause()
    }
})


btnFocus.addEventListener('click', () => {
    changeContext('focus')
    btnFocus.classList.add('active')
})

btnShort.addEventListener('click', () => {
    changeContext('short-break')
    btnShort.classList.add('active')
})

btnLong.addEventListener('click', () => {
    changeContext('long-break')
    btnLong.classList.add('active')
})

function changeContext(context) {
    buttons.forEach(function (context) {
        context.classList.remove('active')
    })

    const imagePath = `img/${context}.png`;
    console.log("Image path:", imagePath);
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

const timer = () => {
    if (timeInSeconds <= 0) {
        soundBeep.play();
        reset()
        alert('Time finished!')
        return
    }
    timeInSeconds -= 1;
    console.log('Timer: ' + timeInSeconds);
}

btnStartPause.addEventListener('click', startOrPause)

function startOrPause() {
    if (intervalId) {
        reset();
        return
    }
    intervalId = setInterval(timer, 1000)
    soundPlay.play();
}

function reset() {
    clearInterval(intervalId)
    intervalId = null;
    soundPause.play();
}
