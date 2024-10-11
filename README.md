# RaffleSonia - Sistema de Gestión de Sorteos y Rifas

RaffleSonia es un sistema de gestión de sorteos y rifas diseñado para facilitar la creación, gestión y participación en rifas. Desarrollado con **Vue.js** en el frontend y **Node.js** con **Mongoose** en el backend, esta aplicación permite a los administradores configurar sorteos, gestionar boletos y seleccionar numeros ganadores

## Tabla de Contenidos

- [Instalación](#instalación)
- [Características](#características)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Guía de Uso](#guía-de-uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Pruebas](#pruebas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación

### Clonar el repositorio

```bash
git clone https://github.com/devold112/rafflesonia.git

cd rafflesonia
```

## Backend : Clonar repositorio backend del proyecto (https://github.com/DevOld112/raffle-backend)

Dirígete a la carpeta backend:

```bash
cd backend
```
Instala las dependencias necesarias:

```bash
npm install
```

Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto con la siguiente información:
```bash
DB_CONNECTION=<tu_url_de_mongoDB>
JWT_SECRET=<tu_clave_secreta>
PORT=<puerto_del_servidor>
```

DB_CONNECTION: La URL de conexión a tu base de datos MongoDB.

JWT_SECRET: Un string aleatorio usado para firmar tokens JWT.

PORT: El puerto en el cual se ejecutará el servidor (opcional).


# Características
### Gestión de sorteos
Los administradores pueden crear sorteos y definir los detalles, como título, descripción, cantidad de boletos, precio, premios y fecha de finalización.
Visualización clara de los sorteos activos, finalizados y próximos.

### Compra de boletos
Los usuarios pueden adquirir boletos para participar en los sorteos. El sistema está diseñado para que los boletos sean únicos por sorteo, asegurando que cada boleto tenga un número único.

### Selección de ganadores
Los administradores pueden seleccionar automáticamente a los ganadores de un sorteo. El sistema se encarga de elegir uno o varios ganadores según la cantidad de premios disponibles.

### Autenticación segura
Uso de JWT (JSON Web Tokens) para la autenticación de usuarios y administradores, garantizando la seguridad en la gestión de sorteos y transacciones.
Notificaciones
Los usuarios ganadores son notificados cuando ganan un sorteo, y se les muestra el premio correspondiente.

# Arquitectura del Proyecto

``` bash
root/
│
├── backend/              # Código backend con Node.js, Express y Mongoose
│   ├── models/           # Modelos de Mongoose para sorteos, usuarios, etc.
│   ├── routes/           # Rutas para la API
│   ├── controllers/      # Controladores que gestionan la lógica de negocio
│   └── services/         # Servicios para funciones como el manejo de rifas
│
├── frontend/             # Código frontend con Vue.js
│   ├── components/       # Componentes reutilizables de la interfaz
│   ├── views/            # Vistas de páginas como el listado de rifas
│   ├── stores/           # Manejo del estado global con Pinia
│   └── utils/            # Funciones y helpers reutilizables
│
└── README.md             # Documentación del proyecto


