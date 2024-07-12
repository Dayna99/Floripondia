function mostrarSeccion(idDesccion) 
{

    var secciones=document.getElemenentsByTagName("section")
    for (var i =0;i < secciones.length; i++)
        {
            secciones[i].style.displsy="nome";

        }
        var seccion=document.getElementById(idDesccion);
        seccion.style.display="block";


}