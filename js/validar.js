function validar(){
    let nombre, telefono, correo, texto
    let expresion = /\w+@\w+\.+[a-z]/

    nombre = document.getElementById("names").value
    telefono=document.getElementById("phone").value
    correo=document.getElementById("email").value
    texto= document.getElementById("mensaje").value

    if(nombre === ""  || telefono === "" || correo === "" || texto === "" ){
        alert("Todos los campos son necesarios")
        return false
    }else if(isNaN(telefono)){
        alert("el telefono debe ser un numero")
        return false
    }else if(!expresion.test(correo)){
        alert("Ingrese un correo valido")
        return false
    }
}