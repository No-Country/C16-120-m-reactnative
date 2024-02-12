# Trekking App

Describiremos los pasos para correr la app con expo.

**Es necesario tener las siguientes herramientas instaladas en su máquina**
- node
- python



## 1. Instalar Expo-cli

[Expo official site](https://expo.dev/)

```
npm install -g expo-cli
```

## 2. Clonar el repositorio del proyecto

Link del repo.

## 3. Crear y activar entorno virtual

La creación y utilización del entorno virtual no es obligatoria aunque muy recomendada.

¿Por qué usar un entonrno virtual?

Puedes aislar tus dependencias y configuraciones de Node.js de las instalaciones a nivel de sistema. Esto garantiza que tu proyecto utilice la versión específica de Node.js y los paquetes relacionados que especifiques, sin interferir con otros proyectos o con la instalación global de Node.js en tu sistema.

Pasos:

1. Posicionarse en el root del proyecto.
2. Crear el entorno virtual:
  * Windows:
    ```
    python -m nodeenv --node=21.6.1 .venv
    ```
  * Linux:
    ```
    python3 -m nodeenv --node=21.6.1 .venv
    ```
3. Activar entorno virtual:
    ```
    . .venv/bin/activate
    ```
4. Instalar dependencias:
    ```
    npm install -g yarn
    yarn install
    ```
5. Hacer que git ignore este nuevo directorio
    * Agregar al archivo `.gitignore` el directorio `.venv/`.


Para desactivar el entorno en caso de ser necesario: `deactivate_node`.

## 4. Correr app con expo

1. Instalar Expo Go en tu dispositivo móvil
2. Correr app desde la terminal:
    ```
    yarn expo start
    ```
3. Escanear QR de la terminal con el dispositivo