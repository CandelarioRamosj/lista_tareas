//Agrega el elemento en una variable para agregar el evento "click"
let agregar = document.getElementById('agregar')
agregar.addEventListener('click', agregarTarea)


//? Detecta si dentro del textarea se hacer "enter"
document.getElementById('name').addEventListener('keydown', function(e){
  if(e.keyCode === 13){
    e.preventDefault()
    document.getElementById('agregar').click()
  }
})


//? Se crea una variable contador para llevar el control de las variables
let contador = 0


//? Funcion que agrega la nueva tarea a la lista
function agregarTarea(){
  //Se extrae el nombre de la tarea, tambien se quitan las comillas
  let tarea = document.getElementById('name').value.replace(/"/g, "")
  if(tarea != ""){
  //Agrega el div que contiene la tarea y sus botones
  //Obtenemos el div padre donde agregaremos los demas elementos
  let divPadre = document.getElementById('contenedor-tareas')

  //Creamos el nuevo div
  let divHijo = document.createElement('div')

  //Agregamos el valor del contador sumado
  contador = contador + 1
  
  //Agregamos los elemento al nuevo div con el nombre de la tarea
  divHijo.innerHTML ='<textarea id="text-'+ contador +'" rows="1" maxlength="40" disabled>'+ tarea +'</textarea> <button type="button" id="btn-listo-'+ contador +'" class="listo" onclick="listo('+ contador +')"><i class="fa-solid fa-check"></i></button> <button type="button" id="btn-editar-'+ contador +'" class="editar" onclick="editar('+ contador +')"><i class="fa-solid fa-pen-to-square"></i></button> <button type="button" id="btn-eliminar-'+ contador +'" class="quitar" onclick="eliminar('+ contador +')"><i class="fa-solid fa-x"></i></button>'
  
  //Se agrega la clase "tarea" al div y el id
  divHijo.setAttribute('class', 'tarea')
  divHijo.setAttribute('id', 'elemento' + contador)

  //Agregamos el nuevo div al HTML, dentro del div padre
  divPadre.appendChild(divHijo)

  //Se limpia el input
  document.getElementById('name').value = ''
  }else {
    //Se agrega un alert con SweetAlert2
    Swal.fire({
      title: 'Por favor agregue alguna tarea.',
      icon: 'warning',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
      showClass: {
        popup: 'animate__animated animate__bounceInDown',
        backdrop: false,
        icon: 'animate__animated animate__bounce'
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOutUp'
      }
    })
  }
}


//? Creo una funcion para cuando se de en listo a una tarea
function listo(id){
  //Obtenemos el div del elemento que detono el evento
  let div = document.getElementById('elemento'+ id)
  div.classList.add('listo-click')

  //Se desactivan los botones
  let botonListo = document.getElementById('btn-listo-' + id)
  botonListo.style.opacity = 0
  botonListo.disabled = true
  let botonEditar = document.getElementById('btn-editar-' + id)
  botonEditar.style.opacity = 0
  botonEditar.disabled = true
}


//? Funcion editar
function editar(id){
  //Se cambia el contenido del boton para editar
  agregar.textContent = 'Editar'

  //Extraigo el value de mi elemento
  let texto = document.getElementById('text-' + id)

  //Se agrega el texto al textarea, primero se borra lo que estuviera escrito
  document.getElementById('name').value = ""
  document.getElementById('name').value = texto.value

  //Se esconden los otros botones
  let botonListo = document.getElementById('btn-listo-' + id)
  botonListo.style.opacity = 0
  botonListo.disabled = true
  let botonEliminar = document.getElementById('btn-eliminar-' + id)
  botonEliminar.style.opacity = 0
  botonEliminar.disabled = true

  //Se elimina el evento pricipal
  agregar.removeEventListener('click', agregarTarea)

  //Se agrega el nuevo evento el click
  agregar.addEventListener('click', editarTarea)

  //Se crea la funcion anidada
  function editarTarea(){
    //Se guarda en una variable el nuevo texto
    let nuevoTexto = document.getElementById('name').value.replace(/"/g, "")
  
    //Se actualiza el textarea modificado
    texto.value = nuevoTexto
  
    //Se vuelven a mostrar los otros botones
    botonListo.style.opacity = 1
    botonListo.disabled = false
    botonEliminar.style.opacity = 1
    botonEliminar.disabled = false
  
    //Se borra el textarea y se devuelve el nombre del boton
    document.getElementById('name').value = ""
    agregar.textContent = 'Agregar'
  
    //Se borra este evento
    agregar.removeEventListener('click', editarTarea)
  
    //Se agrega el evento anterior
    agregar.addEventListener('click', agregarTarea)
  }
}


//? Funcion eliminar tareas
function eliminar(id){
  let divHijo = document.getElementById('elemento'+ id)
  let divPadre = document.getElementById('contenedor-tareas')
  divPadre.removeChild(divHijo)
}