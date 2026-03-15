# react-vite-tailwind-msal-starter 🔥

Un punto de partida moderno, escalable y listo para producción para construir aplicaciones empresariales en React. Este boilerplate está diseñado con las mejores prácticas de la industria, garantizando alto rendimiento, excelente experiencia de desarrollo (DX) y robustez.

## 🚀 Tecnologías Principales

Este proyecto utiliza un ecosistema tecnológico moderno y altamente optimizado:

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Rápido y eficiente)
- **Rutas:** [React Router v7](https://reactrouter.com/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) (Accesibles y personalizables sin estilos base)
- **Estado Global:** [Zustand](https://github.com/pmndrs/zustand)
- **Fetching de Datos:** [TanStack React Query](https://tanstack.com/query/latest)
- **Manejo de Formularios:** [TanStack React Form](https://tanstack.com/form/latest) + [Zod](https://zod.dev/) para validación de datos
- **Autenticación SSO:** [Azure MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js) (Microsoft Entra ID)
- **Animaciones:** [Motion](https://motion.dev/)
- **Gráficos:** [Recharts](https://recharts.org/) / React Charts
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Notificaciones:** [Sonner](https://sonner.emilkowal.ski/)

## ✨ Características Destacadas

- **Autenticación Empresarial:** Integración lista usando Azure Active Directory (MSAL) con flujos de SSO pre-configurados.
- **UI Moderna y Accesible:** Componentes base construidos sobre Radix UI combinados con el poder de utilidad de Tailwind CSS.
- **Arquitectura Escalable:** Estructura de carpetas enfocada a dominios y modularidad (features, components, hooks, stores).
- **Gestión de Carga Inteligente:** Manejo de estados asíncronos mediante React Query y skeletons UI con Shimmer from Structure.
- **Rendimiento:** Configuración optimizada con el nuevo React Compiler y SWC/Babel para tiempos de compilación veloces.
- **Manejo de Formularios Type-Safe:** Validación estricta end-to-end usando Zod & TanStack Form.

## 📁 Estructura del Proyecto

```text
src/
├── app/               # Configuración central (Router, Providers, Stores globales)
├── components/        # Componentes UI reutilizables (Botones, Layouts, Modales)
├── hooks/             # Custom hooks genéricos y de lógica (ej. useMsalAuth)
├── lib/               # Utilidades de terceros (Configuración MSAL, clientes HTTP)
├── pages/             # Vistas principales de la aplicación divididas por ruta
├── shared/            # Tipos globales, constantes y configuración compartida
├── index.css          # Estilos globales de Tailwind
└── main.tsx           # Punto de entrada de la aplicación
```

## 🛠️ Comenzando

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (v18 o superior recomendado)
- **npm**, **yarn**, o **pnpm** (el proyecto usa npm por defecto)

### Instalación

Clona el repositorio e instala las dependencias:

```bash
# 1. Clona este proyecto
git clone <url-del-repositorio>

# 2. Navega al directorio
cd React-Template-Boilerplate-Project

# 3. Instala las dependencias
npm install
```

### Configuración de Entorno

Clona o renombra el archivo `.env.example` a `.env` (si es necesario) y ajusta las variables de entorno, especialmente las correspondientes a la configuración de SSO de Microsoft Azure:

```env
VITE_MSAL_CLIENT_ID=tu_client_id_aqui
VITE_MSAL_TENANT_ID=tu_tenant_id_aqui
```

### Script de Desarrollo

Para levantar el servidor de desarrollo con Hot Module Replacement (HMR):

```bash
npm run dev
```

La aplicación estará disponible localmente, usualmente en `http://localhost:5173`.

### Construcción para Producción

Para compilar la aplicación para entornos de producción:

```bash
npm run build
```

Esto generará un directorio `dist/` con los archivos optimizados. Puedes ejecutar `npm run preview` para probar el build localmente antes de desplegar.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el entorno de desarrollo usando Vite.
- `npm run build` - Verifica el tipado con TypeScript y compila el proyecto.
- `npm run preview` - Previsualiza los archivos compilados en `dist/`.
- `npm run lint` - Ejecuta ESLint para analizar errores en el código.

---

_Desarrollado para proveer una base sólida y confiable en la creación de aplicaciones web de alto alcance._
