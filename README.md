# SmartJob-QA-Engineer-Test

## El presente proyecto forma parte de una entrevista técnica funcional, a fines de evaluar conocimientos y prácticas para QA Manual como para automatización de procesos.

**SOBRE EL PROYECTO...**

Dichas habilidades duras se aplican puntualmente al testeo automatizado de una funcionalidad de alto impacto de negocio en el sitio web oficial de la empresa Tanner (Chile).
 
 
 
 
**FRAMEWORK**

El presente proyecto aborda la automatizción de las pruebas haciendo uso de **Cypress + JavaScript**, siendo este un entorno de pruebas muy versatil. Esto se debe al lenguaje y aserciones de alto nivel, así como de las librerías que trae ya incorporadas, tales como Mocha, Chai y Faker.




**INSTALACIÓN**

* Copiar el enlace de este repositorio.
* Abrir una terminal o línea de comandos, y navegar hasta la carpeta donde se desea clonar dicho repositorio. En Windows, se puede emplear el comando "cd" para navegar el sistema de archivos.
* Una vez en la carpeta de destino, tipear el comando "git clone", segudo del enlace copiado en el primer paso. En este caso quedaría "git clone https://github.com/RenzoCresta/SmartJob-QA-Engineer-Test.git"
* Presiona Enter para ejecutar el comando. Esto descargará todos los archivos del repositorio en la carpeta actual.
* Para instalar las dependencias necesarias para el correcto funcionamiento del entorno de pruebas, y al ser un proyecto de **Node.js**, es necesario ingresar en la terminal el comando "npm install"
* Una vez que se hayan instalado todas las dependencias necesarias, el proyecto debería estar listo para ser utilizado.




**EJECUCIÓN DE LOS TEST**

Una vez se haya clonado el repositorio e instalado correctamente el entorno de pruebas junto a sus dependencias, podremos proceder a ejecutar los casos de prueba de manera automatizada.

Para ello, haciendo uso de la misma terminal o línea de comandos, sin cambiar de directorio, habrá que ejecutar el comando "npx cypress open". Esto ejecutará la interfaz gráfica de **CYPRESS**, donde el usuario podrá seleccionar su Navegador Web de preferencia. Seguido podrá seleccionar el Test Suite y Casos de Prueba a ejecutar, para posteriormente observar en tiempo real la compilacion y ejecución de los scripts, pudiendo consultar en cualquier momento el paso a paso de las pruebas y los resultados obtenidos.

Por último, si el usuario desea visualizar de manera más sencilla y didáctica los resultados de las pruebas contenidas en el Test Suit, podrá ejecutar en su terminal el comando "npm run cypress". Esto activará el generador automático de reportes **Cypress Mochawesome Reporter**, el cual devolverá un archivo .html listo para visualizar los resultados en cualquier navegador, suplementando los datos arrojados por las pruebas con gráficos y filtros customizables.

Ante cualquier duda sobre la ejecución de **CYPRESS**, se recomienda recurrir a la documentación oficial en https://docs.cypress.io/guides/overview/why-cypress




