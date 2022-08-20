let arrayItems = []; //se crea un array para almacenar los items
let cantidadItems=0;// se crea un contados para guardar la cantidad de items


//creamos la funcion que escucha el boton de AGREGAR
     function AgregarItems(){
          let item = document.getElementById('item');
          let htmlToAppend="";
          
          arrayItems.push(item);
          console.log(arrayItems);
      }

//Creamos la funcion para Limpiar el campo donde se listan nuestros items
     function LimpiarItems(){

     }
 

 
