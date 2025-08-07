# Consultas BCRA

Aplicación web que permite consultar información financiera y crediticia de personas y empresas a través de su CUIT utilizando las APIs públicas del Banco Central de la República Argentina (BCRA).

## Características

- Consulta de situación en la Central de Deudores del Sistema Financiero
- Consulta de Cheques Rechazados
- Interfaz moderna y responsive
- Posibilidad de imprimir resultados
- Ayuda integrada sobre clasificaciones crediticias
- Validación de CUIT en tiempo real

## Tecnologías utilizadas

- React 19
- TypeScript
- Styled Components
- React Bootstrap
- Vite
- Axios
- React-to-print

1. Instalar dependencias
```sh
npm install
```


2. Ejecutar en modo desarrollo
```sh
npm run dev
```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el proyecto para producción
- `npm run preview`: Vista previa de la versión compilada
- `npm run lint`: Ejecuta el linter

## Estructura del proyecto

```
src/
  ├── components/      # Componentes reutilizables
  ├── pages/          # Páginas/rutas principales
  ├── lib/            # Utilidades y helpers
  ├── services/       # Servicios de API
  ├── types/          # Tipos TypeScript
  └── assets/         # Recursos estáticos
```

