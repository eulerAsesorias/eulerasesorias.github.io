// script para abrir varios vínculos a la vez

function abrirVinculo(){
    const misLinks=["https://youtu.be/WQFrdaWPqcA/","https://youtu.be/WQFrdaWPqcA/","https://lqtecno.blogspot.com/2013/11/plataforma-elevadora-camion-julio-2013.html","http://www.tecfor.cl/productos/plataformas.php","https://gestortruck.com/plataformas-de-carga-para-camion/","https://www.tauro.mx/rampas-hidraulicas-railift-maxon/","http://www.solucionesenaccesosmg.com.mx/producto/rampa-oculta-de-uso-rudo","https://spanish.alibaba.com/product-detail/hydraulic-tail-lifts-for-trucks-and-forklift-60627502476.html"];
    misLinks.forEach(function(valor){
    window.open(valor);
    console.log(valor);
    }
)}