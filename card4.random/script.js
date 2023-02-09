let board = document.getElementById('board')
let squaresNum = 400
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#8bbb07', '#00ffaa', '#0400ff', '#ff0000', '#33ff00', '#ffffff', '#ffae00', '#ff5e00', '#33ff00', '#ff0055', '#a200ff', '#0011ff', '#182b7cd7']
for(let i = 0; i < squaresNum; i++) {
  let square = document.createElement('div')
  square.classList.add('square')
  board.append(square)
  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))
}

function setColor(el) {
  let color = getColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = `0 0 2px #1d1d1d`
}

function getColor() {
  let index = Math.floor(Math.random() * colors.length)
  return colors[index]
}