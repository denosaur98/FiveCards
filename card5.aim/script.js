let start = document.querySelector('.start')
let screens = document.querySelectorAll('.screen')
let btns = document.querySelector('.time-list')
let time = 0
let score = 0
let timeEl = document.querySelector('#time')
let board = document.querySelector('#board')
start.addEventListener('click', e => {
  e.preventDefault()
  screens[0].classList.add('up')
})
btns.addEventListener('click', e => {
  if(e.target.classList.contains('time-btn')) {
    time = parseInt(e.target.getAttribute('data-time'))
    screens[1].classList.add('up')
    startGame()
  }
})

board.addEventListener('click', e => {
  if(e.target.classList.contains('circle')) {
    score++ 
    e.target.remove()
    createRandom()
  }
})

function startGame() {
  setInterval(decTime, 1000)
  createRandom()
  setTime(time)
}

function decTime() {
  if(time === 0) {
    finishGame()
  } else {
    let current = --time
    if(current < 10) current = `0${current}`
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentNode.classList.add('hide')
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1>`
}

function createRandom() {
  let circle = document.createElement('div')
  let size = getNumber(15, 40)
  let {width, height} = board.getBoundingClientRect()
  let x = getNumber(0, width - size)
  let y = getNumber(0, height - size)
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  board.append(circle)
}

function getNumber(min, max) {
  return Math.round((Math.random() * (max - min) + min))
}