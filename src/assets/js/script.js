window.addEventListener("DOMContentLoaded", (event) => {
    const boutonMenu = document.querySelector('.button')
    const menus = document.querySelector('.menus')
    const active = document.getElementsByClassName('active')

    boutonMenu.addEventListener('click', () => {
        menus.classList.toggle('active')
    })

    for (let i of active) {
        i.addEventListener('click', function() {
            menus.classList.remove('active')
        })
    }
})

