# PASOS PARA LEVANTAR LA APLICACION 

## Aplicación react 

### PASO 1: Clonar el repositorio de GitHub de la rama "main"

git clone "url"

### PASO 2: Actualizar la rama main git con el comando:

git pull origin main

### PASO 3: IMPORTANTE: Instalar todas las dependencias necesarias con el comando:

#### `npm install`

### PASO 4: Levantar la aplicacion con el comando

#### `npm start`
Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

### Persistencia de datos JSON-SERVER 

### PASO 1: Levantar nuestra FAKE_API con el comando

json-server -w -p 5000 db.json


**Nota: Es importante que lo levantemos en el puerto 5000 ya que nuestra aplicación hace referencia a ese URL para mas informacion revisar la carpeta "api" archivo "axios" **

http://localhost:5000/empleado
http://localhost:5000/administrador



