**Usage**
docker build . -t {your_docker_username}/the-things-io
docker run -e PRIVATE_KEY={your_private_key} -m 1g -p {your_port}:3141 -d {your_docker_username}/the-things-io

**Prueba Técnica: Desarrollo de Servidor API REST Dockerizado con Express**

Descripción del Proyecto:

Desarrolla un servidor API REST utilizando solo JavaScript (sin TypeScript) y Express que permita realizar operaciones de escritura y lectura sobre un archivo de usuarios. Cada registro del archivo de usuarios debe tener un formato "APELLIDOS, NOMBRE". El servidor debe ser capaz de manejar archivos de gran volumen con millones de registros sin saturar el rendimiento del servidor. Además, el servidor API REST debe estar dockerizado con un límite de memoria de 1GB para garantizar la eficiencia y el rendimiento. Se requiere el uso de documentación JSDoc para documentar el código.

Requerimientos:

1. Escritura de Usuarios:
   1. Endpoint: POST /users
   1. Crea un nuevo usuario en el archivo de usuarios.
   1. La solicitud debe incluir los datos del usuario en formato JSON: { "name": "NOMBRE", "surnames": "APELLIDOS" }.
1. Lectura de Usuarios:
- Endpoint: GET /users
- Devuelve una lista de todos los usuarios en el archivo de usuarios que coincidan con los parámetros de búsqueda especificados.
- Se pueden utilizar los siguientes parámetros de consulta:
- name: Busca todos los usuarios que coincidan con el nombre especificado.
- surnames: Busca todos los usuarios que coincidan con el apellido especificado.
- Si no se proporcionan parámetros de consulta, se devolverán todos los usuarios.

Consideraciones Adicionales:

- Implementa la gestión adecuada de errores y validación de datos en las operaciones de escritura y lectura.
- Diseña el servidor API REST de manera que pueda manejar archivos de gran volumen con millones de registros sin saturar el rendimiento del servidor.
- Dockeriza el servidor API REST con un límite de memoria de 1GB para garantizar la eficiencia y el rendimiento.
- Utiliza buenas prácticas de codificación y diseño para garantizar la mantenibilidad y la escalabilidad del código.

Entrega:

Proporciona el código fuente completo del servidor API REST dockerizado con instrucciones claras sobre cómo construir y ejecutar el contenedor Docker con un límite de memoria de 1GB. Además, incluye instrucciones sobre cómo probar el servidor API REST y cómo verificar su rendimiento con archivos de gran volumen.

Nota:

Se valorará no solo la funcionalidad del servidor API REST, sino también la eficiencia, la optimización, la calidad del código y la correcta dockerización del servidor, así como el uso adecuado de la documentación JSDoc para documentar el código.
