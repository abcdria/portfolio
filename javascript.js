var baixar_menu = true;
var lista_ilumi=document.getElementsByClassName("lista_ilumi")[0];
var lista_span=document.getElementsByClassName("lista_span")[0]
var reproduir_anim2d= document.getElementById("video_anim2d");
var reproduir_anim3d= document.getElementById("video_anim3d");
function funcio_menu(){
    if (baixar_menu == true) {
        document.getElementById("main_menu").className = "main_menu_baixar";
        document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_baixar";
        baixar_menu = false;
    } else {
        document.getElementById("main_menu").className = "main_menu_pujar";
        document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
        baixar_menu = true;
    }
}

function funcio_trabajos(){
    document.getElementById("abcdria").style.visibility="hidden";
    document.getElementById("lista_trabajos").style.visibility="visible";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
    document.getElementById("video_anim2d").style.visibility="hidden";
    document.getElementById("video_anim3d").style.visibility="hidden";
    document.getElementById("contenidor_portada").style.visibility="hidden";
    document.getElementById("contactos").style.visibility="hidden";
    document.getElementById("imgmi").style.visibility="hidden";
    lista_ilumi.style.visibility="hidden";
    document.getElementsByClassName("lista_span")[0].style.visibility="hidden";
    
    reproduir_anim2d.pause();
    reproduir_anim3d.pause();
    reset_ilu();
    baixar_menu = true;
}

function funcio_contacto(){
document.getElementById("abcdria").style.visibility="hidden";
    document.getElementById("lista_trabajos").style.visibility="visible";
    document.getElementById("contenidor_portada").style.visibility="hidden";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("video_anim2d").style.visibility="hidden";
    document.getElementById("video_anim3d").style.visibility="hidden";
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("contactos").style.visibility="visible";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
    document.getElementById("imgmi").style.visibility="hidden";
    lista_ilumi.style.visibility="hidden";
    lista_span.style.visibility="hidden";
    reset_ilu();
    baixar_menu = true;
}    
    

function funcio_sobremi(){
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("video_anim2d").style.visibility="hidden";
    document.getElementById("video_anim3d").style.visibility="hidden";
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("contenidor_portada").style.visibility="hidden";
    document.getElementById("contactos").style.visibility="hidden";
    document.getElementById("imgmi").style.visibility="visible";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
     lista_ilumi.style.visibility="hidden";
    lista_span.style.visibility="hidden";
    reset_ilu();
    baixar_menu = true;
}



function funcio_anim2d(){
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("video_anim2d").style.visibility="visible";
    document.getElementById("video_anim3d").style.visibility="hidden";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
        baixar_menu = true;
    reproduir_anim2d.currentTime = 0;
    reproduir_anim2d.play();
}
    

function funcio_anim3d(){
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("video_anim3d").style.visibility="visible";
     document.getElementById("video_anim2d").style.visibility="hidden";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
        baixar_menu = true;
    reproduir_anim3d.currentTime = 0;
    reproduir_anim3d.play();
}

function funcio_ilumi(){
   document.getElementById("abcdria").style.visibility="hidden";
    document.getElementById("lista_trabajos").style.visibility="hidden";
    document.getElementById("main_menu").className = "main_menu_pujar";
    document.getElementById("contenidor_fletxa_menu").className = "fletxa_menu_pujar";
    document.getElementById("video_anim2d").style.visibility="hidden";
    document.getElementById("video_anim3d").style.visibility="hidden";
    document.getElementById("contenidor_portada").style.visibility="hidden";
    lista_ilumi.style.visibility="visible";
    lista_span.style.visibility="visible";
    
    reproduir_anim2d.pause();
    reproduir_anim3d.pause();
    baixar_menu = true;
}



function ilum_anim1(){
    lista_ilumi.classList.add("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim2(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.add("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}
function ilum_anim3(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.add("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim4(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.add("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim5(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.add("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim6(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.add("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim7(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.add("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim8(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.add("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}

function ilum_anim9(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.add("mostrar_imagen9");
}

function reset_ilu(){
    lista_ilumi.classList.remove("mostrar_imagen1");
    lista_ilumi.classList.remove("mostrar_imagen2");
    lista_ilumi.classList.remove("mostrar_imagen3");
    lista_ilumi.classList.remove("mostrar_imagen4");
    lista_ilumi.classList.remove("mostrar_imagen5");
    lista_ilumi.classList.remove("mostrar_imagen6");
    lista_ilumi.classList.remove("mostrar_imagen7");
    lista_ilumi.classList.remove("mostrar_imagen8");
    lista_ilumi.classList.remove("mostrar_imagen9");
}


