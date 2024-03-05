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

startBtn.addEventListener('click', (e) => {
   let hrs = hrsInput.value
   let mins = minsInput.value
   let sec = secInput.value

   timeInSeconds = parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(sec)
   console.log(timeInSeconds)
   timer(timeInSeconds)
})

function timer() {
    if(timeInSeconds === 0) return

    timerId = setTimeout(() => {
        timeInSeconds--
        console.log(timeInSeconds, '--time in sec')
        timer(timeInSeconds)
    }, 1000)
}

resetBtn.addEventListener('click', () => {
    clearTimeout(timerId)
})