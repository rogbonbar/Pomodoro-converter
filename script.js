let minutosEl = document.querySelector('#minutos')
const btnEl = document.getElementById('btn')
const horasEL = document.getElementById('horas-el')
const btnPomodoro = document.getElementById('btn-pomodoro')
let numPomodoros = document.getElementById('pomodoros')
let minPomodoros = document.querySelector('#pomodoros-min')
const btnBorrarHoras = document.getElementById('btn-borrar')
const btnBorrarPomodoros = document.querySelector('#btn-borrar-pomodoro')


btnEl.addEventListener('click', () => {
  let resultHours =minutosEl.value / 60
  horasEL.textContent += resultHours.toFixed(2)
  minutosEl.value= ''
})

btnPomodoro.addEventListener('click', () => {
  let resultMinutes = numPomodoros.value * 25
  minPomodoros.textContent += resultMinutes
  numPomodoros.value = ''
 
})

btnBorrarHoras.addEventListener('click', ()=> {
  horasEL.textContent = 'Horas:'
})

btnBorrarPomodoros.addEventListener('click', ()=> {
  minPomodoros.textContent = 'Minutos:'
})
