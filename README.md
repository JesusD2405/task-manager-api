# Task Manager API

_Proyecto en Node.js bajo Typescript, que contiene el desarrollo de una Api para gestión de Tareas._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

1. [Node](https://nodejs.org/es/blog/release/v22.12.0)
1. [Npm](https://...)

_Es importante tener instaladas las herramientas anteriormente mencionadas para iniciar los siguientes pasos._

## Instalación 🔧

_*** Preparando nuestras variables de entorno ***_

_Nos situamos en la raíz y hacemos una copia del archivo .env.example reemplazando la extensión del archivo por el nombre del ambiente (dev)_

```
 cp .env.example .env.dev
```

_En nuestro nuevo archivo .env.dev modificamos y adaptamos las variables de entorno_

_Finalmente, en la raíz del proyecto ejecutamos_

```
 npm run dev
```

_De esta manera tendríamos la api levantada de manera local y con las variables de Desarrollo._

## Despliegue 📦

_*** Preparando nuestras variables de entorno ***_

_Nos situamos la raíz del proyecto y hacemos una copia del archivo .env.example reemplazando la extensión del archivo por el nombre del ambiente a desplegar:_

1. dev (Desarrollo).
2. pro (Producción).

```
 cp .env.example .env.ambiente
```

_En nuestro nuevo archivo .env.ambiente modificamos y adaptamos las variables de entorno para posteriormente compilar el proyecto con el siguiente comando_

```
 npm run build
```

_Luego de compilar, finalmente levantamos el proyecto con_

```
 npm run start
```

## Construido con 🛠️

_Herramientas utilizadas en el proyecto:_

- [Node v22.12](https://nodejs.org/es/blog/release/v22.12.0) - ...
- [Typescript v5.7.2](https://...) - ...
- [Express](https://...) - ...
- [Mongo](https://...) - ...
- [Mongosee](https://...) - ...

---

Desarrollado por [Jesús David Pérez](https://github.com/JesusD2405) ❤️🚀
