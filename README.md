# Aplicación Frutas

Este es un laboratorio para poner en práctica lo aprendido de desarrollo con Angular, para ello se hace uso del WebServices 'https://api.predic8.de/shop/products/'.


La aplicación se ha dividido en los siguientes elementos:

## Header

El Header es un título simple con una imagen que se ha colocado dentro del componente principal.

## Frutas

Se muestra un listado de frutas cargadas, resultado de consultar el WebServices mencionado.

## FrutasService

Servicio de apoyo para interactuar con el WebServices y transmitir a todos los componentes de la aplicación.

En ocasiones el API retorna errores de resultados por la velocidad o cantidad de consultas, cuando esto sucede se hace un reintento cada 5 segundos para obtener resultados y mostrarlos al usuario.

Para renderizar el resultado del WebService se hace uso de las siguientes clases:

### Pagina

Clase para manejar el resultado de la consulta GET a la api /shop/products/

### FrutaGeneral

Clase de conversión de los productos obtenidos de la consulta GET a la api /shop/products/

### FrutaDetalle

Clase para manejar el resultado de la consulta GET a la api /shop/products/{id}

## Botones

Componente para mostrar los botones de navegación del usuario: Inicio, Atras y Siguiente; los cuale spermiten navegar entre los diferentes resultados que provee el API.

## Cargando

Imagen para indicar al usuario que se está cargando la información, este se mostrará unicamente bajo la condición de estar consultado el WebService.