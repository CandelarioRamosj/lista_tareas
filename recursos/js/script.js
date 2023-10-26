//Agrega el elemento en una variable para agregar el evento "click"
let agregar = document.getElementById('agregar')
agregar.addEventListener('click', function(){
  //Se extrae el nombre de la tarea, tambien se quitan las comillas
  let tarea = document.getElementById('name').value.replace(/"/g, "")
  if(tarea != ""){
    //Agrega el div que contiene la tarea y sus botones
    //Obtenemos el div padre donde agregaremos los demas elementos
    let divPadre = document.getElementById('contenedor-tareas')
    //Creamos el nuevo div
    let divHijo = document.createElement('div')
    //Agregamos los elemento al nuevo div con el nombre de la tarea
    divHijo.innerHTML ='<label><input type="text" value="'+ tarea +'" disabled></label> <button class="listo"><i class="fa-solid fa-check"></i></button> <button class="editar"><i class="fa-solid fa-pen-to-square"></i></button> <button class="quitar"><i class="fa-solid fa-x"></i></button>'
    //Se agrega la clase "tarea" al div
    divHijo.setAttribute('class', 'tarea')
    //Agregamos el nuevo div al HTML, dentro del div padre
    divPadre.appendChild(divHijo)
    //Se limpia el input
    document.getElementById('name').value = ''
    //Se actualizan las variables
    actualizarVarListo()
  }else {
    alert("Ingrese alguna tarea")
  }
})

//Agrega el elemento en una variable para agregar el evento "click"
let listo = document.getElementsByClassName('listo')
/* Se crea un for para detectar el click en cualquier boton con la misma clase
Este for se utiliza aqui por que existen "tareas" al iniciar la pagina,
si se desea quitar las "tareas" que ya extisten (tarea 1, tarea 2, tarea 3),
entonces puede quitar el for y solo dejar la funcion actualizarVarListo */
for(let i = 0; i < listo.length; i++){
  listo[i].addEventListener('click', function(){
  //Obtenemos el div del elemento que detono el evento
  let div = document.getElementsByClassName('tarea')[i]
  div.classList.add('listo-click')
  })
}
//Creo una funcion para poder actualizar el for
function actualizarVarListo(){
  for(let i = 0; i < listo.length; i++){
    listo[i].addEventListener('click', function(){
    //Obtenemos el div del elemento que detono el evento
    let div = document.getElementsByClassName('tarea')[i]
    div.classList.add('listo-click')
    })
  }
}

//Agrega el elemento en una variable para agregar el evento "click"
let editar = document.getElementsByClassName('editar')
for(let i = 0; i < editar.length; i++){
  editar[i].addEventListener('click', function(){
    alert("Evento editar")
  })
}

//Agrega el elemento en una variable para agregar el evento "click"
let quitar = document.getElementsByClassName('quitar')
for(let i = 0; i < quitar.length; i++){
  quitar[i].addEventListener('click', function(){
    alert("Evento quitar")
  })
}