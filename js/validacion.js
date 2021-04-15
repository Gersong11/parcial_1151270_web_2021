var formlogin = document.querySelector("#formlogin")
formlogin.addEventListener("submit", validar);


function validar(e) {
    e.preventDefault();

    var user = document.getElementById('usr');
    var pwd = document.getElementById("pwd");


    var userv = "admin";
    var userp = "1234";


    console.log(pwd)
    if (user.value == userv && pwd.value == userp) {

        localStorage.setItem("usuario", userv);
        localStorage.setItem("contraseña", userp)

        this.submit();

        // alert("Ha Iniciado Sesion");


    } else {



        var mensaje = document.querySelector("#mensaje");

        var rp = document.createElement("div");
        rp.setAttribute("class", "alert alert-danger");
        rp.textContent = "Usuario o CONTRASEÑA invalidad.";
        mensaje.appendChild(rp);

    }

}