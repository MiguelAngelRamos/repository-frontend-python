document.addEventListener('DOMContentLoaded', function() {

 // Referencias
 const addButton = document.querySelector('#addTaskButton');
 const input = document.querySelector('#taskinput');
 const tasksList = document.querySelector('#tasksList');

 // El boton para agregar tarea
 addButton.addEventListener('click', function() {
    addTask(input.value);
    input.value = '';
 });
 
 // Es la caja de texto
 input.addEventListener('keypress', function(event){

      if(event.key === 'Enter') {
        addTask(input.value);
        input.value = '';
      }
 })

// task = Aprender Python
// Función que nos permite agregar una tarea al "ul"
 function addTask(task) {
  
  if(task.trim() !== '') {
    // <li></li>
    const li = document.createElement('li');
    li.textContent = task; // <li>Aprender Python</li>
    // tasksList es ul
  
    tasksList.appendChild(li);
    // <ul>
    //   <li>Aprender Python</li>
    // </ul>
  } else {
    alert('debes ingresar una tarea')
  }
 }

});