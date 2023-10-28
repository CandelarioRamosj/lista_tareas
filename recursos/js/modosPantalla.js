//El elemento que detonara el cambio al modo nocturno
let moon = document.getElementById('luna')
//El elemento que detonara el cambio al modo dia
let sol = document.getElementById('sol')


//Evento para el modo nocturno
moon.addEventListener('click', function(e){
  e.preventDefault()

  //Se cambia el boton del modo de pantalla
  let fondo = document.getElementsByClassName('botones-fondo')[0]
  fondo.classList.add('botones-fondo-nocturno')


  //Se cambia el color de todo el documento para el modo nocturno
    document.documentElement.style.setProperty('--color1', '#0C134F');
    document.documentElement.style.setProperty('--color2', '#D4ADFC');
    document.documentElement.style.setProperty('--color3', '#1D267D');
    document.documentElement.style.setProperty('--color4', '#5C469C');
  

  //Cambia el color del fondo del textarea de tareas
  let name = document.getElementById('name')
  name.style.backgroundColor = '#00000079'


  //Cambiar el color de los botones sol y luna
  sol.style.color = 'var(--color2)'
  moon.style.color = 'var(--color1)'


  //Se agregan los eventos mouseover y mouseout para simular la pseudoclase Hover
  sol.addEventListener('mouseover', function(){
    sol.style.color = 'var(--color4)'
  })
  sol.addEventListener('mouseout', function(){
    sol.style.color = 'var(--color2)'
  })

  moon.addEventListener('mouseover', function(){
    moon.style.color = 'var(--color4)'
  })
  moon.addEventListener('mouseout', function(){
    moon.style.color = 'var(--color1)'
  })
})


//Evento para el modo dia
//Evento para el modo nocturno
sol.addEventListener('click', function(e){
  e.preventDefault()

  //Se cambia el boton del modo de pantalla
  let fondo = document.getElementsByClassName('botones-fondo')[0]
  fondo.classList.remove('botones-fondo-nocturno')


  //Se cambia el color de todo el documento para el modo nocturno
  document.documentElement.style.setProperty('--color1', '#B2A4FF');
  document.documentElement.style.setProperty('--color2', '#FFB4B4');
  document.documentElement.style.setProperty('--color3', '#FFDEB4');
  document.documentElement.style.setProperty('--color4', '#FDF7C3');

  
  //Cambia el color del fondo del textarea de tareas
  let name = document.getElementById('name')
  name.style.backgroundColor = 'white'


  //Cambiar el color de los botones sol y luna
  sol.style.color = 'var(--color1)'
  moon.style.color = 'var(--color2)'


  //Se agregan los eventos mouseover y mouseout para simular la pseudoclase Hover
  sol.addEventListener('mouseover', function(){
    sol.style.color = 'var(--color3)'
  })
  sol.addEventListener('mouseout', function(){
    sol.style.color = 'var(--color1)'
  })

  moon.addEventListener('mouseover', function(){
    moon.style.color = 'var(--color3)'
  })
  moon.addEventListener('mouseout', function(){
    moon.style.color = 'var(--color2)'
  })
})