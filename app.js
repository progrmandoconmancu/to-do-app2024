//seleccionar los elementos:
const obtenerValor = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnTarea');
const divTareas = document.getElementById('divTarea');

//primero necesitamos saber el valor que ingreso el usuario en el input. 
obtenerValor.addEventListener('input',()=>{
    
})


//cuando la persona haga clic en el botón, la aplicación va a tener que comprobar si el usuario ingreso una tarea o no.
btnAgregar.addEventListener('click',()=>{
    if(obtenerValor.value === ''){
        console.log('El valor esta vacío');
    }else{
        
        //div barra : div en donde vamos a insertar la tarea, hora y los botones.
        const divBarra = document.createElement("DIV");
        divBarra.classList.add('w-full','h-auto','grid','grid-cols-3','justify-between','items-center','bg-[#FFFBEB]','border','border-black','rounded-lg','py-2','break-words');

        //crear el p en donde vamos a insertar la tarea.
        const pTarea = document.createElement('P');
        pTarea.classList.add('text-center');
        pTarea.textContent = obtenerValor.value;

        //crear la hora:
        const horaActual = new Date();
        let horaCompleta = `${agregarCero(horaActual.getHours())}:${agregarCero(horaActual.getMinutes())}:${agregarCero(horaActual.getSeconds())}`;

        //crear el p en donde vamos a insertar la hora.
        const pHora = document.createElement('P');
        pHora.classList.add('text-center');
        pHora.textContent = horaCompleta;
        
        //crear div para los botones
        const divBotones = document.createElement("DIV");
        divBotones.classList.add('flex','flex-row','justify-center','items-center','gap-5');

        //botón 1 = editar
        const botonEdit = document.createElement('BUTTON');
        botonEdit.classList.add('border','border-[#647687]','bg-[#647687]','px-5','py-2','text-white','rounded','text-sm');
        botonEdit.textContent='Edit';

        //creando el evento para poder editar el valor
        botonEdit.addEventListener('click',()=>{
            let valorNuevo =  prompt('Ingrese el nuevo valor');
            botonEdit.parentElement.parentElement.firstChild.textContent = valorNuevo;
        })


         //botón 2 = editar
         const botonCancelar = document.createElement('BUTTON');
         botonCancelar.classList.add('text-red-500','font-bold');
         botonCancelar.textContent='X';
         //creando evento para eliminar el valor
         botonCancelar.addEventListener('click',()=>{
           botonCancelar.parentElement.parentElement.remove();
        })
         

         //insertando los valores en el DIV
         divBotones.appendChild(botonEdit);
         divBotones.appendChild(botonCancelar);
         divBarra.appendChild(pTarea);
         divBarra.appendChild(pHora);
         divBarra.appendChild(divBotones);
         divTareas.appendChild(divBarra);

         //una vez que me muestra el div, vuelvo a poner en blanco el input.
         obtenerValor.value= '';

        
    }
})

//crear función para agregar el cero cuando es menor que 10.
function agregarCero(valoresDeLaHora){
    return valoresDeLaHora < 10 ? 0 + `${valoresDeLaHora}` : `${valoresDeLaHora}`;
}
