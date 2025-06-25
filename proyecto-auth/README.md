# Proyecto de Autenticación

Este proyecto es una aplicación de autenticación que permite a los usuarios registrarse e iniciar sesión. Está construido con TypeScript y utiliza un enfoque modular para la organización del código.

## Estructura del Proyecto

```
proyecto-auth
├── src
│   ├── controllers          # Controladores para manejar la lógica de negocio
│   │   ├── loginController.ts
│   │   └── registerController.ts
│   ├── routes               # Rutas de la aplicación
│   │   ├── loginRoutes.ts
│   │   └── registerRoutes.ts
│   ├── models               # Modelos de datos
│   │   └── userModel.ts
│   ├── middlewares          # Middleware para la autenticación
│   │   └── authMiddleware.ts
│   ├── app.ts               # Punto de entrada de la aplicación
│   └── types                # Definiciones de tipos
│       └── index.ts
├── package.json             # Configuración de npm
├── tsconfig.json            # Configuración de TypeScript
└── README.md                # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL del repositorio>
   ```
2. Navega al directorio del proyecto:
   ```
   cd proyecto-auth
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

Para iniciar la aplicación, ejecuta el siguiente comando:
```
npm start
```

Asegúrate de tener configurada la base de datos y las variables de entorno necesarias para que la aplicación funcione correctamente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.