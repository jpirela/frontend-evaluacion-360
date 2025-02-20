# Evaluación 360 - Frontend

Este es el frontend del sistema de Evaluación 360, desarrollado con Node.js, React. Proporciona autenticación, gestión de empleados, evaluaciones y feedback.

## 📌 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Yarn](https://yarnpkg.com/) (opcional, pero recomendado)

## ⚙ Configuración

1. Clona el repositorio:

   ```sh
   git clone https://github.com/jpirela/frontend-evaluacion-360.git
   cd frontend
   ```

2. Instala las dependencias:

   ```sh
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   #VITE_NODE_ENV=production
   VITE_NODE_ENV=development
   VITE_BASE_URL_PROD=http://192.168.1.125:3030
   VITE_BASE_URL_DEV=http://localhost:3030
   ```

4. Inicia el servidor (producción):

   ```sh
   yarn start
   ```

4. Inicia el servidor (depuración):

   ```sh
   yarn dev --host
   ```   

   El servidor estará disponible en `http://localhost:5173`.