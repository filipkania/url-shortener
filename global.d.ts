export {};

declare global { 
    const URLS: KVNamespace;
}

export interface Settings {
    key?: string;
    random?: boolean;
    expire?: number;
    url?: string;
}