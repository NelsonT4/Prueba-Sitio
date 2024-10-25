const miTitulo = document.querySelector("h1");
miTitulo.textContent = "Hola Mundo";
document.querySelector("html").onclick = function() {
    alert("Ouch !Deja de Pincharme!");
};

let miImage = document.querySelector("img");
miImage.onclick = function() {
    let miSrc = miImage.getAttribute("src");
        if (miSrc === "images/car-vehicle-human-auto-automotive-sedan-734226-pxhere.com.jpg"){
            miImage.setAttribute("src","images/car-vehicle-human-auto-automotive-sports-car-734237-pxhere.com.jpg");
        }else{
            miImage.setAttribute("src", "images/car-vehicle-human-auto-automotive-sedan-734226-pxhere.com.jpg");
        }
};
let miBoton = document.querySelector("button");
let miTitulo2 = document.querySelector("h1");

function establecerNombreUsuario (){
    let miNombre = prompt("Por Favor, ingrese su nombre");
    if(!miNombre){
        establecerNombreUsuario();
    }else {
        localStorage.setItem("nombre", miNombre);
        miTitulo2.textContent = "Mercedez Benz es Genial, " + miNombre;
    }
};
if(!localStorage.getItem("nombre")){
    establecerNombreUsuario();
}else{
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo2.textContent = "Mercedez Benz es Genial, " + nombreAlmacenado;
};
miBoton.onclick = function() {
    establecerNombreUsuario();
};
