interface Window {
  dataLayer: {
    event: string;
    data?: unknown;
  }[];
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_URL: string;
    }
  }
}
