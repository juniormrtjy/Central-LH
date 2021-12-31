const abrir = document.querySelector('.g-modal')
const fechar = document.querySelector('.gm-img')

function abrirModal(src) {
  abrir.style.visibility = 'visible'
  fechar.style.transform = 'scale(1)'
  fechar.src = src
}
function fecharModal() {
  abrir.style.visibility = 'hidden'
  fechar.style.transform = 'scale(0)'
}
// EXPLICAÇÃO GALERIA BUTTON

const expl = document.querySelector('.explain')

function explain() {
  expl.style.display = 'block'
}
function fechou() {
  expl.style.display = 'none'
}
