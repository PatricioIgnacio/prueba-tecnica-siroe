# Cotizador de Precios por Volumen

## 🚀 Descripción del Proyecto

El Cotizador de Precios por Volumen es una aplicación web desarrollada en Angular 14 que permite calcular el precio basado en el volumen de un objeto según sus dimensiones ingresadas (largo, ancho y alto). Además, el sistema genera un registro del pedido, incluyendo su identificador, volumen calculado, precio, y la fecha y hora de creación.

## 🔄 Características Clave

Cálculo de Volumen: Permite ingresar dimensiones para calcular automáticamente el volumen en cm³.

Límite de Volumen: Restricción automática si el volumen excede los 2m³, mostrando un mensaje de error.

Cálculo de Precio: Estimación del precio basada en la fórmula definida.

Registro de Pedidos: Genera un ID único para cada pedido, incluyendo la fecha y hora de creación.

Interfaz Intuitiva: Diseño centrado en el usuario para facilitar la navegación y operación.

## 🔄 Flujo de Trabajo

Ingrese las dimensiones del objeto (largo, ancho y alto).

Haga clic en "Calcular" para obtener el volumen y precio estimado.

Si el volumen es válido, confirme el pedido.

Visualice los detalles del pedido generado, incluyendo:

Número de Pedido

Volumen

Precio

Fecha y Hora de Creación

Reinicie el formulario para realizar otro pedido.

## 🔧 Requisitos Técnicos

Angular CLI: Version 14.0.0 o superior

Node.js: Version 14 o superior

NPM: Version 6 o superior

## 🔄 Configuración del Proyecto

Clone el repositorio en su equipo local:

git clone <repositorio-url>

Instale las dependencias del proyecto:

npm install

Ejecute el servidor de desarrollo:

ng serve

Navegue a http://localhost:4200/ para ver la aplicación en acción.

## 🌐 Estructura del Proyecto

Componentes:

CotizadorComponent: Lógica principal para calcular volumen, manejar pedidos y errores.

ResultadoComponent: Visualización de los detalles del pedido generado.

Estilos: Diseñados en SCSS para garantizar una apariencia moderna y responsiva.

## ⚖️ Validación

Control de Errores:

Mensaje cuando el volumen excede el límite permitido.

Reinicio del formulario después de crear un pedido.

Pruebas Unitarias:

ng test

Para ejecutar pruebas unitarias con Karma.

## 🎮 Próximas Mejoras

Integración con servicios en la nube para almacenar registros de pedidos.

Implementación de autenticación de usuarios.

Soporte para configuración de tarifas personalizadas.

## 🚜 Credenciales del Equipo

Desarrollador: Patricio Ignacio Santibáñez Gonzalez

Contacto: [patricioignacio.santibanez@gmail.com]

🙏 Gracias por confiar en nuestras soluciones tecnológicas.