declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_URL: string;
    readonly NEXT_PUBLIC_API_URL: string;
    readonly ENVIFY_API_KEY: string;
    readonly NEXT_PUBLIC_ENVIFY_API_KEY: string;
    readonly NEXT_PUBLIC_AUTH_API_URL: string;
  }
}
