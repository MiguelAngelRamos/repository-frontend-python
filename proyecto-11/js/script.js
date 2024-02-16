document.querySelector('#formularioRegistro').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const errorEmail = document.querySelector('#errorEmail');

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  //* miguel@correo.com
  //* miguel
  if(!regexEmail.test(email)) {
    console.log('el email no es valido');
    errorEmail.textContent= 'El email no es valido';
    errorEmail.style.display = 'block';
  }

  // email.textContent='';
  // password.textContent='';
  
});

// document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
//   console.log('se intenta enviar el formulario');
// });