var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


function botaoClicado(id){
    $(id).removeClass("d-none");
}

function botaoNClicado(id){
    $(id).addClass("d-none");
}

function verMais(){
    $('#button-ver-mais').fadeOut();
    $('#ver-mais').fadeIn();
}

function verMenos(){
    $('#ver-mais').fadeOut();
    $('#button-ver-mais').fadeIn();
}

window.sr = ScrollReveal({ reset: true});

ScrollReveal().reveal('.area-2', {
    delay: 700,
    interval:900
});
ScrollReveal().reveal('.area-3', {
    delay: 500,
     scale: 0.85
});
ScrollReveal().reveal('.area-4', {
    delay: 500,
     scale: 0.85
});