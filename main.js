const openmenu = document.querySelector('#openmenu')
const closemenu = document.querySelector('#closemenu')

const navbar = document.querySelector('.navbar')


openmenu.addEventListener('click', ()=> {
    openmenu.classList.add('hide')
    closemenu.classList.remove('hide')
    navbar.classList.remove('hide')
})

closemenu.addEventListener('click', ()=> {
    closemenu.classList.add('hide')
    openmenu.classList.remove('hide')
    navbar.classList.add('hide')
})