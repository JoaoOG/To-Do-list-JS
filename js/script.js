const lista = document.querySelector(".lista");


   




function agregar(){

    const nueva = document.querySelector(".nuevatarea").value;
    const agregar = document.createElement('li');
    const agregarb = document.createElement("input");

    agregarb.type = "button";
    agregarb.value = "X";
    agregarb.classList = "clear"


    agregar.textContent = nueva;
    agregar.classList = "tarea";
    if (nueva ==="") {
      alert("No hay tareas por registrar");
    } else {
      agregarb.addEventListener("click", function() {
        agregar.parentNode.removeChild(agregar); 
        
      });
    
        lista.appendChild(agregar);
        agregar.appendChild(agregarb);
        limpiar();
    };

    

};

function limpiar() {
  const dato = document.querySelector(".nuevatarea").value = "";
  dato;
};

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function quitar(){
    const tarea = document.querySelector(".tarea");

    lista.remove[tarea];
   
}


window.addEventListener("keydown", (e)=>{


  if(e.key === 'Enter' ){
      agregar();
  };
          
  });

  










