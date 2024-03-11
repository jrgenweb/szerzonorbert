const topHome = document.querySelector('.to-home')


window.addEventListener('scroll', (event) => {
    //console.log('hia' + window.screen.availHeight + ' y' + window.screenY)
    if (window.scrollY >= window.screen.availHeight - (window.screen.availHeight / 100 * 20)) {
        topHome.classList.add('active')
    } else {
        topHome.classList.remove('active')
    }
})/*
window.addEventListener('click', (event) => {
    document.querySelector('.navbar-toggler').classList.remove('collapsed')


    console.dir('hi' + event.target.classList)
})
*/
