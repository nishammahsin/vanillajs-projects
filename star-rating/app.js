var allStars = document.querySelectorAll('.star')
console.log(allStars)
let pidx = 0;
// for(let i = 0 ; i < allStars.length; i++) {
//     allStars[i].addEventListener('click', () => {
//         console.log(' clicked' , i+1)
//     })
// }


var starContainer = document.querySelector('.container')
starContainer.addEventListener('click', (e) => {

    var element = e.target
    var required = element.hasAttribute('idx')
    if (!required) return
    pidx = element.getAttribute('idx')
    fillStars(pidx)


})

starContainer.addEventListener('mouseover', (e) => {
    var element = e.target
    var required = element.hasAttribute('idx')
    if (!required) return
    var idx = element.getAttribute('idx')
    fillStars(idx)
})


starContainer.addEventListener('mouseleave', () => {
    fillStars(pidx)
})



const fillStars = (idx) => {
    const countSpan = document.getElementById('count')
    countSpan.textContent = idx

    console.log(allStars.length)
    for (let i = 0; i < allStars.length; i++) {
        allStars[i].classList.remove('yellow')
    }

    for (let i = 0; i < idx; i++) {
        allStars[i].classList.add('yellow')
    }
}

