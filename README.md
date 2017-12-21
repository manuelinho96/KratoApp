# KratoApp

Primera versión de la aplicación krato web para ver comercios y realizar consultas sobre ellos.

# Sobre la estructura de la aplicación.

Se implementó el componente comercio-list el cual recibe una lista de comercios y ejecuta el componente
comercio para mostrar los comercios en dicha lista.

Se implementaron los componentes de todos los comercios (all-commerce), comercios por sector(sector-commerce)
y comercios encontrados por búsqueda (search) para poder realizar las peticiones adecuadas al servicio
comercio y así realizar la visualización de los mismos a través del comercio-list.

Se trabajó con json para el manejo de datos (json-server en el puerto 3000).

# Sobre Grunt

Para esta versión de la aplicación se pidió utilizar grunt. A pesar de investigar sobre este manejador de tareas
no encontré la forma de incluirlo en la aplicación. Por ello decidí no utilizarlo.
Espero esto no penalice gravemente la realización de mi trabajo y no ponga en duda mi capacidad de adaptarme a
nuevas tecnologías.

# Sobre los casos de prueba

En los casos utilizados decidí mezclar la información de título de algunos comercios con la descripción de otros.
Por ejemplo, al realizar la búsqueda: "locatel" se visualizan comercios como holic o excelcior gamma pues en su
descripción incluí esta palabra. Con ello ejemplifico mi sistema de búsqueda.
