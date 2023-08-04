# API Notes 

## 📜 Sumario

La API de Gestión de Notas es una poderosa herramienta que permite a los usuarios, tanto anónimos como registrados, gestionar de manera eficiente sus notas personales. A continuación, se presentan las funcionalidades principales de la API:

### Anónimo:

**Login:** Los usuarios anónimos pueden autenticarse en la plataforma utilizando su dirección de correo electrónico y contraseña.
**Registro:** Los usuarios tienen la opción de registrarse en la aplicación proporcionando su dirección de correo electrónico y contraseña.

### Usuarios Registrados:

**Ver su listado de notas:** Los usuarios registrados pueden acceder a un listado que muestra únicamente los títulos de sus notas, facilitando una vista rápida y organizada.
**Visualizar una nota:** Los usuarios pueden ver el contenido completo de una nota específica, incluyendo su título, texto y categoría.
**Crear una nota:** Los usuarios tienen la capacidad de crear nuevas notas, añadiendo un título, texto y seleccionando una categoría única de las disponibles, las cuales no pueden ser editadas.
**Modificar sus notas:** Los usuarios registrados pueden editar el título, texto y categoría de sus notas existentes, brindándoles la flexibilidad de mantener sus apuntes actualizados.
**Marcar una nota como pública:** De manera predeterminada, todas las notas son privadas y solo son visibles por el usuario que las creó. Sin embargo, si el usuario decide marcar una nota como pública, esta se vuelve accesible para cualquier usuario, tanto registrado como no registrado, a través de una URL específica.
**Eliminar una nota:** Los usuarios tienen la opción de eliminar una nota existente si ya no es relevante o necesaria.
**Crear, editar y borrar categorías:** La API permite a los usuarios gestionar las categorías predefinidas asociadas a sus notas, lo que les permite organizar y clasificar sus apuntes de manera más efectiva.
**Asociar una imagen a cada nota:** Los usuarios tienen la capacidad de enriquecer sus notas asociando una imagen única a cada una, lo que proporciona una experiencia visual mejorada.

La API de Gestión de Notas ofrece una interfaz segura y completa para administrar eficazmente las notas personales, permitiendo a los usuarios mantener un control total sobre su información mientras disfrutan de diversas características adicionales para personalizar y mejorar su experiencia.

## 🔗 Documentación

La documentación de este proyecto la puedes encontrar en el siguiente enlace de Github pages: https://github.com/GadorH/api-notes.git.

## 💻 Tecnología

Este proyecto de api de notas ha sido desarrollado utilizando las siguientes librerias:

### Prisma:
Para llevar a cabo la gestión de las bases de datos de manera eficiente y estructurada. Prisma ha demostrado ser una elección excelente debido a las siguientes ventajas:

1.**Type-Safe Queries:** Prisma utiliza un sistema de tipos para las consultas, lo que significa que los errores de sintaxis en las consultas se detectan en tiempo de compilación en lugar de tiempo de ejecución. Esto aumenta la confiabilidad del código y evita errores costosos.

2.**ORM y CRUD Simplificados:** Prisma proporciona un mapeo de objetos-relacionales (ORM) que facilita la manipulación de los datos de la base de datos a través de operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Esto simplifica la interacción con la base de datos y acelera el desarrollo.

3.**Generación de Código Automático:** Prisma genera automáticamente modelos de datos y tipos para la base de datos en función del esquema definido. Esto reduce la carga de trabajo manual y mantiene la consistencia en el código.

4.**Optimización de Consultas:** Prisma realiza un seguimiento de las consultas realizadas y las optimiza para mejorar el rendimiento de las operaciones de base de datos, lo que garantiza una mayor eficiencia en el acceso a los datos.

5.**Migraciones y Versionado:** Prisma permite crear y gestionar migraciones de base de datos de manera sencilla. Esto facilita la evolución de la base de datos a medida que la aplicación se desarrolla y se actualiza.

6.**Soporte Multi-base de Datos:** Prisma es compatible con diferentes sistemas de bases de datos, lo que brinda flexibilidad para adaptarse a las necesidades específicas del proyecto.

7.**Seguridad:** Prisma incorpora buenas prácticas de seguridad para proteger los datos y evitar vulnerabilidades comunes en el acceso a la base de datos.



### Multer:
Para gestionar la subida de archivos a la base de datos de manera efectiva y segura. Multer ha demostrado ser una opción sólida debido a las siguientes ventajas:

1.**Manejo de Cargas de Archivos:** Multer simplifica enormemente el proceso de carga de archivos al servidor. Permite a los usuarios cargar imágenes únicas y asociarlas con sus notas de manera sencilla y rápida.

2.**Soporte para Diferentes Tipos de Archivos:** Multer puede gestionar varios tipos de archivos, lo que permite a los usuarios cargar imágenes en diferentes formatos (JPG, PNG, etc.), lo que mejora la flexibilidad de la aplicación.

3.**Renombrado y Almacenamiento Seguro:** Multer se encarga de cambiar el nombre de los archivos cargados para evitar colisiones de nombres y almacenarlos de manera segura en el servidor.

4.**Manejo de Errores:** Multer proporciona mecanismos para manejar errores en la carga de archivos, lo que permite una respuesta adecuada a los problemas de carga y asegura una mejor experiencia del usuario.



### Joi:
Para validar la información recibida en las solicitudes de body y params. Con Joi, podemos definir reglas precisas y personalizadas para validar los datos, lo que garantiza que solo se acepten datos válidos y seguros. Sus mensajes de error claros facilitan la identificación y solución de problemas, mientras que su facilidad de uso y capacidad para validar tipos de datos complejos agilizan el proceso de implementación. Joi nos ha permitido construir una API más confiable, protegida contra vulnerabilidades y con una experiencia de usuario mejorada.


### Jwt:
Para gestionar la autenticación y autorización de los usuarios. Cuando un usuario inicia sesión correctamente, se genera un token JWT.Este token es firmado digitalmente con una clave secreta del servidor, lo que garantiza su autenticidad y evita alteraciones no autorizadas. Durante las solicitudes posteriores, el token se envía en la cabecera de la petición y es validado por el servidor. De esta manera, JWT nos ha permitido asegurar la protección de las rutas y recursos sensibles, asegurándonos de que solo los usuarios autorizados puedan acceder a ellos, lo que mejora significativamente la seguridad y la confianza en nuestra API.

### Bycript:
Para gestionar de forma segura el almacenamiento y la comparación de contraseñas de los usuarios. Cuando un usuario se registra o actualiza su contraseña, utilizamos Bcrypt para hashear la contraseña antes de almacenarla en la base de datos. Esto garantiza que las contraseñas no se almacenen en texto plano, aumentando significativamente la seguridad y evitando el acceso no autorizado a las credenciales de los usuarios. Además, al utilizar Bcrypt para comparar contraseñas durante el proceso de autenticación, podemos verificar la autenticidad de las credenciales proporcionadas por el usuario sin exponer las contraseñas reales en el proceso. Gracias a Bcrypt, hemos fortalecido la protección de la información sensible de nuestros usuarios y mejorado la integridad y seguridad general de nuestra API.

### Open api:
para generar y mantener una documentación completa y estructurada de todos los endpoints y funcionalidades disponibles. Utilizamos la especificación OpenAPI para describir cada ruta, los parámetros de entrada requeridos, las respuestas esperadas y los posibles errores. Gracias a esta documentación, los desarrolladores y usuarios pueden acceder de manera sencilla a una referencia detallada de la API, lo que facilita la comprensión de su funcionamiento y uso. Además, esta documentación se mantiene actualizada automáticamente a medida que realizamos cambios en la API, lo que garantiza que siempre esté sincronizada con la versión en producción. OpenAPI nos ha permitido mejorar la colaboración, fomentar las buenas prácticas de desarrollo y brindar una experiencia más transparente y amigable para aquellos que interactúan con nuestra API.



## 🚀 Puesta a punto

### Instalación 🔧

1.**Instalación de Dependencias:** Ejecute el comando `npm install` en el directorio raíz del proyecto para instalar todas las dependencias necesarias.

2.**Configuración de Variables de Entorno:** Cree un archivo llamado `.env` en el directorio raíz del proyecto y proporcione los valores requeridos para las variables de entorno. Asegúrese de configurar correctamente las variables necesarias, como la conexión a la base de datos u otras configuraciones específicas.

3.**Ejecución de la API:** Una vez que haya instalado las dependencias y configurado las variables de entorno, puede ejecutar la API con el comando `npm start`. La API estará disponible y se pondrá en funcionamiento para recibir solicitudes en el puerto especificado en la variable de entorno correspondiente.



## 👩🏻‍💻🧑🏻‍💻👩🏻‍💻Contribuyendo

### Metodología 📈

En la realización de este proyecto de la API, hemos seguido una metodología colaborativa basada en la distribución equitativa de tareas y el uso de convenciones de commits.

El equipo de desarrollo estuvo compuesto por tres participantes que trabajaron de manera conjunta para contribuir al éxito del proyecto. Durante el desarrollo, hemos aplicado una metodología ágil que nos permitió realizar entregas incrementales y mantener una comunicación fluida entre los miembros del equipo.

Una de las prácticas clave que implementamos fue el uso de convenciones de commits, específicamente los Conventional Commits (https://www.conventionalcommits.org/en/v1.0.0/). Estas convenciones nos ayudaron a mantener un historial de commits consistente y bien estructurado, facilitando la colaboración y la comprensión de los cambios realizados en el proyecto.

Además, establecimos reuniones regulares para revisar y discutir el progreso del proyecto, así como para compartir ideas y solucionar posibles problemas. Durante estas reuniones, distribuimos las tareas de manera equitativa, aprovechando las fortalezas y habilidades individuales de cada miembro del equipo.

También utilizamos herramientas de control de versiones, como Git, para gestionar las actualizaciones y los commits realizados durante el desarrollo del proyecto. Esto nos permitió mantener un seguimiento preciso de los cambios y facilitó la colaboración en paralelo.

En resumen, hemos utilizado una metodología colaborativa basada en la distribución equitativa de tareas y el uso de convenciones de commits. A través de reuniones regulares y el uso de herramientas de control de versiones, logramos una colaboración efectiva y un historial de commits claro y comprensible.

### Autores 🖋

<table>
<tbody>
<tr>
<td align="center">
<a href="https://github.com/martavalle95" rel="nofollow">
<img src="https://github.com/martavalle95.png" width="100px;" alt="" style="max-width: 100%;">
<br>
<sub><b>Marta Valledor</b></sub>
</a>
</td>
<td align="center">
<a href="https://github.com/Chazychast" rel="nofollow">
<img src="https://github.com/Chazychast.png" width="100px;" alt="" style="max-width: 100%;">
<br>
<sub><b>Adrián Fernández</b></sub>
</a>
</td>
<td align="center">
<a href="https://github.com/GadorH" rel="nofollow">
<img src="https://github.com/GadorH.png" width="100px;" alt="" style="max-width: 100%;">
<br>
<sub><b>Gádor Heras</b></sub>
</a>
</td>
</tr>
</tbody>
</table>
