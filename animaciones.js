window.addEventListener('scroll', function(){
    let animacion = document.getElementById('sobre-mi-animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;
    console.log(posicionObj1);
    let tamañoPantalla = window.innerHeight/1.1;
    var etiqueta = document.querySelector("#animar");
    etiqueta.classList.toggle('animado', posicionObj1 < tamañoPantalla);
    if(posicionObj1 < tamañoPantalla){
        console.log("ahora se muestra")
    }
    else{
        console.log("ya no")
    }
    console.log(tamañoPantalla)
    

})