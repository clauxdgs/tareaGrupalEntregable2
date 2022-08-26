let arrayItems = []; //se crea un array para almacenar los items

//let cantidadItems=0;// se crea un contados para guardar la cantidad de itemsdocument.addEventListener


//comprobar si hay datos guardados en localstorage al iniciar la pagina y mostrarlos en la lista
     if (localStorage.getItem('Item') != null) {
          let htmlContentToAppend="";

          arrayItems = JSON.parse(localStorage.getItem('Item'));
          let aItems = JSON.parse(localStorage.getItem('Item'));
          let cantidadItems = aItems.length;
          //hacemos el recorrido por el array para mostrarlos
          for (i = 0; i < cantidadItems; i++) {
               let elementoArray = aItems[i];
               //para el listado creo una lista que me muestre el elemento del array
               htmlContentToAppend += `<li class="itemLista">` + elementoArray + `</li>`;

               //envio todo el contenido del 
               document.getElementById('contenedor').innerHTML = htmlContentToAppend;
             //  console.log("HOLA  "+ arrayItems)

          }
     }


//creamos la funcion que escucha el boton de AGREGAR
 
 function AgregarItems(){
     //si el local storage NO esta vacio
if(localStorage.getItem('Item')!= null){
     //array Items obtiene los Items del array de items de local storage, gracias a JSON.parse convertimos el texto que tenemos en un array 
     arrayItems=JSON.parse(localStorage.getItem('Item'));
}

     contenedorItems=document.getElementById('divcontenedor');
     contenedorItems.style.backgroundColor='#BEF4F9';
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
                       
          
          //Almaceno el item en el array de items
               arrayItems.push(item);
          //localstorage guarda cada item con la clave ITEM y como texto gracias a JSON.Stringify.
               localStorage.setItem('Item', JSON.stringify(arrayItems));
          
               console.log(arrayItems);
      }else{
          alert('Ingrese un dato');
      }      
      //obtengo el array de items con json.parse para que el contenido de localstorage sea un array y no texto como lo seteamos anteriormente constringify
      let aItems = JSON.parse(localStorage.getItem('Item'));
      //almacenamos el tamaño del array de items en cantidadItems
      let cantidadItems = aItems.length;

      //hacemos el recorrido por el arrayItems para mostrar cada elemento
      for (i = 0; i < cantidadItems; i++) {
           let elementoArray = aItems[i];
           //para el listado creo una lista que me muestre el elemento del array
           htmlContentToAppend += `<li class="itemLista">` + elementoArray + `</li>`;

           //envio todo el contenido del array al contenedor
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
 

 
 