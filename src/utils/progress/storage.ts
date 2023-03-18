export interface StorageType<T> {
    setLocalData: (data: T) => void;
    getLocalData: () => T | null;
}

export class Storage<T> implements StorageType<T> {
    private readonly key: string;

    constructor(key: string) {
        this.key = key;
    }

    public setLocalData = (progress: T): void => {
        localStorage.setItem(this.key, JSON.stringify(progress));
    };

    public getLocalData = (): T | null => {
        const json = localStorage.getItem(this.key);

        if (!json) return null;

        return JSON.parse(json);
    };
}
