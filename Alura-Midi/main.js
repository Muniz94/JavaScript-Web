function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)

  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    alert('Elemento não encontrado ou seletor inválido')
  }
}

const ListaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  const tecla = ListaDeTeclas[contador]
  const instrumento = tecla.classList[1]
  //template String
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === 'Enter' || evento.code === 'Space')
      tecla.classList.add('ativa')
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
