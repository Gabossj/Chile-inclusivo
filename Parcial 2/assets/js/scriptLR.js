document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", widthPage);

var login = document.querySelector(".login");
var registerF = document.querySelector(".register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var lastBox_login = document.querySelector(".lastBox-login");
var lastBox_register = document.querySelector(".lastBox-register");


function widthPage(){

    if (window.innerWidth > 850){
        lastBox_register.style.display = "block";
        lastBox_login.style.display = "block";
    }else{
        lastBox_register.style.display = "block";
        lastBox_register.style.opacity = "1";
        lastBox_login.style.display = "none";
        login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        registerF.style.display = "none";   
    }
}

widthPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            registerF.style.display = "none";
            registerF.style.opacity = "1";
            lastBox_login.style.opacity = "0";
        }else{
            login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            registerF.style.display = "none";
            lastBox_register.style.display = "block";
            lastBox_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            registerF.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            lastBox_register.style.opacity = "0";
            lastBox_login.style.opacity = "1";
        }else{
            registerF.style.display = "block";
            contenedor_login_register.style.left = "0px";
            login.style.display = "none";
            lastBox_register.style.display = "none";
            lastBox_login.style.display = "block";
            lastBox_login.style.opacity = "1";
        }
}