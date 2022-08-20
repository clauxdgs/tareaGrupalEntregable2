let arrayItems = []; //se crea un array para almacenar los items

//let cantidadItems=0;// se crea un contados para guardar la cantidad de itemsdocument.addEventListener


//comprobar si hay datos guardados en localstorage al iniciar la pagina y mostrarlos en la lista
     if (localStorage.getItem('Item') != null) {
          let htmlContentToAppend="";

          arrayItems = JSON.parse(localStorage.getItem('Item'));
          let aItems = JSON.parse(localStorage.getItem('Item'));
          let cantidadItems = aItems.length;

          for (i = 0; i < cantidadItems; i++) {
               let elementoArray = aItems[i];
               //para el listado creo una lista que me muestre el elemento del array
               htmlContentToAppend += `<li class="itemLista">` + elementoArray + `</li>`;

               //envio todo el contenido del 
               document.getElementById('contenedor').innerHTML = htmlContentToAppend;
               console.log("HOLA  "+ arrayItems)

          }
     }
//  });
// document.body.onload = function{
   
//}

//creamos la funcion que escucha el boton de AGREGAR
 
 function AgregarItems(){
if(localStorage.getItem('Item')!= null){
     arrayItems=JSON.parse(localStorage.getItem('Item'));
}

     contenedorItems=document.getElementById('divcontenedor');contenedorItems.style.backgroundColor='#BEF4F9';
           /*obtenemos el valor de item que es el input 
          donde ingresamos los items 
          a listar y los almacenamos 
          en la variable ITEM*/
          let item = document.getElementById('item').value;
          /*creamos un htmlToAppend para
          almacenar lo que queramos 
          escribir en el HTML, 
          en este caso el listado 
          de datos que ingresamos */
          let htmlContentToAppend="";

          //verificamos que el contenido del input item no sea 0 y si no es cero lo almacenamos en el arrat de items con PUSH
          if(item !== ""){ 
               
          //cantidadItems++; //empezamos al ingresar un item con 1

               //console.log(cantidadItems); 

          //seteo cada item ingresado con el numero de dato que corresponde a su ingreso, del 1 para adelante y lo envio a localStorage.
               
          
          //Almaceno el item de acuerdo al numero de item que tendo en el arrayItems.
               arrayItems.push(item);
               localStorage.setItem('Item', JSON.stringify(arrayItems));
          
               console.log(arrayItems);
      }
      let aItems = JSON.parse(localStorage.getItem('Item'));
      let cantidadItems = aItems.length;
      for (i = 0; i < cantidadItems; i++) {
           let elementoArray = aItems[i];
           //para el listado creo una lista que me muestre el elemento del array
           htmlContentToAppend += `<li class="itemLista">` + elementoArray + `</li>`;

           //envio todo el contenido del 
           document.getElementById('contenedor').innerHTML = htmlContentToAppend;

      }

 
         
      }

//Creamos la funcion para Limpiar el campo donde se listan nuestros items
     function limpiarItems(){
          //limpio el localstorage
          localStorage.clear();
          //limpio el array de items y tb reseteo el conteo de items
          arrayItems = [];
          //cantidadItems = 0;
          //Elimino cada elemento de clase itemLista, o sea los items que envie al listado
          document.querySelectorAll('.itemLista').forEach((el) => el.remove());;

     }
 

 
 