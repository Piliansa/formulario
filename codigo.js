const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]) {
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40) {
        error[0] = true;
        error[1] = "El nombre es inválido";
        return error;
    } else if (email.value.length < 5 ||
               email.value.length > 40 ||
               email.value.indexOf("@") == -1 ||
               email.value.indexOf(".") == -1 ||
               email.value.indexOf(" ") == -1) {
                   error[0] = true;
                   error[1] = "El mail es inválido";
                   return error;
               } else if (materia.value < 4 || materia.value > 40) {
                   error[0] = true;
                   error[1] = "La materia no existe.";
               }

    error[0] = false;
    return error;
}