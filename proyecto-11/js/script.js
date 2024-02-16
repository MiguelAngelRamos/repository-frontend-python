document.querySelector('#formularioRegistro').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const errorEmail = document.querySelector('#errorEmail');
  const errorPassword = document.querySelector('#errorPassword');
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  //* miguel@correo.com "la regex para este caso retorna: true "
  //* miguel "la regex para este caso retorna: false "

  let isValid = true;
  // true -> !true => false
  // false -> !false => true

  if(!regexEmail.test(email)) {
    errorEmail.textContent= 'El email no es valido';
    errorEmail.style.display = 'block';
    console.log('If: email');
    isValid=false;
  }

  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
  if(!regexPassword.test(password)) {
    errorPassword.textContent= 'La contraseña no es válida, Debe contener al menos una letra mayúscula, una minúscula, un número y tener al menos 8 caracteres';
    errorPassword.style.display = 'block';
    console.log('If: password');
    isValid = false;
  }

  // email.textContent='';
  // password.textContent='';
  
  if(isValid) {
    alert('Formulario se envio correctamente');
    window.location.href='bienvenida.html';
  }
});

// document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
//   console.log('se intenta enviar el formulario');
// });