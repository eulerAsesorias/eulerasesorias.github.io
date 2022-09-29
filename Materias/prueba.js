// script para abrir varios vínculos a la vez
document.OnLoad()=abrirVinculo();
function abrirVinculo(){
    const misLinks=["https://lqtecno.blogspot.com/2013/11/plataforma-elevadora-camion-julio-2013.html","https://gestortruck.com/plataformas-de-carga-para-camion/","https://lqtecno.blogspot.com/2013/11/plataforma-elevadora-camion-julio-2013.html","https://www.tauro.mx/rampas-hidraulicas-railift-maxon/
","http://www.solucionesenaccesosmg.com.mx/producto/rampa-oculta-de-uso-rudo/"];
    misLinks.forEach(function(valor){
    window.open(valor);
    console.log(valor);
    }
)}
