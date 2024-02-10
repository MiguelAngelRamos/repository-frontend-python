let edad = prompt("Ingresa tu edad:");
// console.log(typeof edad); // te enseñar cual es el tipo
// entrada a número
edad = Number(edad);
//  el usuario es mayor de edad?
// > mayor que
// < menor que
// >= mayor igual
// <= menor igual
// = asignación
// == comparación
// === comparación ("tipo y valor")
if (edad >= 18) {
    console.log("Eres mayor de edad");
    alert("Eres mayor de edad");
} else {
    console.log("Lo siento, debes ser mayor o igual a 18 años para acceder.");
    alert("Lo siento, debes ser mayor o igual a 18 años para acceder.");
}