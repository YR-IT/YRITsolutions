/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // 👈 your env variable
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  