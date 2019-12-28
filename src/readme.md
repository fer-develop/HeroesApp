Introduccion a Angular / Aplicacion de Heroes

1.- Para crear un Proyecto en angular> ng new nombredelaaplicacion
2.- Crear los componentes que vamos a necesitar en este caso es necesario,
un componentes heroes que mostrara la informacion de todos los personajes
que son cargados desde el servicio heroes.service
3.- Crear un componente heroe donde se mostrara la informacion de un solo heroe
y otro componente llamado buscar que mostrara los heroes que coincidan con un parametro
especificado
4.- Definir cuales seran las rutas de navegacion dentro de la const que guarda las rutas colocar todas las rutas necesarias para la funcion de la navegacion entre pantallas y al finalizar poner { path: '\*\*' pathMatch:'full' redirectTo:'home'} para redireccionar siempre a ese modulo en caso de que el usuario meta una ruta no especificada
4.- Para NAVEGAR de una pagina a otra hay dos formas de realizarlo una es por medio del [routerLink] = "['/elmoduloalquetequeresmove', 'textoquequeresmandar']" dentro del boton del templete, la otra forma es invocando un eventro ejemplo (click)="navegar(textoquequeresmandar.value)" y dentro del propio componente especificar this.route.navigate(['/modulo',texto]); en los dos casos es lo mismo pero en el segundo caso es mas sencillo la aplicacion de validaciones
5.- Para cachar el valor del parametro dentro del otro modulo es necesario Importar el activeRoute y se cacha de la siguiente manera:
-Declarar una variable de tipo activeRoute en el constructor una vez hecho esto llamar al metodo this.route.params.subscribe( params => clg(params['texto'])) una vez nos subscribimos este metodo "oira" todos los cambios que sucedan dentro de esa url y cachara el parametro, un PUNTO IMPORTANTE es que dentro de las rutas que deficinas tendras que especificar cual sera el nombre del parametro que vas a cachar ejemplo path:'ruta/:texto' el parametro a cachar en este caso se llama texto
6.- Para buscar es necesario asignarle una "nombre al campo del input" eso se hace: #nombredelavariable y hacemos referencia a ella por medio de un evento ejemplo: (keyup)="buscar(nombredelavariable.value)" una vez hecho esto el metodo debe llamar a otro metodo del servicio que reciba la informacion que necesito y la iguale a un arreglo local

--Se pueden implementar componentes que resiban variables Input o Output para realizar con esta informacion algo en especifico
--En este proyecto por ejemplo: Puedes ahorrar todo un modulo html usandolas agregando complejidad al proyecto pero haciendo mas liviano y reutilizable para otro modulos que quieran hacer uso de este.
---Para enviar los parametro es necesario implementar la etiqueta de ese componente ejemplo:
<app-componente [variable]="variable"></app-componente> la variable entre corchetes es el nombre de la variable especificado en el app-componente y la otra variable es la implementada por parte de del propio componente que la invoca

Temas a tener en cuenta:
-Es necesario importar las bibliotecas de bootstrap al angular json en la parte de styles y scripts
-Es necesario importar los servicios y componentes que se crearan:
Para crear un componentes: ng g c nombredelcomponentes o n g c carpeta/nombredelcomponente
Para el servicio es similar: ng g s si no queremos cargar los estilos -is y si no queremos el archivo de pruebas unitarias es el --skipTests
