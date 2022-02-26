window.addEventListener("scroll", function(){

    var div = document.querySelector(".div-header");
    var nav = document.querySelector(".contenedor-nav-header")
    div.classList.toggle("scroll", window.scrollY>0);
    nav.classList.toggle("scroll", window.scrollY>0)

})