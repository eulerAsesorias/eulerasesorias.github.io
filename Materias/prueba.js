// script para abrir varios vínculos a la vez

function abrirVinculo(){
    const misLinks=["https://lqtecno.blogspot.com/2013/11/plataforma-elevadora-camion-julio-2013.html","https://gestortruck.com/plataformas-de-carga-para-camion/"];
    misLinks.forEach(function(valor){
    window.open(valor);
    console.log(valor);
    }
)}