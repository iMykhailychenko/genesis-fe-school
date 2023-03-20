export interface StorageType<T> {
    setLocalData: (key: string, data: T) => void;
    removeLocalData: (key: string) => void;
    getLocalData: (key: string) => T | null;
}

export class Storage<T> implements StorageType<T> {
    constructor(private prefix: string = '') {}

    public setLocalData = (key: string, progress: T): void => {
        localStorage.setItem(this.prefix + key, JSON.stringify(progress));
    };

    public removeLocalData = (key: string): void => {
        localStorage.setItem(this.prefix + key, '');
    };

    public getLocalData = (key: string): T | null => {
        const json = localStorage.getItem(this.prefix + key);

        if (!json) return null;

        return JSON.parse(json);
    };
}
