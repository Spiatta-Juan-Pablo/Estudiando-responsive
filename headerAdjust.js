window.addEventListener("scroll", function(){

    var div = document.querySelector(".div-header");
    div.classList.toggle("scroll", window.scrollY>0);

})