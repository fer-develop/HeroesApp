# HeroesApp

Este proyecto maneja validaciones en diferentes formularios, operaciones CRUD con REST API FireBase y uso de servicios con informacion estatica

## Servidor Desarrollo

Ejecutar `ng serve` para ejecutar el servidor en modo desarrollo. Navegar a `http://localhost:4200/`.

## Modulos al momento:

`About` Muestra información acerca del usuario que creo la pagina

`Agregar` Formulario con validaciones [requiered] y [pattern] mostrando mensajes de error con BootStrap 4

`Heroe` Muestra la informacion de un solo Heroe en una tarjeta

`heroe-tarjeta` Componente recibe los variables tipo Input de otros componentes para mostrar las tarjetas con los heroes registrados

`heroes` Toma los valores de los heroes en una lista Heroes de tipo heroe y la manda como variable al heroe-tarjeta para mostrar los heroes

`Home` Solo muestra un jumbo-tron con un titulo sobre la pagina

`navbar` Redirecciona hacia los distintos componentes

`Tabla` Muestra los hereos registrados en FireBase

`models/heroe.model.ts` Modelo de las propiedades del heroe

`pipes/filtrar-tabla` Pipe para filtrar la tabla segun campo(s)

`services/heroes.service.ts` Obtiene los valores de los heroes tanto de forma estatica como de forma dinamica mediante la API Rest de FireBase
