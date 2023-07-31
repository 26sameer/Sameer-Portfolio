let circle = document.getElementById('circle')
let nav = document.getElementById('nav')
let herofooter = document.querySelector('#herofooter')
let project = document.querySelector('#project-group')
let main = document.getElementById('main')
let h1 = document.querySelector('.heading-group')

const onMouseMove = (e) => {
  if (main.clientWidth > 480) {
    const height = circle.offsetHeight
    const width = circle.offsetWidth

    circle.style.display = 'inline'
    circle.style.backgroundColor = '#fff'

    setTimeout(() => {
      circle.style.left = `${e.pageX - width / 2}px`
      circle.style.top = `${e.pageY - height / 2}px`
    }, 100)
  }
}

const onMouseLeave = () => {
  if (main.clientWidth > 480) {
    circle.style.display = 'none'
  }
}

const onMouseOver = (size) => {
  if (main.clientWidth > 480) {
    circle.style.transform = size
    nav.style.mixBlendMode = 'difference'
    herofooter.style.mixBlendMode = 'difference'
    project.style.mixBlendMode = 'difference'
    h1.style.mixBlendMode = 'difference'
  }
}

const onMouseOut = (size) => {
  if (main.clientWidth > 480) {
    circle.style.transform = size
    nav.style.mixBlendMode = 'normal'
    herofooter.style.mixBlendMode = 'normal'
    project.style.mixBlendMode = 'normal'
    h1.style.mixBlendMode = 'normal'
  }
}

document.addEventListener('mousemove', onMouseMove)
document.addEventListener('mouseleave', onMouseLeave)
