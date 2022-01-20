export {};

declare global { 
    const URLS: KVNamespace;
}

export interface Settings {
    key?: string | undefined;
    expire?: number | undefined;
    url?: string;
}