let up = document.querySelector('.up-button')
let down = document.querySelector('.down-button')
let sidebar = document.querySelector('.sidebar')
let mainside = document.querySelector('.main-slide')
let slidesCount = mainside.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
let active = 0
let container = document.querySelector('.container')

up.addEventListener('click', () => {
  changeSlide('up')
})

down.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(dir) {
  if(dir === 'up') {
    active++
    if(active === slidesCount) {
      active = 0
    }
  } else if(dir === 'down') {
    active--
    if(active < 0) {
      active = slidesCount - 1
    }
  }
  let height = container.clientHeight
  mainside.style.transform = `translateY(-${active * height}px)`
  sidebar.style.transform = `translateY(${active * height}px)`
}