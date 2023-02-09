let item = document.querySelector('.item')
let placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for(let place of placeholders) {
  place.addEventListener('dragover', dragover)
  place.addEventListener('dragenter', dragenter)
  place.addEventListener('dragleave', dragleave)
  place.addEventListener('drop', drop)
}

function dragstart(e) {
  e.target.classList.add('hold')
  setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend(e) {
  e.target.className = 'item'
}

function dragover(e) {
  e.preventDefault()
}

function dragenter(e) {
  e.target.classList.add('hovered')
}

function dragleave(e) {
  e.target.classList.remove('hovered')
}

function drop(e) {
  e.target.classList.remove('hovered')
  e.target.append(item)
}