# Bienvenidos al segundo proyecto del canal: To-Do App 2024.

### Les dejo el script para insertar el tailwindcss en su proyecto: ###
* <script src="https://cdn.tailwindcss.com"></script> *

### Si te gustaría editar tu terminal busca en google: ###
* Oh my posh *

### Si ustedes ingresan muchas tareas, van a ver que en un momento el fondo va a aparecer blanco. Esto se debe a que utilizamos la propiedad h-screen en el div. Para arreglar esto, necesitamos cambiar esto. ###
- <body class="bg-[#FEF3C7]"> al body le agregan el color que estamos utilizando.
- <div class="block px-2">   le borran tanto el bg, w-screen y h-screen.

### Colores que utilizamos ###
- bg-[#FFFBEB]
-  bg-[#FEF3C7]

### En caso de que el usuario inserte una tarea muy larga, necesitamos agregar la siguiente clase: 'break-words'. ###
*El código quedaría así :*
- //div barra : div en donde vamos a insertar la tarea, hora y los botones.
- const divBarra = document.createElement("DIV");
- divBarra.classList.add('w-full','h-auto','grid','grid-cols-3','justify-between','items-center','bg-[#FFFBEB]','border','border-black','rounded-lg','py-2','break-words');



### Les dejo algunas clases de Tailwind CSS explicadas.
- bg-yellow-50: Establece el color de fondo del elemento al tono amarillo con intensidad 50.
- h-screen: Fija la altura del elemento al 100% de la altura de la pantalla.
- w-screen: Fija el ancho del elemento al 100% del ancho de la pantalla.
- flex: Establece el contenedor como un contenedor flexible.
- flex-row: Orienta los elementos secundarios en fila.
- justify-center: Centra los elementos secundarios en el eje transversal.
- items-center: Centra los elementos secundarios en el eje principal.
- pt-10: Añade un relleno superior al elemento con un tamaño de 10 unidades.
- border: Agrega un borde de grosor al elemento.
- px-x(reemplaza la x por un número): Añade un relleno horizontal al elemento con un tamaño.
- py-x(reemplaza la x por un número): Añade un relleno vertical al elemento con un tamaño.
- text-amber-500: Establece el color del texto al tono ámbar con intensidad 500.
- text-center: Centra el texto horizontalmente.


