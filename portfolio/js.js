var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("show-menu");
    
    document.querySelector(".hamburguer").classList.toggle("show-menu");

    
    document.querySelector(".line").classList.toggle("show-menu");

    
    document.querySelector("#line1").classList.toggle("show-menu");

    document.querySelector("#line2").classList.toggle("show-menu");
    
    document.querySelector("#line3").classList.toggle("show-menu");

    
    document.querySelector(".span").classList.toggle("show-menu");
    
});