// 1.reference for all btns
// 2. refernece for all input fields
// 3. capture click for start

// 4. capture  click for reset

// 1

const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')
const pauseBtn = document.getElementById('pause')
const continueBtn = document.getElementById('continue')

const hrsInput = document.getElementById('hr')
const minsInput = document.getElementById('min')
const secInput = document.getElementById('sec')
let timeInSeconds = 0
let timerId = null
let init = null
let showPause = true
startBtn.addEventListener('click', (e) => {
    let hrs = hrsInput.value || 0
    let mins = minsInput.value || 0
    let sec = secInput.value || 0

    timeInSeconds = parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(sec)
    init = timeInSeconds
    timer(timeInSeconds)
})

function timer() {
    if (timeInSeconds === 0) return

    timerId = setTimeout(() => {
        timeInSeconds--
        secInput.value = timeInSeconds % 60
        hrsInput.value = Math.floor(timeInSeconds / 3600);
        minsInput.value = Math.floor((timeInSeconds % 3600) / 60);
        timer(timeInSeconds)
    }, 1000)
}

resetBtn.addEventListener('click', () => {
    secInput.value = 0
    hrsInput.value = 0
    minsInput.value = 0
    clearTimeout(timerId)
})

pauseBtn.addEventListener('click', () => {
    continueBtn.style.display = 'inline-block'
    pauseBtn.style.display = 'none'
    clearTimeout(timerId)
})


continueBtn.addEventListener('click', () => {
    continueBtn.style.display = 'none'
    pauseBtn.style.display = 'inline-block'
    timer()
})


