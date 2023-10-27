declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

interface ImportMeta {
  env: {
    VITE_REACT_APP_API_KEY: string;
    // Add other environment variables if needed
  };
}