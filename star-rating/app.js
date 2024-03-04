var allStars = document.querySelectorAll('.star')
console.log(allStars)

// for(let i = 0 ; i < allStars.length; i++) {
//     allStars[i].addEventListener('click', () => {
//         console.log(' clicked' , i+1)
//     })
// }


var starContainer = document.querySelector('.container')
starContainer.addEventListener('click', (e) => {

    var element = e.target
    var required = element.hasAttribute('idx')
    console.log(required)
    if(!required) return
    var idx = element.getAttribute('idx')
    fillStars(idx)
    

})


const fillStars = (idx) => {
    const countSpan = document.getElementById('count')
    countSpan.textContent = idx
    
    console.log(allStars.length)
    for(let i = 0; i< allStars.length ; i++) {
        allStars[i].classList.remove('yellow')
    }

    for(let i = 0; i< idx ; i++) {
        allStars[i].classList.add('yellow')
    }
}

