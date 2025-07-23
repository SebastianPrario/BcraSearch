/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_ENTIDADES: string;
  readonly VITE_API_URL_CHEQUES_RECHAZADOS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}