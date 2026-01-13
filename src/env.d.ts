/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_NAME?: string;
  // Add more environment variables as needed:
  // readonly VITE_API_URL?: string;
  // readonly VITE_APP_TITLE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}