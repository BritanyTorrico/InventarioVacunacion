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

### PERSISTENCIA DE DATOS CON JSON-SERVER 

### PASO 1: Levantar nuestra FAKE_API con el comando

#### json-server -w -p 5000 db.json


**Nota: Es importante que lo levantemos en el puerto 5000 ya que nuestra aplicación hace referencia a ese URL para mas informacion revisar la carpeta _api_ archivo _axios.js_ **

http://localhost:5000/empleado 

http://localhost:5000/administrador


### USUARIO ADMINISTRADOR

## username: admin
## password: admin


### USUARIO EMPLEADO
**1. Para poder acceder a las cuentas de los empleados una vez ingresado al sistema con la cuenta de administrador , se esta mostrando en la tabla de vista de empleados los username y password correspondientes de los empleados**

**2. Tambien puede crear un empleado y ver su username y password asignado en la tabla de vista empleados**


