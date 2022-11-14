let cont = 0;

const valor= document.querySelector('#valor'); //Seleccionamos el valor del contador
const botones = document.querySelectorAll('.boton'); //Seleccion de la lista de botnes

//Ejecuta callbalk por cada elemento
botones.forEach(boton =>{
    //Metodo de escucha
    boton.addEventListener('click', function(e){
        //Hace referencia al elemento cuyo detector de eventos desencadenó el evento
        const estilos = e.currentTarget.classList;


        if(estilos.contains('disminuir')){ //Valor a devolver
            cont--;
        }
        else if(estilos.contains('aumentar')){
            cont++;
        }
        else{
            cont = 0;
        }
        //Contenido de un texto
        valor.textContent = cont;

        //CAMBIO DE COLORES SEGÚN EL CONTADOR
        if(cont > 0){
            valor.style.color = '#008000';
        }
        else if(cont<0){
            valor.style.color = '#E03E3E';
        }
        else if(cont == 0){
            valor.style.color = '#505663';
        }

    })
})