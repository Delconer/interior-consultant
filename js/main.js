const nav = document.getElementById('navegacion')
const hamburger = document.getElementById('hamburger')
const cerrar = document.getElementById('cerrar')

hamburger.addEventListener('click', ()=>{
  nav.style.display = 'flex'
})

cerrar.addEventListener('click', ()=>{
  nav.style.display = 'none'
})