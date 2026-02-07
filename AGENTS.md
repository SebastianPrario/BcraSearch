# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in the BcraSearch repository.

## Project Overview

BcraSearch is a React 19 + TypeScript web application that allows users to query financial and credit information from Argentina's Central Bank (BCRA) using CUIT numbers. The app provides debt status and rejected checks information with a modern, responsive interface.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview production build locally

### Testing
This project currently has no test framework configured. When adding tests, consider:
- Setting up Vitest or Jest with React Testing Library
- Following the existing component structure for test organization
- Testing API hooks, form validation, and UI components

## Code Style Guidelines

### TypeScript Configuration
- Strict mode enabled with comprehensive linting rules
- ES2020 target with DOM libraries
- React JSX transform enabled
- No unused locals/parameters allowed
- No fallthrough cases in switch statements

### Import Organization
```typescript
// 1. External libraries (React, third-party)
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// 2. Internal types and interfaces
import type { Data, Deuda } from '../types/api';

// 3. Internal components and utilities
import { formatearImporte } from '../lib/helpers/formaterImporte';
import ResultCard from '../components/ResultCard/ResultCard';
```

### Component Structure
- Use functional components with TypeScript interfaces for props
- Follow the pattern: `export default function ComponentName({ prop }: Props) { }`
- Return null for invalid/empty states early
- Use React hooks (useState, useCallback, etc.) appropriately

### Naming Conventions
- **Components**: PascalCase (e.g., `ResultCard`, `NavBar`)
- **Functions/Variables**: camelCase (e.g., `formatearImporte`, `useBcraData`)
- **Interfaces/Types**: PascalCase with descriptive names (e.g., `UseBcraDataReturn`)
- **Constants**: UPPER_SNAKE_CASE for environment variables and CSS custom properties

### Styled Components
- Use styled-components for component-specific styles
- Define CSS custom properties (CSS variables) for consistent theming
- Implement responsive design with mobile-first approach using media queries
- Use semantic HTML elements within styled components

### Error Handling
- Use try-catch blocks in API calls and async operations
- Provide user-friendly error messages in Spanish
- Log technical errors to console for debugging
- Use Promise.allSettled for parallel API requests where partial success is acceptable

### API Integration
- Use axios for HTTP requests
- Store API URLs in environment variables (VITE_API_URL_*)
- Implement proper loading states and error handling
- Use TypeScript interfaces for API response types

### File Organization
```
src/
├── components/          # Reusable UI components
│   ├── ComponentName/   # Component folder with index file
│   └── styled-components.tsx  # Shared styled components
├── pages/              # Route-level components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and helpers
│   └── helpers/        # Helper functions
├── types/              # TypeScript type definitions
└── services/           # API service layers
```

### Code Quality
- ESLint configuration with React Hooks and React Refresh plugins
- TypeScript strict mode for type safety
- No console.log statements in production code (use for debugging only)
- Proper prop validation with TypeScript interfaces

### Bootstrap Integration
- Import Bootstrap CSS in App.tsx
- Use React Bootstrap components alongside custom styled-components
- Maintain consistency with Bootstrap grid system and utility classes

### Environment Variables
- Use VITE_ prefix for environment variables
- Store sensitive API URLs and configuration in .env file
- Access via `import.meta.env.VITE_VARIABLE_NAME`

## Development Workflow

1. Always run `npm run lint` after making changes to ensure code quality
2. Test responsive design on different screen sizes
3. Validate CUIT input using the existing `validarCuit` helper function
4. Handle loading and error states appropriately in UI components
5. Follow the existing color scheme and design patterns using CSS custom properties

## Common Patterns

### Custom Hook Pattern
```typescript
interface UseHookReturn {
  data: Type | null;
  loading: boolean;
  error: string;
  action: (param: string) => Promise<void>;
}

export const useHook = (): UseHookReturn => {
  // Implementation
};
```

### Component Props Pattern
```typescript
interface ComponentProps {
  data: DataType;
  onAction?: (param: string) => void;
}

export default function Component({ data, onAction }: ComponentProps) {
  // Implementation
}
```

### API Type Pattern
```typescript
export interface EntityType {
  property: string;
  anotherProperty: number;
}

export interface ResponseType {
  results: EntityType[];
}
```