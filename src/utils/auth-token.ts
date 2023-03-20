import { AxiosInstance } from 'axios';

import { AuthResponse } from '@app/queries/auth/auth.types';
import { StorageType } from '@app/utils/storage';

export class AuthToken {
    private readonly AUTH_KEY = 'jwt-auth-key';

    constructor(private storage: StorageType<AuthResponse>, private axiosInstance: AxiosInstance) {}

    set = (data: AuthResponse): void => {
        this.storage.setLocalData(this.AUTH_KEY, data);
        this.axiosInstance.defaults.headers.Authorization = `Bearer ${data.token}`;
    };

    remove = (): void => {
        this.storage.removeLocalData(this.AUTH_KEY);
        this.axiosInstance.defaults.headers.Authorization = null;
    };

    refresh = (): boolean => {
        const data = this.storage.getLocalData(this.AUTH_KEY);
        if (!data) return false;

        this.axiosInstance.defaults.headers.Authorization = `Bearer ${data.token}`;
        return true;
    };
}
