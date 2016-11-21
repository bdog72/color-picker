let hue = 0
let sat = 100
let light = 50

// const color = { hue: 0, saturation: 100, lightness: 50 }

const getHSL = () => {
  return `hsl(${hue}, ${sat}%, ${light}%)`
}
const getSAT = () => {
  return `hsl(${hue}, ${sat}%, ${light}%)`
}
const getLIGHT = () => {
  return `hsl(${hue}, ${sat}%, ${light}%)`
}

const main = () => {
  document.addEventListener

  const hueInput = document.getElementById('hu')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    document.querySelector('.sec1').style.backgroundColor = getHSL()
    document.querySelector('h3').textContent = getHSL()
  })

  const satInput = document.getElementById('sat')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    document.querySelector('.sec1').style.backgroundColor = getSAT()
    document.querySelector('h3').textContent = getSAT()
  })

  const lightInput = document.getElementById('light')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    document.querySelector('.sec1').style.backgroundColor = getLIGHT()
    document.querySelector('h3').textContent = getLIGHT()
  })
}

document.addEventListener('DOMContentLoaded', main)
