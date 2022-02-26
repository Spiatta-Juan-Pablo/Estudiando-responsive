window.addEventListener("scroll", function(){

    var section = document.querySelector("section");
    section.classList.toggle("scroll", window.scrollY>0);

})