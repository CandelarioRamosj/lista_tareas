//Agrega el elemento en una variable para agregar el evento "click"
let agregar = document.getElementById('agregar')
agregar.addEventListener('click', function(){
  //Se extrae el nombre de la tarea
  let tarea = document.getElementById('name').value
  if(tarea != ""){
    //Agrega el div que contiene la tarea y sus botones
    //Obtenemos el div padre donde agregaremos los demas elementos
    let divPadre = document.getElementById('contenedor-tareas')
    //Creamos el nuevo div
    let divHijo = document.createElement('div')
    //Agregamos los elemento al nuevo div con el nombre de la tarea
    divHijo.innerHTML ='<label><input type="text" value="" disabled></label> <button class="listo"><i class="fa-solid fa-check"></i></button> <button class="editar"><i class="fa-solid fa-pen-to-square"></i></button> <button class="quitar"><i class="fa-solid fa-x"></i></button>'
    //Agregamos el nuevo div al HTML, dentro del div padre
    divPadre.appendChild(divHijo)
  }else {
    alert("Ingrese alguna tarea")
  }
})

//Agrega el elemento en una variable para agregar el evento "click"
let listo = document.getElementsByClassName('listo')
for(let i = 0; i < listo.length; i++){
  listo[i].addEventListener('click', function(){
    alert("Evento listo")
  })
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