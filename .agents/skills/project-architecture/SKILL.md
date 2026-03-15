---
name: project-architecture
description: Reglas y convenciones fundamentales de arquitectura, diseño y tecnologías para mantener la consistencia en el Boilerplate de React.
---

# 🏗️ Arquitectura y Estándares del Proyecto (React Boilerplate)

Este documento define las reglas estrictas, la arquitectura y los estándares de codificación que **debes** seguir al trabajar en esta base de código. Cualquier cambio, adición de código o refactorización debe apegarse a estas directrices para evitar desviaciones.

## 1. Stack Tecnológico Estricto
Al proponer o escribir código, **solo** puedes utilizar las siguientes bibliotecas y tecnologías que ya están configuradas en el proyecto. **No introduzcas nuevas dependencias** a menos que sea absolutamente necesario y explícitamente solicitado por el usuario.

- **Core:** React 19, TypeScript, Vite.
- **Enrutamiento:** React Router v7.
- **EstadGlobal / Local:** Zustand para estado global. React Hook Form / TanStack Form + Zod para formularios.
- **Datos Asíncronos:** TanStack React Query.
- **Estilos y UI:** Tailwind CSS v4, Radix UI (sin estilos base, para accesibilidad), Lucide React (iconos).
- **Animaciones:** Motion (framer-motion).
- **Autenticación:** Azure MSAL (`@azure/msal-react`, `@azure/msal-browser`).
- **Notificaciones / UI:** Sonner.
- **Validación:** Zod.

## 2. Estructura de Directorios Aprobada
El código debe ubicarse en la carpeta correspondiente dentro de `src/` según su dominio:

- `src/app/` -> Proveedores globales (`AppProviders`, `MsalAppProvider`, `TanStackProvider`), configuración del Router y Stores globales (Zustand).
- `src/components/` -> 
  - `ui/` (Componentes atómicos basados en Radix UI/Tailwind: Botones, Inputs, etc.)
  - `widgets/` (Componentes compuestos más complejos: Modales, Loaders, Menús)
  - `layouts/` (Estructuras de páginas como `RootLayout`, `DashboardLayout`)
- `src/hooks/` -> Custom hooks (ej. `useMsalAuth`).
- `src/lib/` -> Configuración principal de librerías de terceros (ej. setup de Axios, instanciación de MSAL `msalInstance.ts`).
- `src/pages/` -> Vistas principales. Las páginas deben ser cargadas de forma perezosa (`lazy()`) en el router.
- `src/shared/` -> Tipos globales de TS, constantes, configuración estática.

## 3. Reglas de Codificación (TypeScript & React)

1. **Tipado Estricto (TypeScript):**
   - Usa `type` o `interface` para todas las props y estados.
   - Prohíbe el uso de `any` explícito. Usa `unknown` si el tipo no se conoce de antemano y haz type narrowing.
   - Define los tipos de respuesta de la API usando Zod schemas e infiere el tipo de TS usando `z.infer<typeof Schema>`.

2. **Componentes React:**
   - Define los componentes como Funciones de Flecha (Arrow Functions) tipados con `FC` o directamente el tipo de retorno.
   - Todos los componentes exportados por defecto deben usar `export default ComponentName;` al final del archivo.

3. **Manejo de Estilos:**
   - Usa clases utilitarias de **Tailwind v4**.
   - Para clases dinámicas complejas, utiliza la combinación de `clsx` y `tailwind-merge` (usualmente abstraído en una función `cn()` en `src/lib/utils.ts` si existe).

4. **Autenticación (MSAL):**
   - **NUNCA** utilices `useMsal` o `useIsAuthenticated` de `@azure/msal-react` directamente en los componentes de las páginas.
   - Usa siempre el custom hook centralizado **`useMsalAuth`** ubicado en `src/hooks/useMsalAuth.tsx` para cualquier operación de inicio o cierre de sesión, o para obtener tokens.
   - Las rutas protegidas deben ser manejadas en la capa de Layout (ej. `DashboardLayout`).

5. **Estado Global y Manejo de Datos (Asíncronos):**
   - Usa **TanStack Query** (`useQuery`, `useMutation`) para **todo** el fetching de datos de servidores. No manejes estados de carga o error de peticiones API con `useState` y `useEffect`.
   - Usa **Zustand** *solamente* para el estado local persistente de la interfaz (ej. `useLoadingStore`, temas visuales, sidebar abierto/cerrado).

6. **Componentes de UI / Diseño (Guidelines):**
   - No construyas componentes de UI desde cero si involucran manejo de estado accesible complejo (ej. selectores, modales, diálogos). Siempre apóyate en las primitivas de **Radix UI**.
   - Usa diseños modernos, "Premium" y "Glassmorphism" sutil. Evita los colores genéricos del navegador y diseña las views para que encajen dentro de un esquema Enterprise pero limpio (bordes curvos `rounded-lg` o `rounded-xl`, sombras sutiles `shadow-sm`, ring states claros en focus).

## 4. Workflows de Desarrollo (Proceso Automático)

Si vas a agregar algo nuevo:
1. **Analiza:** Determina si el componente ya existe en `src/components/ui`.
2. **Importa:** Usa alias paths (`@/components/...`, `@/hooks/...`, `@/types/...`). **NO USES** rutas relativas largas como `../../components/`.
3. **Pule:** Agrega los íconos (Lucide React) y animaciones de carga pertinentes. No dejes pantallas estancadas durante peticiones de red (usa el `LoadingOverlay`).
4. **Verifica:** El código no debe tener errores de linter.

## ⚠️ PROHIBICIONES

- Prohibido modificar la jerarquía de Providers en `main.tsx` a menos que sea coordinado en `AppProviders`.
- Prohibido dejar promesas sueltas (`.catch()` faltantes o falta de bloques `try/catch` en funciones async).
- Prohibido introducir CSS puro o SCSS; todo el styling se hace por utilidades de Tailwind a través de `className`.
